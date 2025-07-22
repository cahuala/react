import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

if (!admin.apps.length) {
  admin.initializeApp();
}

const idProjeto = process.env.GCP_PROJECT;

export const backupSemanal = functions.pubsub
  .schedule('0 1 * * *') // Todo dia às 01:00
  .timeZone('America/Sao_Paulo')
  .onRun(() => _executarBackup('diario'));

async function _executarBackup(tipo: string, colecoes: string[] = []) {
  if (!idProjeto) {
    functions.logger.error('Variável de ambiente GCP_PROJECT não definida');
    return;
  }

  functions.logger.info('Backup semanal iniciado');
  const dt = new Date();
  const data = `${dt.getFullYear()}-${dt.getMonth() + 1}-${dt.getDate()}`;

  const firestore = new admin.firestore.v1.FirestoreAdminClient();
  await firestore.exportDocuments({
    name: firestore.databasePath(idProjeto, '(default)'),
    outputUriPrefix: `gs://${idProjeto}.appspot.com/backups/${tipo}/${data}`,
    collectionIds: colecoes,
  });

  functions.logger.info('Backup semanal concluído');
}
