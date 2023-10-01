/*
  Warnings:

  - You are about to drop the column `public_id` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the column `secure_url` on the `Video` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('CREATED', 'UPLOADING', 'COMPLETED');

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "public_id",
DROP COLUMN "secure_url",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'CREATED',
ADD COLUMN     "title" TEXT,
ADD COLUMN     "video_path" TEXT;

-- CreateTable
CREATE TABLE "Transcription" (
    "id" TEXT NOT NULL,
    "videoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transcription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Transcription" ADD CONSTRAINT "Transcription_videoId_fkey" FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE CASCADE ON UPDATE CASCADE;
