import express from "express"
import { getAllGymLeaders, getAllTMs, getEliteFour, getOneEliteFour, getOneGymLeaders } from "../controllers/masters.js";



const router = express.Router();

router.get("/elitefour", getEliteFour)
router.get("/elitefour/:id", getOneEliteFour)
router.get("/gymleaders", getAllGymLeaders)
router.get("/gymleaders/:id", getOneGymLeaders)
router.get("/tmasters", getAllTMs)

export default router;