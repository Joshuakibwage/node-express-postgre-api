import "dotenv/config";

import { prisma, connectDB, disconnectDB } from "../src/config/db.js";


const userId = "251cab57-df0f-4594-9be8-f74c59b9133c";


const movies = [
  {
    title: "Inception",
    overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    releaseYear: 2010,
    genres: ["Action", "Sci-Fi", "Thriller"],
    runtime: 148,
    posterUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    createdBy: userId,
  },
  {
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    releaseYear: 2008,
    genres: ["Action", "Crime", "Drama"],
    runtime: 152,
    posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    createdBy: userId,
  },
  {
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    releaseYear: 2014,
    genres: ["Adventure", "Drama", "Sci-Fi"],
    runtime: 169,
    posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    createdBy: userId,
  },
  {
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseYear: 1994,
    genres: ["Drama"],
    runtime: 142,
    posterUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    createdBy: userId,
  },
  {
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    releaseYear: 1994,
    genres: ["Crime", "Drama", "Thriller"],
    runtime: 154,
    posterUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    createdBy: userId,
  },
  {
    title: "The Matrix",
    overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    releaseYear: 1999,
    genres: ["Action", "Sci-Fi"],
    runtime: 136,
    posterUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    createdBy: userId,
  },
  {
    title: "Goodfellas",
    overview: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
    releaseYear: 1990,
    genres: ["Biography", "Crime", "Drama"],
    runtime: 146,
    posterUrl: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    createdBy: userId,
  },
  {
    title: "Fight Club",
    overview: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much, much more.",
    releaseYear: 1999,
    genres: ["Drama", "Thriller"],
    runtime: 139,
    posterUrl: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    createdBy: userId,
  },
  {
    title: "Forrest Gump",
    overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
    releaseYear: 1994,
    genres: ["Drama", "Romance"],
    runtime: 142,
    posterUrl: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    createdBy: userId,
  },
  {
    title: "The Silence of the Lambs",
    overview: "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
    releaseYear: 1991,
    genres: ["Crime", "Drama", "Thriller"],
    runtime: 118,
    posterUrl: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
    createdBy: userId,
  },
  {
    title: "Parasite",
    overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
    releaseYear: 2019,
    genres: ["Comedy", "Drama", "Thriller"],
    runtime: 132,
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    createdBy: userId,
  },
  {
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    releaseYear: 1972,
    genres: ["Crime", "Drama"],
    runtime: 175,
    posterUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsLeMMovrI868.jpg",
    createdBy: userId,
  },
  {
    title: "Whiplash",
    overview: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
    releaseYear: 2014,
    genres: ["Drama", "Music"],
    runtime: 107,
    posterUrl: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    createdBy: userId,
  },
  {
    title: "Oppenheimer",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    releaseYear: 2023,
    genres: ["Biography", "Drama", "History"],
    runtime: 180,
    posterUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    createdBy: userId,
  },
  {
    title: "No Country for Old Men",
    overview: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
    releaseYear: 2007,
    genres: ["Crime", "Drama", "Thriller"],
    runtime: 122,
    posterUrl: "https://image.tmdb.org/t/p/w500/6d5XOczc2ePWDDEMIJbMIRBnPya.jpg",
    createdBy: userId,
  },
  {
    title: "The Grand Budapest Hotel",
    overview: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
    releaseYear: 2014,
    genres: ["Adventure", "Comedy", "Crime"],
    runtime: 99,
    posterUrl: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    createdBy: userId,
  },
  {
    title: "Dune",
    overview: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    releaseYear: 2021,
    genres: ["Action", "Adventure", "Drama", "Sci-Fi"],
    runtime: 155,
    posterUrl: "https://image.tmdb.org/t/p/w500/d5NXSklpcvkCitereiiwHkWS3gS.jpg",
    createdBy: userId,
  },
  {
    title: "Spirited Away",
    overview: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
    releaseYear: 2001,
    genres: ["Animation", "Adventure", "Family", "Fantasy"],
    runtime: 125,
    posterUrl: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    createdBy: userId,
  },
  {
    title: "Blade Runner 2049",
    overview: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
    releaseYear: 2017,
    genres: ["Action", "Drama", "Mystery", "Sci-Fi"],
    runtime: 164,
    posterUrl: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    createdBy: userId,
  },
  {
    title: "Everything Everywhere All at Once",
    overview: "A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.",
    releaseYear: 2022,
    genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
    runtime: 139,
    posterUrl: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    createdBy: userId,
  },
];


const main = async() => {
    const prisma = await connectDB();

    console.log("seeding movies...");

    for(const movie of movies) {
        await prisma.movie.create({
            data: movie,
        })

        console.log(`Created movie: ${movie.title}`);
    }

   console.log("Seeding completed!");

};


main().catch((err) => {
    console.error(err);
    process.exit(1);
}).finally(async() => {
    await prisma.$disconnect();
});