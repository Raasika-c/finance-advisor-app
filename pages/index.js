import Image from "next/image";
import Head from "next/head"; // You missed this import!
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Budget Buddy</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header>
        <div className="logo">Budget Buddy</div>
        <nav className="nav-links">
          <a href="/dashboard">dashboard</a>
          <a href="#testimonials">feedbacks</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#faq">FAQ</a>
          <a href="#education">Finance Courses</a>
          <a href="/login">Login</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h2>Track, Save, and Succeed</h2>
          <p>
            Manage your income, control expenses, and gain smart insights with Budget Buddy. Take charge of your finances with ease and confidence.
          </p>
          <a href="/dashboard">
            <button className="cta-button">Get Started Free</button>
          </a>
        </div>
        <img
          src="https://www.godigit.com/content/dam/godigit/directportal/lifehm/difference-between-financial-consultant-and-financial-advisor.jpg"
          alt="Hero Visual"
        />
      </section>

      <section className="features">
        <div className="feature">
          <img src="https://img.icons8.com/ios-filled/100/money.png" alt="Income Tracker" />
          <h3>Income & Expense Tracker</h3>
          <p>Log daily transactions with categories, amounts, and descriptions.</p>
        </div>
        <div className="feature">
          <img src="https://img.icons8.com/ios-filled/100/budget.png" alt="Smart Budgeting" />
          <h3>Smart Budgeting</h3>
          <p>Set monthly budgets, monitor real-time progress, and get smart tips based on your spending.</p>
        </div>
        <div className="feature">
          <img src="https://img.icons8.com/ios-filled/100/combo-chart.png" alt="Visual Insights" />
          <h3>Visual Insights</h3>
          <p>Interactive charts and graphs give you a clear view of your financial health.</p>
        </div>
        <div className="feature">
          <img src="https://img.icons8.com/ios-filled/100/report-card.png" alt="Monthly Reports" />
          <h3>Monthly Reports</h3>
          <p>Generate monthly financial reports to analyze your income, spending, and savings trends.</p>
        </div>
        <div className="feature">
          <img src="https://img.icons8.com/ios-filled/100/light-on.png" alt="Smart Tips" />
          <h3>Smart Tips</h3>
          <p>Get helpful advice and alerts inside Smart Budgeting to improve your saving habits.</p>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial">
          “Budget Buddy completely changed how I view my spending habits. It’s like having a financial coach in my pocket!” — Sneha, Student
        </div>
        <div className="testimonial">
          “I used to lose track of where my money went. Now I get daily insights. Love it!” — Rahul, Freelancer
        </div>
      </section>

      <section className="how-it-works" id="how-it-works">
        <h2>How It Works</h2>
        <p>📝 <strong>Track:</strong> Log all your income and expenses daily with categories and notes.</p>
        <p>🎯 <strong>Set Goals:</strong> Create monthly budgets and savings targets tailored to your needs.</p>
        <p>💡 <strong>Get Insights:</strong> Receive smart tips and budget suggestions to stay on track.</p>
      </section>

      <section className="faq" id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>Is Budget Buddy free to use?</h4>
          <p>Yes! Budget Buddy is completely free for personal use with premium features coming soon.</p>
        </div>
        <div className="faq-item">
          <h4>How secure is my financial data?</h4>
          <p>We use advanced encryption and security protocols to ensure your financial data is safe and private.</p>
        </div>
        <div className="faq-item">
          <h4>Can I export my monthly reports?</h4>
          <p>Absolutely! You can download your reports as PDFs or Excel files anytime.</p>
        </div>
      </section>

      <section className="education" id="education">
        <h2>Finance Literacy Courses</h2>
        
         <p>
          Boost your knowledge with our curated mini-courses on saving, budgeting, and personal finance. Perfect for beginners and experts alike!
        </p>
        
        <video
          controls
          poster="https://img.youtube.com/vi/Ay4fmZdZqJE/maxresdefault.jpg"
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
      </section>

      <section className="stats">
        <h2>Our Progress</h2>
        <p>📊 ₹12 Crores+ tracked by users</p>
        <p>👨‍💻 50,000+ users worldwide</p>
        <p>💰 Avg. savings increased by 18%</p>
      </section>

      <footer>
        <div className="footer-links">
          <a href="/about">About Us</a> | <a href="/contact">Contact</a> | <a href="#">Privacy Policy</a>
        </div>
        <div>&copy; 2025 Budget Buddy. All Rights Reserved.</div>
      </footer>
    </>
  );
}
