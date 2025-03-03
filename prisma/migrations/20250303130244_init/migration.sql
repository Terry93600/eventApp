/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Event` table. All the data in the column will be lost.
  - Added the required column `adress` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_at` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `picture` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_at` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "createdAt",
DROP COLUMN "date",
DROP COLUMN "description",
DROP COLUMN "title",
ADD COLUMN     "adress" JSONB NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "desc" TEXT NOT NULL,
ADD COLUMN     "end_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "picture" TEXT NOT NULL,
ADD COLUMN     "start_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "event_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
