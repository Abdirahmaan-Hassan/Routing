const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());

const loadStudents = () => {
  const data = fs.readFileSync('students.json', 'utf-8');
  return JSON.parse(data);
};

const saveStudents = (data) => {
  fs.writeFileSync('students.json', JSON.stringify(data, null, 2));
};


app.get('/students', (req, res) => {
  const students = loadStudents();
  res.json(students);
});

app.post('/students', (req, res) => {
  const students = loadStudents();
  const newStudent = req.body;
  students.push(newStudent);
  saveStudents(students);
  res.json(newStudent);
});

app.put('/students/:id', (req, res) => {
  const students = loadStudents();
  const studentId = req.params.id;
  const updatedStudent = req.body;

  const index = students.findIndex((student) => student.id === studentId);
  if (index !== -1) {
    students[index] = updatedStudent;
    saveStudents(students);
    res.json(updatedStudent);
  } else {
    res.status(404).send('Student not found');
  }
});

app.delete('/students/:id', (req, res) => {
  const students = loadStudents();
  const studentId = req.params.id;

  const index = students.findIndex((student) => student.id === studentId);
  if (index !== -1) {
    students.splice(index, 1);
    saveStudents(students);
    res.status(204).send();
  } else {
    res.status(404).send('Student not found');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
