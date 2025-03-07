import Movie from "../model/moviedataSchema.js"

let moviepost  = async (req,res)=>{
    try{
        const data = new Movie(req.body);
        await data.save();
        res.json(data).status(201);

    }catch (err){
        console.log("Error",err)
        res.json({message:err}).status(401)


    }
}




let movieget = async(req,res)=>{
    try{
        const data = await Movie.find({});
        res.json(data).status(201);


    }catch (err){
        console.log(err,"Error")
        res.json({message:err}).status(401)

    }
}



export {moviepost,movieget}
