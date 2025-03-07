import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import movieRouter from "./router/moviedataRoute.js"
dotenv.config();

const app = express();
app.use(express.json())


const PORT = process.env.PORT ||5000
app.get("/",(req,res)=>{
    res.json({message:"done"})
});

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("DataBase Connected")
})
.catch((err)=>{
    console.log("Throw error",err)
})

app.use("/movie", movieRouter);


app.listen(PORT ,()=>{
    console.log("listening a port...")
})

// PORT = 5000

// MONGO_URL = mongodb+srv://aayushisharma1:Navgurukul123@cluster0.jfztl.mongodb.net/movieData
