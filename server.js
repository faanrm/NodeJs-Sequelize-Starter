import express from "express"

const app = express ()
const port = 5200


app.get("/",(req,res)=> {
    res.send("Hello World ")
})

app.listen(port,()=> {
    console.log(`Server Running on Port: http://localhost:${port}`)
})