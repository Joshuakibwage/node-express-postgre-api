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


export { addToWatchList };