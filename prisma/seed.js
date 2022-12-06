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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient({ log: ['query'] });
const execute = () => __awaiter(void 0, void 0, void 0, function* () {
    const sedan = yield prisma.category.create({
        data: {
            name: "SEDAN"
        }
    });
    const hatch = yield prisma.category.create({
        data: {
            name: "HATCH"
        }
    });
    yield prisma.car.create({
        data: {
            brand: "Fiat",
            model: "Argo",
            licensePlate: "IVX7888",
            price: 65000,
            categoryId: hatch.id
        }
    });
    yield prisma.car.create({
        data: {
            brand: "Chevrolet",
            model: "Onix",
            licensePlate: "IIP3422",
            price: 78500,
            categoryId: sedan.id
        }
    });
    yield prisma.car.create({
        data: {
            brand: "Renault",
            model: "Oroch",
            licensePlate: "IIW3211",
            price: 143900,
            category: {
                create: {
                    name: "PICKUP"
                }
            }
        }
    });
});
execute();
