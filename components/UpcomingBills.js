import React, { useState, useEffect } from 'react';

const UpcomingBills = ({ onBillsChange }) => {
  const [bills, setBills] = useState([]);
  const [newBill, setNewBill] = useState({ label: '', due: '', amount: '' });

  useEffect(() => {
    const total = bills.reduce((sum, bill) => sum + (Number(bill.amount) || 0), 0);
    onBillsChange(total);
  }, [bills, onBillsChange]);

  const addBill = () => {
    if (newBill.label && newBill.due && newBill.amount) {
      setBills([...bills, { ...newBill, amount: Number(newBill.amount) }]);
      setNewBill({ label: '', due: '', amount: '' });
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
      <h2 style={{ fontWeight: '700', marginBottom: '1rem', color: '#4f46e5' }}>Upcoming Bills</h2>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Bill Name"
          value={newBill.label}
          onChange={(e) => setNewBill({ ...newBill, label: e.target.value })}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '4px',
            padding: '0.5rem',
            marginRight: '0.5rem'
          }}
        />
        <input
          type="date"
          placeholder="Due Date"
          value={newBill.due}
          onChange={(e) => setNewBill({ ...newBill, due: e.target.value })}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '4px',
            padding: '0.5rem',
            marginRight: '0.5rem'
          }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newBill.amount}
          onChange={(e) => setNewBill({ ...newBill, amount: e.target.value })}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '4px',
            padding: '0.5rem',
            marginRight: '0.5rem'
          }}
        />
        <button
          onClick={addBill}
          style={{
            background: '#4f46e5',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            padding: '0.5rem 1rem',
            cursor: 'pointer'
          }}
        >
          Add Bill
        </button>
      </div>
      <ul style={{
        listStyle: 'none',
        marginTop: '1rem',
        padding: 0
      }}>
        {bills.map((bill, idx) => (
          <li key={idx} style={{
            marginBottom: '1rem',
            background: '#f9fafb',
            padding: '0.8rem 1rem',
            borderRadius: '8px',
            boxShadow: 'inset 0 0 6px #c7d2fe',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: '600'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#555',
              fontWeight: '400',
              fontSize: '0.9rem'
            }}>
              {bill.label}
              <small>Due: {bill.due}</small>
            </div>
            <div style={{
              color: '#2563eb',
              fontWeight: '700',
              fontSize: '1.05rem'
            }}>₹{bill.amount}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UpcomingBills;