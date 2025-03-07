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

const movieId = async(req,res)=>{
    try{
        const user = await Movie.findById(req.params.id);
        res.send({
            message:"done",
            d : user
        })
            
    }catch (err){
        res.send({message:err}).status(401)

    }
}    





const movieDelete = async (req,res)=>{
    try{
        const id = req.params.id;
        const data = await Movie.findByIdAndDelete(id);
        res.json({
            message:"Done",
            result:data
        })

    }catch (err){
        res.send({message:err}).status(401)

    }

}




const movieUpdate = async(req,res)=>{
    try{
        let id = req.params.id;
        let updateMovie = await Movie.findByIdAndUpdate(id,req.body,{ new: true });
        res.send(updateMovie)   
        console.log(updateMovie)           

    }catch (err){
        res.send({message:err}).status(401)
        console.log(err)

    }
}






export {moviepost,movieget,movieId,movieDelete,movieUpdate}
