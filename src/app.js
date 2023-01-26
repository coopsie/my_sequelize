const yargs = require("yargs");
const {sequelize} = require("./db/connection");
const{createMovie, listMovie, deleteMovie, updateActor, updateDirector} = require("./movie/movie_function");
const{newUser, createUser} = require("./user/user_function");

async function app(yargsInput) {
    await sequelize.sync({alter:true});
    
    if (yargsInput.create) {
        await createMovie({
            title: yargsInput.title,
            actor: yargsInput.actor,
            director: yargsInput.director
        })

    } else if (yargsInput.read) {
        await listMovie();

    } else if (yargsInput.updateActor) {
        await updateActor({
            title: yargsInput.title,
            actor: yargsInput.actor
        })

    } else if (yargsInput.updateDirector) {
        await updateDirector({
            title: yargsInput.title,
            director: yargsInput.director
        })

    } else if (yargsInput.delete) {
        await deleteMovie({
            title: yargsInput.title
        })

// USER 

    } else if (yargsInput.user) {
        await createUser({
            name: yargsInput.name,
            age: yargsInput.age,
            location: yargsInput.location
        })

    } else {
        console.log("Yargs command not recognized");
    }
    
    await sequelize.close();
}

app(yargs.argv); 