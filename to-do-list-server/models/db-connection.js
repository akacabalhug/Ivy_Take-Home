const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect(
            'mongodb://localhost:27017/todolistDB',
            err => {
                if(err) throw err;
                console.log('Successfully connected to MongoDB')
            }
        );
    } catch (error) {
        console.log("Error in connecting to database.", error);
    }
};