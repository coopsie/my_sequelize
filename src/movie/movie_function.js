const Movie = require("./movie_table");

exports.createMovie = async (movieObj) => {
    try {
        const newMovie = await Movie.create(movieObj);
        console.log(`Movie "${newMovie.title}" has been added to the database.`);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovie = async () => {
    try {
        const movies = await Movie.findAll();
        console.log("Listing all movies: ", JSON.stringify(movies, null, 2));
    } catch (error) {
        console.log(error);
    }
};

exports.updateActor = async (movieObj) => {
    try {
        if (movieObj.title && movieObj.actor) {
        await Movie.update({actor: movieObj.actor}, {
            where: {
                title: movieObj.title}
            }
        )}
        console.log(`"${movieObj.title}" actor has been updated to "${movieObj.actor}".`)
    } catch (error) {
        console.log(error)
    }
}

exports.updateDirector = async (movieObj) => {
    try {
        if (movieObj.title && movieObj.director) {
        await Movie.update({director: movieObj.director}, {
            where: {
                title: movieObj.title}
            }
        )}
        console.log(`"${movieObj.title}" director has been updated to "${movieObj.director}".`)
    } catch (error) {
        console.log(error)
    }
}

exports.deleteMovie = async (movieObj) => {
    try {
        if (movieObj.title) {
            await Movie.destroy({
                where: {
                    title: movieObj.title
                }
            });
        }
        console.log(`Movie "${movieObj.title}" has been deleted from the database.`);
    } catch (error) {
        console.log(error)
    }
};