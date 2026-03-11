import express from "express";
import { config } from "dotenv";

//import routes
import movieRoutes from "./routes/movieRoutes.js";

config();

const app = express();


//api routes
app.use("/movies", movieRoutes);


const PORT = 5001;

// app.get("/hello", (req, res) => {
//     res.json({message: "Hello world"})
// })

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});