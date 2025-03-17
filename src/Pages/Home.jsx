import React, { useState } from 'react';

const Home = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice', age: 20, grade: 'A' },
    { id: 2, name: 'Bob', age: 21, grade: 'B' },
  ]);

  const [newStudent, setNewStudent] = useState({
    name: '',
    age: '',
    grade: '',
  });

  const [editId, setEditId] = useState(null); // Track which student is being edited

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const addStudent = () => {
    if (newStudent.name && newStudent.age && newStudent.grade) {
      if (editId !== null) {
        // Updating an existing student
        setStudents(
          students.map((student) =>
            student.id === editId ? { ...student, ...newStudent } : student
          )
        );
        setEditId(null);
      } else {
        // Adding a new student
        setStudents([
          ...students,
          {
            id: students.length + 1,
            ...newStudent,
          },
        ]);
      }
      setNewStudent({ name: '', age: '', grade: '' }); // Reset form
    }
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const editStudent = (student) => {
    setNewStudent({ name: student.name, age: student.age, grade: student.grade });
    setEditId(student.id);
  };

  return (
    <div>
      <h2>Student Table</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newStudent.age}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={newStudent.grade}
          onChange={handleInputChange}
        />
        <button onClick={addStudent}>
          {editId !== null ? 'Update Student' : 'Add Student'}
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.grade}</td>
              <td>
                <button onClick={() => editStudent(student)}>Edit</button>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
