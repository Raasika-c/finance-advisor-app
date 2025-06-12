import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import SpendingOverview from '../components/SpendingOverview';
import UpcomingBills from '../components/UpcomingBills';
import IncomeExpenseSummary from '../components/IncomeExpenseSummary';
import GeminiChat from '../components/GeminiChat'; // ✅ AI Chatbot

export default function Dashboard() {
  const [spendingExpenses, setSpendingExpenses] = useState(0);
  const [billsExpenses, setBillsExpenses] = useState(0);

  const totalExpenses = spendingExpenses + billsExpenses;

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
        <nav>
          <Link href="/" passHref legacyBehavior>
            <a style={{
              color: 'white',
              marginLeft: '1.5rem',
              textDecoration: 'none',
              fontWeight: '600'
            }}>Home</a>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <a style={{
              color: 'white',
              marginLeft: '1.5rem',
              textDecoration: 'none',
              fontWeight: '600'
            }}>Contact</a>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <a style={{
              color: 'white',
              marginLeft: '1.5rem',
              textDecoration: 'none',
              fontWeight: '600'
            }}>About Us</a>
          </Link>
          <Link href="/login" passHref legacyBehavior>
            <a style={{
              color: 'white',
              marginLeft: '1.5rem',
              textDecoration: 'none',
              fontWeight: '600'
            }}>Login</a>
          </Link>
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

      <GeminiChat /> {/* ✅ Floating Gemini AI Chatbot */}
    </>
  );
}
