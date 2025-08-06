import React, { useState } from 'react';

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mark, setMark] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && age && mark) {
      onAddStudent({
        name,
        age: parseInt(age),
        mark: parseInt(mark)
      });
      setName('');
      setAge('');
      setMark('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Mark"
        value={mark}
        onChange={(e) => setMark(e.target.value)}
        required
      />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;
