import Link from 'next/link';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Budget Buddy</title>
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
        maxWidth: '600px',
        margin: '3rem auto',
        padding: '0 1rem',
        fontFamily: 'Segoe UI, sans-serif',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 6px 15px rgba(0,0,0,0.08)',
        paddingBottom: '2rem'
      }}>
        <h1 style={{ color: '#4f46e5', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
          Contact Us
        </h1>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <label style={{ fontWeight: '600', color: '#333' }}>
            Name
            <input
              type="text"
              placeholder="Your name"
              required
              style={{
                marginTop: '0.5rem',
                padding: '0.7rem',
                borderRadius: '8px',
                border: '1.5px solid #ccc',
                fontSize: '1rem'
              }}
            />
          </label>

          <label style={{ fontWeight: '600', color: '#333' }}>
            Email
            <input
              type="email"
              placeholder="you@example.com"
              required
              style={{
                marginTop: '0.5rem',
                padding: '0.7rem',
                borderRadius: '8px',
                border: '1.5px solid #ccc',
                fontSize: '1rem'
              }}
            />
          </label>

          <label style={{ fontWeight: '600', color: '#333' }}>
            Message
            <textarea
              placeholder="Write your message here..."
              required
              rows={5}
              style={{
                marginTop: '0.5rem',
                padding: '0.7rem',
                borderRadius: '8px',
                border: '1.5px solid #ccc',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              backgroundColor: '#4f46e5',
              color: 'white',
              fontWeight: '700',
              fontSize: '1.1rem',
              padding: '0.8rem',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '1rem',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3730a3')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#4f46e5')}
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
