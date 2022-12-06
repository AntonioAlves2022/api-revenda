import Fastify from "fastify";
import cors from "@fastify/cors";
import {PrismaClient} from "@prisma/client"


const start = async () => {
    const app = Fastify({logger: true});
    app.register(cors, {origin: true})
    const prisma = new PrismaClient({log:['error']})

    app.get("/categories", async (request, reply) =>{
        const categories = await prisma.category.findMany();
        return reply.status(200).send(categories);
    });

    app.get("/cars", async (request, reply) =>{
        const cars = await prisma.car.findMany();
        return reply.status(200).send(cars);
    });
}

start();