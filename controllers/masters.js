import { db } from "../db.js"

export const getEliteFour = (req, res) => {

    const q = "SELECT * FROM elite_four e"

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })
}

export const getOneEliteFour = (req, res) => {


    const q = "SELECT * FROM elite_four e,elite_four_pokemons ep, pokedex p WHERE e.Elite_Four_Id = ep.Elite_Four_Id AND ep.Pokedex_NO = p.Pokedex_NO AND e.Elite_Four_Id = ?"

    db.query(q, [req.params.id], (err, data) => {

        if (err) return res.status(500).json(err)

        return res.status(200).json(data)

    })
}

export const getAllGymLeaders = (req, res) => {

    const q = "SELECT * FROM gym_leaders"

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })


}

export const getOneGymLeaders = (req, res) => {

    const q = "SELECT * FROM gym_leaders g, gym_leaders_pokemons gp, pokedex p WHERE g.Gym_Leaders_Id = gp.Gym_Leaders_Id AND gp.Pokedex_NO = p.Pokedex_NO AND g.Gym_Leaders_Id = ?"

    db.query(q, [req.params.id], (err, data) => {

        if (err) return res.status(500).json(err)

        return res.status(200).json(data)

    })
}

export const getAllTMs = (req, res) => {
    const q = "SELECT * FROM tm"

    db.query(q, (err, data) => {

        if (err) return res.status(500).json(err)

        return res.status(200).json(data)

    })
}