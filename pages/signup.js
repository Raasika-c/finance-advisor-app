// pages/signup.js
import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Signup.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Store user data in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        name,
        email,
        createdAt: new Date()
      });

      alert("Signup successful!");
      router.push('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Sign Up - Budget Buddy</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Create Your Account</h1>
        <form className={styles.form} onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            className={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
