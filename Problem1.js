const express = require("express");
const app = express();

app.use(express.json());

let students = [
  { id: 1, name: "Vaishnavi", age: 21, course: "Math" },
  { id: 2, name: "Abhinav", age: 22, course: "Physics" }
];

app.post("/students", (req, res) => {
  const { name, age, course } = req.body;
  const newStudent = {
    id: students.length + 1,
    name,
    age,
    course
  };
  students.push(newStudent);
  res.json(newStudent);
});

app.get("/students", (req, res) => {
  res.json(students);
});


app.get("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (!student) return res.status(404).json({ message: "Not found" });
  res.json(student);
});

app.put("/students/:id", (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  if (!student) return res.status(404).json({ message: "Not found" });

  student.name = req.body.name;
  student.age = req.body.age;
  student.course = req.body.course;

  res.json(student);
});

app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.json({ message: "Deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});