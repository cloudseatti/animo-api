-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" INTEGER NOT NULL,
    "offersOfEmail" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserProfissional" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "cro" TEXT NOT NULL,
    "categoryCro" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" INTEGER NOT NULL,
    "offersOfEmail" BOOLEAN NOT NULL,

    CONSTRAINT "UserProfissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserJuridical" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "cro" TEXT NOT NULL,
    "categoryCro" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" INTEGER NOT NULL,
    "offersOfEmail" BOOLEAN NOT NULL,
    "fantasyName" TEXT NOT NULL,
    "corporateReason" TEXT NOT NULL,

    CONSTRAINT "UserJuridical_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "publicPlace" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complemnet" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "referencePonit" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "serviceID" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" TEXT NOT NULL,
    "patientName" TEXT NOT NULL,
    "patientLastName" TEXT NOT NULL,
    "patientDateOfBirth" TEXT NOT NULL,
    "patientCpf" TEXT NOT NULL,
    "patientGender" "Gender" NOT NULL,
    "addressId" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "toothSelect" TEXT NOT NULL,
    "observation" TEXT NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_serviceID_fkey" FOREIGN KEY ("serviceID") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
