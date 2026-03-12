import { prisma } from "../config/db.js";


const addToWatchList = async(req, res) => {
    const { movieId, status, rating, notes } = req.body;
      const userId = req.user.id; // ← from auth middleware
    //verify movie exists
    const movie = await prisma.movie.findUnique({
        where: {
            id: movieId
        }
    });

    if(!movie) {
        return res.status(404).json({
            message: "Movie not found"
        })
    }
    //check if already added
    const existingInWatchList = await prisma.watchListItem.findUnique({
        where: {
            userId_movieId: {
                userId: userId,
                movieId: movieId
            },
        }   
    });

    if(existingInWatchList) {
        return res.status(400).json({error: "Movie already exists in watch list"})
    }

    const watchListItem = await prisma.watchListItem.create({
        data: {
            userId,
            movieId,
            status: status || "PLANNED",
            rating,
            notes,
        }
    });

    res.status(201).json({
        status: "success",
        data: {
            watchListItem,
        }
    })


};


/*
Remove movie from watch list
Deletes watch list watchListItem
Ensures only owner can delete
Requires protect middleware
*/

const removeFromWatchList = async(req, res) => {
    //find watch list item and then verify ownership
    const watchListItem = await prisma.watchListItem.findUnique({
        where: {
            id: req.params.id
        }
    })

    if(!watchListItem) {
        return res.status(404).json({
            message: "Watch list item not found"
        })
    }

    //Ensure only owner can delete
    if(watchListItem.userId !== req.user.id) {
        return res.status(403).json({
            message: "You are not authorized to delete this watch list item"
        })
    }

    await prisma.watchListItem.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json({
        status: "success",
        message: "Movie deleted from watch list successfully"
    })
}


/*
    Update watch list item
    Updates states rating or notes
    Ensures only owner can update
    Requires protect middleware
*/


const updateWatchListItem = async (req, res) => {
    const { status, rating, notes } = req.body;

    // Find watch list item and verify ownership
    const watchListItem = await prisma.watchListItem.findUnique({
        where: { id: req.params.id },
    });

    if (!watchListItem) {
        return res.status(404).json({ error: "Watch list item not found" });
    }

    // Ensure only owner can update
    if (watchListItem.userId !== req.user.id) {
        return res
        .status(403)
        .json({ error: "Not allowed to update this watch list item" });
    }

    // Build update data
    const updateData = {};
    if (status !== undefined) updateData.status = status.toUpperCase();
    if (rating !== undefined) updateData.rating = rating;
    if (notes !== undefined) updateData.notes = notes;

    // Update watch list item
    const updatedItem = await prisma.watchListItem.update({
        where: { id: req.params.id },
        data: updateData,
    });

    res.status(200).json({
        status: "success",
        data: {
        watchListItem: updatedItem,
        },
    });
};


export {
    addToWatchList,
    removeFromWatchList
};

