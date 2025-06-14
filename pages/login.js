// pages/login.js
import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Login.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      router.push('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Login - Budget Buddy</title>
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
            Don&apos;t have an account? <Link href="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
}
