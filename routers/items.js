import express from "express"
import { getAllBerries, getAllGeneralItems, getAllItems, getAllMedicine, getAllPokeballs } from "../controllers/items.js";


const router = express.Router();

router.get("/items", getAllItems)
router.get("/pokeballs", getAllPokeballs)
router.get("/berries", getAllBerries)
router.get("/medicines", getAllMedicine)
router.get("/generalItems", getAllGeneralItems)


export default router;