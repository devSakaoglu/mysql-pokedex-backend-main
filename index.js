import express from "express";
import pokemonRouter from "./routers/pokemons.js"
import itemsRouter from "./routers/items.js"
import mastersRouter from "./routers/masters.js"
import cors from "cors"


const app = express();


// Middleware
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())


app.use("/api", pokemonRouter)
app.use("/api", itemsRouter)
app.use("/api", mastersRouter)



app.listen(8000, () => {
    console.log("Server is running.")
})