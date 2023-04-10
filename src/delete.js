import { db } from "./dbConnect.js";
const coll = db.collection("employees");


export async function deleteEmployee(req, res) {
  const { id } = req.params;
  // const id = req.params.id
  await coll.doc(id).delete();
  res.status(202).send("Employee has been deleted")
}