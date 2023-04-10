import { db } from "./dbConnect.js";
const coll = db.collection("employees");


export async function updateEmployee(req,res) {
    const { id } = req.params;
    const updateInfo = req.body;
    
    await coll.doc(id).update(updateInfo);
    res.status(202).send("Employee has been updated")
}
