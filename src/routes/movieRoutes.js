import express from "express";

const router = express.Router();

router.get("/hello", (req, res) => {
    res.json({message: "Hello world"})
});

router.post("/", (req, res) => {
    res.json({httpMethod: "POST"});
});

router.put("/", (req, res) => {
    res.json({httpMethod: "PUT"});
});

router.delete("/", (req, res) => {
    res.json({httpMethod: "DELETE"});
});


export default router;