import { config } from "dotenv";
config();

import express from "express";
import { connectDB, disconnectDB } from "./config/db.js";

// import routes
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import watchlistRoutes from "./routes/watchlistRoutes.js";



connectDB();

const app = express();

//body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// API routes
app.use("/movies", movieRoutes);
app.use("/auth", authRoutes);
app.use("/watchlist", watchlistRoutes);



const PORT = 5001;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log("Unhandled rejection:", err);

  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});


// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.log("Uncaught exception:", err);
  await disconnectDB();
  process.exit(1);
});


// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully");

  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});