import Link from "next/link";
import "./landing.css";

export default function Home() {
  return (
    <main className="landing">
      <div className="overlay">
        <nav className="landing-navbar">
          <h1 className="logo">NETFLIX</h1>

          <Link href="/login" className="signin-btn">
            Sign In
          </Link>
        </nav>

        <section className="hero">
          <h1>Unlimited movies, TV shows and more</h1>

          <h3>Starts at ₹149. Cancel anytime.</h3>

          <p>
            Ready to watch? Create an account or sign in to continue.
          </p>

          <div className="hero-buttons">
            <Link href="/register" className="get-started">
              Get Started
            </Link>

            <Link href="/login" className="login-btn">
              Login
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}