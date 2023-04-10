import express from "express"
import cors from "cors"
import { addEmploye } from "./src/create.js";
// import { getAllEmployees } from "./src/readAll.js";

const PORT = 3002;
const app = express ()
app.use(cors());
app.use(express.json());


//apis
app.get("/", (req,res) => {
    res.send("I am groot")
})

app.post("/employees", addEmploye)
// app.get("/employees", getAllEmployees)


app.listen(PORT, ()=> {
    console.log(`Listening to http://localhost:${PORT}..`)
})

