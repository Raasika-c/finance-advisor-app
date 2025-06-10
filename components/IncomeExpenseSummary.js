import React, { useState, useEffect } from 'react';

const IncomeExpenseSummary = ({ totalExpenses }) => {
  const [income, setIncome] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const incomeValue = Number(income) || 0;
    setBalance(incomeValue - totalExpenses);
  }, [income, totalExpenses]);

  return (
    <section style={{
      background: 'white',
      padding: '1.8rem',
      borderRadius: '12px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.08)',
      display: 'flex',
      flexDirection: 'column',
      animation: 'slideUp 0.8s ease forwards'
    }}>
      <h2 style={{ fontWeight: '700', marginBottom: '1rem', color: '#4f46e5' }}>Income & Expense Summary</h2>
      <div style={{ marginBottom: '0.5rem' }}>
        <label>Total Income: </label>
        <input
          type="number"
          placeholder="Enter income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '4px',
            padding: '0.2rem 0.5rem',
            width: '100px'
          }}
        />
      </div>
      <p style={{ marginBottom: '0.5rem' }}>Total Expenses: <strong>₹{totalExpenses}</strong></p>
      <p style={{ marginBottom: '0.5rem' }}>Balance: <strong>₹{balance}</strong></p>
    </section>
  );
};

export default IncomeExpenseSummary;