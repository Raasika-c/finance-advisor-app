// pages/signup.js
import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Signup.module.css';
import Link from 'next/link';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add signup logic here (Firebase Auth, etc.)
    alert(`Account created for ${email}`);
  };

  return (
    <>
      <Head>
        <title>Sign Up - Budget Buddy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>Create Your Account</h1>
        <form className={styles.form} onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className={styles.input}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className={styles.button}>Sign Up</button>
          <p className={styles.loginText}>
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </form>
      </div>
    </>
  );
}
