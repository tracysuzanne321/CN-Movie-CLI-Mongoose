const Movie = require( './moviemodel' );
const mongoose = require ('mongoose')

exports.addMovie = async () => {
    try {
        const newMovie = new Movie( movieObj );
        await newMovie.save();
        mongoose.disconnect();
        console.log('Movie added to db')
    } catch ( error ) {
        console.log(error)
    }
}