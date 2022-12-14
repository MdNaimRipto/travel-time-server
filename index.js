const express = require("express")
const cors = require("cors")

const app = express()
const port = process.env.PORT || 5000

app.use(cors())

const locations = require("./data/locations.json")
const allLocation = require("./data/allLocations.json")

app.get("/", (req, res) => {
    res.send("Server is Running")
})

app.get("/locations", (req, res) => {
    res.send(locations)
})

app.get("/location/:id", (req, res) => {
    const id = req.params.id;
    const location = locations.find(lc => lc.id == id)
    res.send(location)
})

app.get("/allLocation", (req, res) => {
    res.send(allLocation)
})

app.get("/allLocation/:id", (req, res) => {
    const id = req.params.id
    const singleLocation = allLocation.find(location => location.id == id)
    res.send(singleLocation)
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})