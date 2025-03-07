import {moviepost,movieget} from '../controller/movieData.js'

import express from "express";
const router = express.Router();

router.post("/post",moviepost)

router.get("/get",movieget)



export default router;