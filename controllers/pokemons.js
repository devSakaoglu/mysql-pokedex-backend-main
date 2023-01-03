import { db } from "../db.js"

export const getAllPokemons = (req, res) => {

    const q = "SELECT * FROM pokedex"

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })
}

export const getOnePokemon = (req, res) => {

    const q = "SELECT * FROM pokedex p,pokemon_abilities pa,abilities a WHERE p.Pokedex_NO = pa.Pokedex_NO AND pa.Abilities_ID = a.Abilities_ID AND p.Pokedex_NO = ?"


    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })
}


export const getAllTypes = (req, res) => {

    const q = "SELECT * FROM types"

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })

}

export const getType = (req, res) => {

    const q = "SELECT * FROM  types t WHERE   t.Type_Id = ?"

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })

}
export const getOneType = (req, res) => {

    const q = "SELECT * FROM pokemon_types pt, pokedex p, types t WHERE pt.Pokedex_NO = p.Pokedex_NO AND t.Type_Id = pt.Type_Id AND pt.Type_Id = ?"

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })

}


export const getAllAbilities = (req, res) => {

    const q = "SELECT * FROM abilities"

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })

}

export const getOneAbility = (req, res) => {


    const q = "SELECT * FROM abilities a, pokemon_abilities pa, pokedex p WHERE a.Abilities_Id = ? AND pa.Pokedex_NO = p.Pokedex_NO AND a.Abilities_Id = pa.Abilities_Id"

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })


    // func(1,2,3) 1. querry 2. params 3. CALLBACK FUNC (1,2) => {} 1. error 2. cevap
}
