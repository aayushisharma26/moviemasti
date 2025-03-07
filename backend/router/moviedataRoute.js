import {moviepost,movieget,movieId,movieDelete,movieUpdate} from '../controller/movieData.js'

import express from "express";
const router = express.Router();

router.post("/post",moviepost)

router.get("/get",movieget)


router.get("/get/:id",movieId)

router.delete("/delete/:id",movieDelete)


router.put("/put/:id",movieUpdate)

export default router;