import express from "express"
import cors from "cors"
import db from './config/sql.js';


const app = express()
const port = process.env.PORT || 5200


//db config 
//const SQL = db 
app.get("/", (req, res) => {
    res.send("Hello World ")
})

app.listen(port, () => {
    console.log(`Server Running on Port: http://localhost:${port}`)
})