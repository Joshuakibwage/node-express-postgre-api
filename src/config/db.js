import { prismaClient } from "@prisma/client";

const prisma = new prismaClient({
    log: process.env.NODE_ENV ===  "development" ? ["query", "error", "warn"] : ["error"]
});

const connectDB = async() => {
    try {
        await prisma.$connect();
        console.log("DB connected via prisma");
    } catch (error) {
        console.error(`DB connection error: ${error}`)
        process.exit(1);
    }
};

const disconnectDB = async() => {
    await prisma.$disconnect();
};

export { prisma, connectDB, disconnectDB };