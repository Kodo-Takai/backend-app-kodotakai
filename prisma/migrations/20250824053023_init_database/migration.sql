-- CreateTable
CREATE TABLE "public"."Destinations" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "location" VARCHAR(100) NOT NULL,
    "latitude" DECIMAL(10,2) NOT NULL,
    "longitude" DECIMAL(10,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Destinations_pkey" PRIMARY KEY ("id")
);
