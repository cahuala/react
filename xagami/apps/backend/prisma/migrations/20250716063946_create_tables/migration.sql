-- CreateEnum
CREATE TYPE "TipoUtilizador" AS ENUM ('particular', 'empresarial', 'prestador');

-- CreateEnum
CREATE TYPE "TipoServico" AS ENUM ('entrega', 'viagem');

-- CreateEnum
CREATE TYPE "EstadoSolicitacao" AS ENUM ('PENDENTE', 'EM_CURSO', 'CONCLUIDO', 'CANCELADO');

-- CreateEnum
CREATE TYPE "StatusEntrega" AS ENUM ('PENDENTE', 'EM_TRANSITO', 'ENTREGUE', 'FALHOU');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "tipo" "TipoUtilizador" NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotels" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "avaliacao" DOUBLE PRECISION NOT NULL,
    "qtdeAvaliacao" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "hotels_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "qtdeSlots" INTEGER NOT NULL,
    "imagemUrl" TEXT NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schedulings" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "hotelId" INTEGER NOT NULL,

    CONSTRAINT "schedulings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes_particulares" (
    "id" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "docIdentificacao" TEXT NOT NULL,

    CONSTRAINT "clientes_particulares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes_empresariais" (
    "id" TEXT NOT NULL,
    "nomeEmpresa" TEXT NOT NULL,
    "NIF" TEXT NOT NULL,
    "alvara" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,

    CONSTRAINT "clientes_empresariais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contactos_empresas" (
    "id" TEXT NOT NULL,
    "clienteEmpresarialId" TEXT NOT NULL,
    "numero" TEXT NOT NULL,

    CONSTRAINT "contactos_empresas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documentos_legais" (
    "id" TEXT NOT NULL,
    "clienteEmpresarialId" TEXT NOT NULL,
    "nomeArquivo" TEXT NOT NULL,

    CONSTRAINT "documentos_legais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prestadores_servico" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "contacto" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,

    CONSTRAINT "prestadores_servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documentos_do_prestador" (
    "id" TEXT NOT NULL,
    "prestadorId" TEXT NOT NULL,
    "nomeArquivo" TEXT NOT NULL,

    CONSTRAINT "documentos_do_prestador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "frotas_veiculo" (
    "id" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "prestadorId" TEXT,
    "clienteEmpresarialId" TEXT,

    CONSTRAINT "frotas_veiculo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagens_veiculos" (
    "id" TEXT NOT NULL,
    "veiculoId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "legenda" TEXT,

    CONSTRAINT "imagens_veiculos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documentos_veiculos" (
    "id" TEXT NOT NULL,
    "veiculoId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "urlArquivo" TEXT NOT NULL,
    "validade" TIMESTAMP(3),

    CONSTRAINT "documentos_veiculos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solicitacoes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "tipoServico" "TipoServico" NOT NULL,
    "origem" TEXT NOT NULL,
    "destino" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataSolicitacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" "EstadoSolicitacao" NOT NULL,

    CONSTRAINT "solicitacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "entregas" (
    "id" TEXT NOT NULL,
    "solicitacaoId" TEXT NOT NULL,
    "prestadorId" TEXT,
    "dataEntrega" TIMESTAMP(3),
    "status" "StatusEntrega" NOT NULL,

    CONSTRAINT "entregas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos_entregas" (
    "id" TEXT NOT NULL,
    "entregaId" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "quantidade" INTEGER NOT NULL,
    "pesoKg" DOUBLE PRECISION,
    "valor" DOUBLE PRECISION,
    "fragil" BOOLEAN NOT NULL DEFAULT false,
    "imagemUrl" TEXT,

    CONSTRAINT "produtos_entregas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "imagens_produtos_entregas" (
    "id" TEXT NOT NULL,
    "produtoEntregaId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "legenda" TEXT,

    CONSTRAINT "imagens_produtos_entregas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SchedulingToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "services_name_key" ON "services"("name");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_empresariais_NIF_key" ON "clientes_empresariais"("NIF");

-- CreateIndex
CREATE UNIQUE INDEX "frotas_veiculo_matricula_key" ON "frotas_veiculo"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "_SchedulingToService_AB_unique" ON "_SchedulingToService"("A", "B");

-- CreateIndex
CREATE INDEX "_SchedulingToService_B_index" ON "_SchedulingToService"("B");

-- AddForeignKey
ALTER TABLE "schedulings" ADD CONSTRAINT "schedulings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedulings" ADD CONSTRAINT "schedulings_hotelId_fkey" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientes_particulares" ADD CONSTRAINT "clientes_particulares_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "clientes_empresariais" ADD CONSTRAINT "clientes_empresariais_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contactos_empresas" ADD CONSTRAINT "contactos_empresas_clienteEmpresarialId_fkey" FOREIGN KEY ("clienteEmpresarialId") REFERENCES "clientes_empresariais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documentos_legais" ADD CONSTRAINT "documentos_legais_clienteEmpresarialId_fkey" FOREIGN KEY ("clienteEmpresarialId") REFERENCES "clientes_empresariais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prestadores_servico" ADD CONSTRAINT "prestadores_servico_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documentos_do_prestador" ADD CONSTRAINT "documentos_do_prestador_prestadorId_fkey" FOREIGN KEY ("prestadorId") REFERENCES "prestadores_servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "frotas_veiculo" ADD CONSTRAINT "frotas_veiculo_prestadorId_fkey" FOREIGN KEY ("prestadorId") REFERENCES "prestadores_servico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "frotas_veiculo" ADD CONSTRAINT "frotas_veiculo_clienteEmpresarialId_fkey" FOREIGN KEY ("clienteEmpresarialId") REFERENCES "clientes_empresariais"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagens_veiculos" ADD CONSTRAINT "imagens_veiculos_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "frotas_veiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "documentos_veiculos" ADD CONSTRAINT "documentos_veiculos_veiculoId_fkey" FOREIGN KEY ("veiculoId") REFERENCES "frotas_veiculo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes" ADD CONSTRAINT "solicitacoes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entregas" ADD CONSTRAINT "entregas_solicitacaoId_fkey" FOREIGN KEY ("solicitacaoId") REFERENCES "solicitacoes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "entregas" ADD CONSTRAINT "entregas_prestadorId_fkey" FOREIGN KEY ("prestadorId") REFERENCES "prestadores_servico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produtos_entregas" ADD CONSTRAINT "produtos_entregas_entregaId_fkey" FOREIGN KEY ("entregaId") REFERENCES "entregas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "imagens_produtos_entregas" ADD CONSTRAINT "imagens_produtos_entregas_produtoEntregaId_fkey" FOREIGN KEY ("produtoEntregaId") REFERENCES "produtos_entregas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SchedulingToService" ADD CONSTRAINT "_SchedulingToService_A_fkey" FOREIGN KEY ("A") REFERENCES "schedulings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SchedulingToService" ADD CONSTRAINT "_SchedulingToService_B_fkey" FOREIGN KEY ("B") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
