import Link from 'next/link';
import Head from 'next/head';

export default function Dashboard() {
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



      {/* Header */}
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
          <Link href="/" style={{
            color: 'white',
            marginLeft: '1.5rem',
            textDecoration: 'none',
            fontWeight: '600'
          }}>Home</Link>
          <Link href="/contact" style={{
            color: 'white',
            marginLeft: '1.5rem',
            textDecoration: 'none',
            fontWeight: '600'
          }}>Contact</Link>
          <Link href="/about" style={{
            color: 'white',
            marginLeft: '1.5rem',
            textDecoration: 'none',
            fontWeight: '600'
          }}>About Us</Link>
          <Link href="/login" style={{
            color: 'white',
            marginLeft: '1.5rem',
            textDecoration: 'none',
            fontWeight: '600'
          }}>Login</Link>
        </nav>
      </header>

      {/* Main */}
      <main style={{
        maxWidth: '1100px',
        margin: '2rem auto 4rem',
        padding: '0 1rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem',
        fontFamily: 'Segoe UI, sans-serif'
      }}>

        {/* Spending Overview */}
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
          {[
            { label: 'Groceries', img: 'https://img.icons8.com/color/96/000000/shopping-cart--v1.png', amount: '₹4,500' },
            { label: 'Dining', img: 'https://img.icons8.com/color/96/000000/restaurant.png', amount: '₹2,200' },
            { label: 'Transport', img: 'https://img.icons8.com/color/96/000000/car--v1.png', amount: '₹1,500' },
            { label: 'Entertainment', img: 'https://img.icons8.com/color/96/000000/ticket.png', amount: '₹1,100' }
          ].map((item, idx) => (
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
              }}>{item.amount}</span>
            </div>
          ))}
        </section>

        {/* Upcoming Bills */}
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
          <ul style={{
            listStyle: 'none',
            marginTop: '1rem',
            padding: 0
          }}>
            {[
              { label: 'Electricity Bill', due: '15 June 2025', amount: '₹3,200' },
              { label: 'Internet Bill', due: '18 June 2025', amount: '₹850' },
              { label: 'Credit Card Payment', due: '22 June 2025', amount: '₹5,000' },
              { label: 'Water Bill', due: '25 June 2025', amount: '₹600' }
            ].map((bill, idx) => (
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
                }}>{bill.amount}</div>
              </li>
            ))}
          </ul>
        </section>

        {/* Income & Expense */}
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
          <p style={{ marginBottom: '0.5rem' }}>Total Income: <strong>₹50,000</strong></p>
          <p style={{ marginBottom: '0.5rem' }}>Total Expenses: <strong>₹20,000</strong></p>
          <p style={{ marginBottom: '0.5rem' }}>Balance: <strong>₹30,000</strong></p>
        </section>
      </main>
    </>
  );
}
