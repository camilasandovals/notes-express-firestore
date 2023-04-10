import { db } from "./dbConnect.js";
const coll = db.collection("employees");

export async function getAllEmployees(req, res) {
  const collection = coll.get();
  const employees = collection.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  res.status(200).send(employees);
}
