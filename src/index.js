"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const client_1 = require("@prisma/client");
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = (0, fastify_1.default)({ logger: true });
    app.register(cors_1.default, { origin: true });
    const prisma = new client_1.PrismaClient({ log: ['error'] });
    app.get("/categories", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const categories = yield prisma.category.findMany();
        return reply.status(200).send(categories);
    }));
    app.get("/cars", (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        const cars = yield prisma.car.findMany();
        return reply.status(200).send(cars);
    }));
    app.listen({ port: 3333 });
});
start();
