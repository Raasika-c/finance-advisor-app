import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../lib/firebase';

import SpendingOverview from '../components/SpendingOverview';
import UpcomingBills from '../components/UpcomingBills';
import IncomeExpenseSummary from '../components/IncomeExpenseSummary';
import GeminiChat from '../components/GeminiChat';

export default function Dashboard() {
  const router = useRouter();
  const [spendingExpenses, setSpendingExpenses] = useState(0);
  const [billsExpenses, setBillsExpenses] = useState(0);
  const [userEmail, setUserEmail] = useState('');

  const totalExpenses = spendingExpenses + billsExpenses;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        router.push('/login');
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Dashboard - Budget Buddy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header style={{
        backgroundColor: '#4f46e5',
        color: 'white',
        padding: '1.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(79, 70, 229, 0.3)',
        fontFamily: 'Segoe UI, sans-serif'
      }}>
        <div style={{ fontSize: '1.8rem', fontWeight: '700' }}>Budget Buddy</div>
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '1.5rem', fontSize: '1rem' }}>Hi, {userEmail}</span>
          <Link href="/" passHref legacyBehavior>
            <a style={navLinkStyle}>Home</a>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <a style={navLinkStyle}>Contact</a>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <a style={navLinkStyle}>About Us</a>
          </Link>
          <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
        </nav>
      </header>

      <main style={{
        maxWidth: '1100px',
        margin: '2rem auto 4rem',
        padding: '0 1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        fontFamily: 'Segoe UI, sans-serif'
      }}>
        <SpendingOverview onExpensesChange={setSpendingExpenses} />
        <UpcomingBills onBillsChange={setBillsExpenses} />
        <IncomeExpenseSummary totalExpenses={totalExpenses} />
      </main>

      <GeminiChat />
    </>
  );
}

const navLinkStyle = {
  color: 'white',
  marginLeft: '1.5rem',
  textDecoration: 'none',
  fontWeight: '600',
};

const logoutButtonStyle = {
  marginLeft: '1.5rem',
  padding: '0.5rem 1rem',
  backgroundColor: 'white',
  color: '#4f46e5',
  fontWeight: '600',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
};
