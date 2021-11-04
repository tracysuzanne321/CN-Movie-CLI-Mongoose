const mongoose = require( 'mongoose' );

const movieSchema = new mongoose.Schema( {
    title: {
        type: String,
        unique: true,
        required: true,
    },
    actor: {
        type: String,
    },
} )


module.exports = movieSchema;