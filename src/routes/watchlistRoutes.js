import express from "express";
import { addToWatchList } from "../controllers/watchlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { removeFromWatchList } from "../controllers/watchlistController.js";
import { updateWatchListItem } from "../controllers/watchlistController.js";



const router = express.Router();

router.use(authMiddleware);

router.post("/", addToWatchList);

router.delete("/:id", removeFromWatchList);

router.put("/:id", updateWatchListItem);

// router.post("/login", login);

// router.post("/logout", logout);




export default router;