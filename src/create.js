import { db } from "../dbConnect.js"
import { FieldValue } from "firebase-admin/firestore";

const coll = db.collection("employees");


export async function addEmploye(req, res) {
  const newEmployee = req.body;
  //insert timestamp(2/2)
  newEmployee.createdAt = FieldValue.serverTimestamp()
  await coll.add(newEmployee);
  res.status(201).send({ message: "Employee successfully added." });
}
