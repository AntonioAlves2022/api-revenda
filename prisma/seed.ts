import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({log: ['query']});


const execute = async () =>{
    const sedan = await prisma.category.create({
        data: {
            name: "SEDAN"
        }
    });

    const hatch = await prisma.category.create({
        data: {
            name: "HATCH"
        }
    });

    await prisma.car.create({
        data:{
            brand: "Fiat",
            model: "Argo",
            licensePlate: "IVX7888",
            price: 65000,
            categoryId: hatch.id
        }
    });


    await prisma.car.create({
        data:{
            brand: "Chevrolet",
            model: "Onix",
            licensePlate: "IIP3422",
            price: 78500,
            categoryId: sedan.id
        }
    });

    await prisma.car.create({
        data: {
            brand: "Renault",
            model: "Oroch",
            licensePlate: "IIW3211",
            price: 143900,
            category:{
                create:{
                    name: "PICKUP"
                }
            }
        }

        
    });
}

execute();