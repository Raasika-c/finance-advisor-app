import React, { useState, useEffect } from 'react';

const SpendingOverview = ({ onExpensesChange }) => {
  const [expenses, setExpenses] = useState([
    { label: 'Groceries', img: 'https://img.icons8.com/color/96/000000/shopping-cart--v1.png', amount: '' },
    { label: 'Dining', img: 'https://img.icons8.com/color/96/000000/restaurant.png', amount: '' },
    { label: 'Transport', img: 'https://img.icons8.com/color/96/000000/car--v1.png', amount: '' },
    { label: 'Entertainment', img: 'https://img.icons8.com/color/96/000000/ticket.png', amount: '' }
  ]);

  useEffect(() => {
    const total = expenses.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
    onExpensesChange(total);
  }, [expenses, onExpensesChange]);

  const handleAmountChange = (index, value) => {
    const newExpenses = [...expenses];
    newExpenses[index] = { ...newExpenses[index], amount: value };
    setExpenses(newExpenses);
  };

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
      <h2 style={{ fontWeight: '700', marginBottom: '1rem', color: '#4f46e5' }}>Spending Overview</h2>
      {expenses.map((item, idx) => (
        <div key={idx} style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '0.8rem'
        }}>
          <img src={item.img} alt={item.label} style={{
            maxWidth: '80px',
            marginRight: '1rem',
            borderRadius: '8px',
            flexShrink: 0
          }} />
          <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{item.label}</span>
          <input
            type="number"
            placeholder="Enter amount"
            value={item.amount}
            onChange={(e) => handleAmountChange(idx, e.target.value)}
            style={{
              marginLeft: 'auto',
              fontWeight: '700',
              color: '#dc2626',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
              padding: '0.2rem 0.5rem',
              width: '100px'
            }}
          />
        </div>
      ))}
    </section>
  );
};

export default SpendingOverview;