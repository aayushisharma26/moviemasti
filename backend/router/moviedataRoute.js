import {moviepost,movieget,movieId,movieDelete} from '../controller/movieData.js'

import express from "express";
const router = express.Router();

router.post("/post",moviepost)

router.get("/get",movieget)


router.get("/get/:id",movieId)

router.delete("/delete/:id",movieDelete)



export default router;