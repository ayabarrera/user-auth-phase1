'use client';

import { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return;
    } else {
      setPasswordError('');
    }

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        window.location.href = '/dashboard';
      } else {
        const errorData = await response.json();
        console.error('Registration failed:', errorData.error);
        alert(`Registration failed: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}