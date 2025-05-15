/*
  Warnings:

  - You are about to drop the `test2` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "test2";

-- CreateTable
CREATE TABLE "board" (
    "board_id" SERIAL NOT NULL,
    "title" TEXT,
    "category" TEXT,
    "owner" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "board_pkey" PRIMARY KEY ("board_id")
);

-- CreateTable
CREATE TABLE "card" (
    "card_id" SERIAL NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "gif" TEXT,
    "owner" TEXT,
    "votes" INTEGER DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "board_id" INTEGER,

    CONSTRAINT "card_pkey" PRIMARY KEY ("card_id")
);

-- AddForeignKey
ALTER TABLE "card" ADD CONSTRAINT "card_board_id_fkey" FOREIGN KEY ("board_id") REFERENCES "board"("board_id") ON DELETE SET NULL ON UPDATE CASCADE;
