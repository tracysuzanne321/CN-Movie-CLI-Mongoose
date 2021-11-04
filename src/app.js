const connection = require( "./db/connection" );
const yargs = require( "yargs" );
const movieSchema = require('./movie/movieSchema')

const app = async () => {
    await connection( async ( mongoose ) => {
        const Movie = mongoose.model( 'Movie', movieSchema );

        switch ( process.argv[2] ) {
            case 'create': {
                const newMovie = new Movie(
                    {
                        title: yargs.argv.title,
                        actor: yargs.argv.actor
                    }
                );
                await newMovie.save();
                console.log(`Saved ${yargs.argv.title}`)
                break;
            }
            case 'read': {
                const movies = await Movie.find();
                console.log( movies );
                break;
            }
            case 'filter': {
                const movies = await Movie.find({title: { "$regex": yargs.argv.title, "$options": "i" }});
                console.log( movies );
                break;
            }    
            case 'update': {
                await Movie.findOneAndUpdate( { title: yargs.argv.title }, { actor:yargs.argv.actor }, {upsert: false})
                console.log(`Updated ${yargs.argv.title}`)
                break;
            }
            case 'delete': {
                await Movie.deleteOne( { title: yargs.argv.title } )
                console.log(`Delete ${yargs.argv.title}`)
            }   
        }
    })
    
}

app();
 
