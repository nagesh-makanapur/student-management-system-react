import React, { useState } from 'react';
import StudentList from './StudentList';
import AddStudentForm from './AddStudentForm';


function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Mukesh', age: 21, mark:35 },
    { id: 2, name: 'Rajesh', age: 22,mark:90 },
    {id:  3, name:'Akash',age:21, mark:50},
  ]);


  const addStudent = (newStudent) => {
    setStudents([...students, { ...newStudent, id: students.length + 1 }]);
  };


  return (
    <div>
      <h1>Student Management System</h1>
      <AddStudentForm onAddStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}


export default App;