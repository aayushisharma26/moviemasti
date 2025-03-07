import mongoose from "mongoose"

const MovieData = new mongoose.Schema({
    title: {
        type:String
        // required:true
    },
    year:{
        type:Number
        // required:true
    },
    rating:{
        type:Number
    },
    poster:{
        type:String

    }

})
    
const Movie = mongoose.model("Movie",MovieData);
export default Movie;
