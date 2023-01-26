const User = require("../user/user_table");

// USER FUNCTIONS

exports.createUser = async (userObj) => {
    try {
        const newUser = await User.create(userObj);
        console.log(`User "${newUser.name}" has been added to the database.`);
    } catch (error) {
        console.log(error);
    }
}; 