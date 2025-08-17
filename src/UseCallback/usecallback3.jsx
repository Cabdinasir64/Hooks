import React, { useState, useCallback } from 'react';

export default function UseCallback3() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [submittedData, setSubmittedData] = useState(null);


  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (name.trim().length < 3) {
      alert('Name must be at least 3 characters long.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }

    const ageNumber = Number(age);
    if (!age || ageNumber <= 0 || ageNumber > 120) {
      alert('Please enter a valid age.');
      return;
    }

    setSubmittedData({ name, email, password, age });
    alert(`Form submitted successfully!\nName: ${name}\nEmail: ${email}\nAge: ${age}`);
    
    setName('');
    setEmail('');
    setPassword('');
    setAge('');
  }, [name, email, password, age]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">React useCallback Form Example</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 w-full max-w-md bg-white p-6 rounded shadow"
      >
        <input
          type="text"
          placeholder="Name (min 3 characters)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 bg-white rounded shadow w-full max-w-md">
          <h2 className="font-bold mb-2">Submitted Data:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
          <p><strong>Age:</strong> {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}
