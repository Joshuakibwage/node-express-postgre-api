import express from "express";

import { validateRequest } from "../middleware/validateRequests.js";
import { addToWatchListSchema } from "../validator/watchlistValidators.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

import { 
    removeFromWatchList, 
    updateWatchListItem, 
    addToWatchList 
} from "../controllers/watchlistController.js";



const router = express.Router();

router.use(authMiddleware);

router.post("/", validateRequest(addToWatchListSchema), addToWatchList);

router.delete("/:id", removeFromWatchList);

router.put("/:id", updateWatchListItem);




export default router;