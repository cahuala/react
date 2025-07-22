import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { getCore } from '../../core'

import { EventoDTO, ExtratoDTO, UsuarioDTO } from 'adapters';

if (!admin.apps.length) {
  admin.initializeApp();
}

const atualizarFaturaDosCartoes = functions.pubsub
  .topic('extrato-alterado')
  .onPublish(async (message) => {
    const eventoDTO: EventoDTO = message.json;
    const extratos: ExtratoDTO[] = eventoDTO.corpo;

    const email = eventoDTO.usuarioEmail!;
    const usuario: UsuarioDTO = { nome: '', email, config: {} };
    const core = getCore()
    await core.cartao.atualizarFaturas(usuario, extratos)
    functions.logger.info(extratos.length, usuario);
  });

export { atualizarFaturaDosCartoes };
