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

    }catch{

    }

}


export {moviepost,movieget,movieId,movieDelete}
