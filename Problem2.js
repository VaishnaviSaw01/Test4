const express = require("express");
const app = express();

app.use(express.json());

let students = [];

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

function validateStudent(req, res, next) {
  const { name, age, course } = req.body;
  if (!name || !age || !course) {
    return res.status(400).json({ message: "All fields required" });
  }
  next();
}

app.post("/students", validateStudent, (req, res) => {
  students.push(req.body);
  res.json({ message: "Student added" });
});

app.listen(3000, () => {
  console.log("Server running");
});