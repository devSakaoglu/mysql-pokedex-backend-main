import { db } from "../db.js"


export const getAllItems = (req, res) => {

    const q = "SELECT * FROM items"

    db.query(q, (err, data) => {
        if (err) return res.status(404).json(err)

        return res.status(200).json(data)
    })
}

export const getAllBerries = (req, res) => {
    const q = "SELECT * FROM berries"

    db.query(q, (err, data) => {
        if (err) return res.status(404).json(err)

        return res.status(200).json(data)
    })
}

export const getAllMedicine = (req, res) => {
    const q = "SELECT * FROM medicine"

    db.query(q, (err, data) => {
        if (err) return res.status(404).json(err)

        return res.status(200).json(data)
    })
}

export const getAllPokeballs = (req, res) => {

    const q = "SELECT * FROM pokeballs"

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })
}

export const getAllGeneralItems = (req, res) => {

    const q = "SELECT * FROM general_items"

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })
}