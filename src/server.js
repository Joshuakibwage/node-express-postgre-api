import express from "express";
import { config } from "dotenv";
import { connectDb, disconnectDb } from "./config/db.js";

//import routes
import movieRoutes from "./routes/movieRoutes.js";

config();
connectDb();

const app = express();


//api routes
app.use("/movies", movieRoutes);


const PORT = 5001;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


//Handle unhandled promise ejections eg.(database connection errors)
process.on("unhandledRejection", (err) => {
    console.log("Unhandled rejection:", err);

    server.close(async => {
        await disconnectDb();
        process.exit(1);
    })
})

//Handle uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log("Uncaught exception:", err);
    await disconnectDB();
    process.exit(1);
});

//Graceful shutdown
process.on("SIGTERM", async () => {
    console.log("SIGTERM received, shutting down gracefully");
    server.close(async () => {
        await disconnectDb();
        process.exit(0);
    })
})