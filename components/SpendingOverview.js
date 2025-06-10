import React, { useState, useEffect } from 'react';

const SpendingOverview = ({ onExpensesChange }) => {
  const categories = [
    { label: 'Groceries', img: 'https://img.icons8.com/color/96/000000/shopping-cart--v1.png' },
    { label: 'Dining', img: 'https://img.icons8.com/color/96/000000/restaurant.png' },
    { label: 'Transport', img: 'https://img.icons8.com/color/96/000000/car--v1.png' },
    { label: 'Entertainment', img: 'https://img.icons8.com/color/96/000000/ticket.png' }
  ];

  const [expenses, setExpenses] = useState(
    categories.map(category => ({ ...category, amount: '' }))
  );
  const [selectedCategory, setSelectedCategory] = useState(categories[0].label);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const total = expenses.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
    onExpensesChange(total);
  }, [expenses, onExpensesChange]);

  const handleAmountUpdate = () => {
    if (amount) {
      const newExpenses = expenses.map(item =>
        item.label === selectedCategory ? { ...item, amount } : item
      );
      setExpenses(newExpenses);
      setAmount('');
    }
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
      <div style={{ marginBottom: '1rem', display: 'flex',flexDirection: 'column', alignItems: 'center' }}>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '4px',
            padding: '0.5rem',
            marginRight: '0.5rem',
            fontFamily: 'Segoe UI, sans-serif'
          }}
        >
          {categories.map((category, idx) => (
            <option key={idx} value={category.label}>{category.label}</option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '4px',
            padding: '0.5rem',
            marginRight: '0.5rem',
            fontFamily: 'Segoe UI, sans-serif'
          }}
        />
        <button
          onClick={handleAmountUpdate}
          style={{
            background: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontFamily: 'Segoe UI, sans-serif'
          }}
        >
          Update Amount
        </button>
      </div>
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
          <span style={{
            marginLeft: 'auto',
            fontWeight: '700',
            color: '#dc2626'
          }}>{item.amount ? `₹${item.amount}` : '₹0'}</span>
        </div>
      ))}
    </section>
  );
};

export default SpendingOverview;