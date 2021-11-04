const mongoose = require( 'mongoose' )
require( 'dotenv' ).config();
const connection = async () => {
    try {
        await mongoose.connect( process.env.MONGO - URI )
        console.log("sucessful connection")
    } catch ( error ) {
        console.log(error)
    }
}

connection();