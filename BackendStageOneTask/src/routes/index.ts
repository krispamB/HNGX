import { Index } from "../controllers/index";
import { Router } from "express";
const router = Router()

const index = new Index()

router.route('/').get(index.getInfo)

export default router