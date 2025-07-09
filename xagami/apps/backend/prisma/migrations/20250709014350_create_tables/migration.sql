-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "barbeiro" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "professionais" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "avaliacao" REAL NOT NULL,
    "qtdeAvaliacao" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "services" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "qtdeSlots" INTEGER NOT NULL,
    "imagemUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "schedulings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "professionalId" INTEGER NOT NULL,
    CONSTRAINT "schedulings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "schedulings_professionalId_fkey" FOREIGN KEY ("professionalId") REFERENCES "professionais" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_SchedulingToService" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_SchedulingToService_A_fkey" FOREIGN KEY ("A") REFERENCES "schedulings" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_SchedulingToService_B_fkey" FOREIGN KEY ("B") REFERENCES "services" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "services_name_key" ON "services"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_SchedulingToService_AB_unique" ON "_SchedulingToService"("A", "B");

-- CreateIndex
CREATE INDEX "_SchedulingToService_B_index" ON "_SchedulingToService"("B");
