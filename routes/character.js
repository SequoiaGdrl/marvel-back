const express = require("express");
const router = express.Router();
const axios = require("axios");



router.get("/characters", async (req, res) => {
    try {

        const {
            limit,
            skip,
            title
        } = req.query

        const fetchApiKeyFromApi = async () => {


            let filters = "";

            if (title) {
                filters += `&title=${title}`

            }

            if (skip) {
                filters += `&skip=${skip}`
            }

            if (limit) {
                filters += `&limit=${limit}`
            }

            const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}${filters}`)

            const data = response.data;

            return (data)

        }

        const result = await fetchApiKeyFromApi()


        res.json(result)


    } catch (error) {
        res.status(400).json({
            error: error.message

        })

    }

})



router.get("/character/:characterId", async (req, res) => {

    try {
        const {
            characterId
        } = req.params


        const fetchCharacterfromApi = async () => {

            const response = await axios.get(`https://lereacteur-marvel-api.herokuapp.com/character/${characterId}?apiKey=${process.env.API_KEY}`)

            const data = response.data

            return (data)
        }

        const result = await fetchCharacterfromApi()

        res.json(result)

    } catch (error) {

        res.status(400).json({
            error: error.message
        })

    }
})





module.exports = router;