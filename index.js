import express from "express"
import cors from "cors"
//import {  } from 

const PORT = 3000;
const app = express ()
app.use(cors());
app.use(express.json());


//apis
app.get("/", (req,res) => {
    res.send("I am groot")
})


app.listen(PORT, ()=> {
    console.log(`Listening to http://localhost:${PORT}..`)
})

