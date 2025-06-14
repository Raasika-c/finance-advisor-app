// pages/login.js
import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Login.module.css';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., Firebase Auth or dummy check)
    alert(`Logged in as ${email}`);
  };

  return (
    <>
      <Head>
        <title>Login - Budget Buddy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>Login to Budget Buddy</h1>
        <form className={styles.form} onSubmit={handleLogin}>
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
          <button type="submit" className={styles.button}>Login</button>
          <p className={styles.signupText}>
            Don't have an account? <Link href="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
}
