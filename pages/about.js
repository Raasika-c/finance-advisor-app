import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Budget Buddy</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          maxWidth: '900px',
          margin: '2rem auto',
          padding: '0 1rem',
          color: '#333',
        }}
      >
        {/* Header */}
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 0',
            borderBottom: '2px solid #4f46e5',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              fontWeight: '700',
              fontSize: '1.8rem',
              color: '#4f46e5',
              cursor: 'default',
            }}
          >
            Budget Buddy
          </div>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <a
              href="/"
              style={{ textDecoration: 'none', color: '#4f46e5', fontWeight: '600' }}
            >
              Home
            </a>
            <a
              href="/dashboard"
              style={{ textDecoration: 'none', color: '#4f46e5', fontWeight: '600' }}
            >
              Dashboard
            </a>
            <a
              href="/contact"
              style={{ textDecoration: 'none', color: '#4f46e5', fontWeight: '600' }}
            >
              Contact
            </a>
            <a
              href="#"
              style={{ textDecoration: 'none', color: '#4f46e5', fontWeight: '600' }}
            >
              Login
            </a>
          </nav>
        </header>

        {/* About Section */}
        <section style={{ lineHeight: '1.6' }}>
          <h1 style={{ color: '#4f46e5', fontWeight: '700', marginBottom: '1rem' }}>
            About Us
          </h1>

          <p style={{ marginBottom: '1rem' }}>
            Welcome to <strong>Budget Buddy</strong> – your trusted companion in managing
            personal finances. We are passionate about helping individuals take control of
            their money, plan smarter budgets, and achieve financial freedom with ease.
          </p>

          <p style={{ marginBottom: '1rem' }}>
            Our platform offers tools to track income and expenses, set goals, view insights
            through visual charts, and receive helpful tips to improve your saving habits.
          </p>

          <p style={{ marginBottom: '2rem' }}>
            Whether you're a student, a professional, or a homemaker, Budget Buddy is designed
            to make personal finance simple, intuitive, and stress-free.
          </p>

          {/* Team */}
          <div>
            <h2 style={{ color: '#4f46e5', fontWeight: '700', marginBottom: '1rem' }}>
              Meet Our Team
            </h2>

            <div
              style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {/* Member 1 */}
              <div
                style={{
                  textAlign: 'center',
                  maxWidth: '180px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  borderRadius: '12px',
                  padding: '1rem',
                  backgroundColor: '#f9f9f9',
                }}
              >
                <img
                  src="https://img.icons8.com/color/96/administrator-male.png"
                  alt="Ravi Kumar"
                  style={{ borderRadius: '50%' }}
                />
                <h4 style={{ margin: '0.8rem 0 0.3rem 0', color: '#222' }}>Ravi Kumar</h4>
                <p style={{ color: '#555', fontSize: '0.9rem' }}>Founder & CEO</p>
              </div>

              {/* Member 2 */}
              <div
                style={{
                  textAlign: 'center',
                  maxWidth: '180px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  borderRadius: '12px',
                  padding: '1rem',
                  backgroundColor: '#f9f9f9',
                }}
              >
                <img
                  src="https://img.icons8.com/color/96/administrator-female.png"
                  alt="Aisha Sharma"
                  style={{ borderRadius: '50%' }}
                />
                <h4 style={{ margin: '0.8rem 0 0.3rem 0', color: '#222' }}>Aisha Sharma</h4>
                <p style={{ color: '#555', fontSize: '0.9rem' }}>Finance Expert</p>
              </div>

              {/* Member 3 */}
              <div
                style={{
                  textAlign: 'center',
                  maxWidth: '180px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  borderRadius: '12px',
                  padding: '1rem',
                  backgroundColor: '#f9f9f9',
                }}
              >
                <img
                  src="https://img.icons8.com/color/96/developer.png"
                  alt="Raj Patel"
                  style={{ borderRadius: '50%' }}
                />
                <h4 style={{ margin: '0.8rem 0 0.3rem 0', color: '#222' }}>Raj Patel</h4>
                <p style={{ color: '#555', fontSize: '0.9rem' }}>Lead Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '1rem 0',
            borderTop: '1px solid #ddd',
            color: '#777',
            fontSize: '0.9rem',
          }}
        >
          &copy; 2025 Budget Buddy. All rights reserved.
        </footer>
      </div>
    </>
  );
}
