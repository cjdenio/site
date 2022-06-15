-- CreateTable
CREATE TABLE "GuestbookEntry" (
    "id" SERIAL NOT NULL,
    "avatar" TEXT,
    "username" TEXT NOT NULL,
    "name" TEXT,
    "message" TEXT NOT NULL,

    CONSTRAINT "GuestbookEntry_pkey" PRIMARY KEY ("id")
);
