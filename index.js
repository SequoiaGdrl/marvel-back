const express = require("express");
const cors = require("cors");
const app = express();
const comicsRouter = require("./routes/comics")
const charactersRouter = require("./routes/character")
app.use(cors());
app.use(express.json());
require("dotenv").config();

app.use(comicsRouter)
app.use(charactersRouter)


app.get("/", (req, res) => {
    res.status(200).json({
        message: "enfin"
    })
});





app.listen(process.env.PORT, () => {
    console.log("server has starded")
})