const mongoose = require( 'mongoose' )
require( 'dotenv' ).config();
const connection = async ( callback ) => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        await callback( mongoose )
        await mongoose.connection.close();
    } catch ( error ) {
        console.log(error)
    }
}

module.exports = connection;