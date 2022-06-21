-- CreateTable
CREATE TABLE "Transport" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DestinationTransport" (
    "transport_id" INTEGER NOT NULL,
    "destination_id" INTEGER NOT NULL,

    CONSTRAINT "DestinationTransport_pkey" PRIMARY KEY ("transport_id","destination_id")
);

-- AddForeignKey
ALTER TABLE "DestinationTransport" ADD CONSTRAINT "DestinationTransport_destination_id_fkey" FOREIGN KEY ("destination_id") REFERENCES "Destination"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DestinationTransport" ADD CONSTRAINT "DestinationTransport_transport_id_fkey" FOREIGN KEY ("transport_id") REFERENCES "Transport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
