"use client";

import { useRouter } from "next/navigation";

export default function HelpPage() {
  const router = useRouter();

  return (
    <main className="help-page">

      {/* Header */}
      <header className="help-header">
        <h1
          className="help-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </h1>

        <div className="help-header-right">
          <button
            className="help-language"
            onClick={() => alert("Language selection coming soon")}
          >
            English ▾
          </button>

          <button
            className="help-signin"
            onClick={() => router.push("/login")}
          >
            Sign In
          </button>
        </div>
      </header>

      {/* Search Hero */}
      <section className="help-search-section">
        <h1>How can we help?</h1>

        <div className="help-search-box">
          <input
            type="text"
            placeholder="Type a question, topic or issue"
          />

          <button>Search</button>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="help-container">

        <h2>Popular topics</h2>

        <div className="popular-topics">
          <button>How to sign up for Netflix</button>
          <button>Plans and Pricing</button>
          <button>Can't sign in to Netflix</button>
          <button>Parental controls on Netflix</button>
        </div>

        {/* Explore Topics */}
        <h2 className="explore-title">
          Explore Topics
        </h2>

        <div className="topics-grid">

          {/* Account */}
          <div className="topic-card">
            <h3>Account and Billing</h3>

            <p>Account Settings</p>
            <p>Paying for Netflix</p>
          </div>

          {/* Fix Problem */}
          <div className="topic-card">
            <h3>Fix a Problem</h3>

            <p>Account Issues</p>
            <p>Billing Issues</p>
            <p>Error Codes</p>
            <p>Problems Watching</p>
          </div>

          {/* Watching */}
          <div className="topic-card">
            <h3>Watching</h3>

            <p>Profiles</p>
            <p>Features and Settings</p>
            <p>TV Shows and Movies</p>
            <p>Parental Controls</p>
            <p>Playing</p>
          </div>

          {/* Games */}
          <div className="topic-card">
            <h3>Games on Netflix</h3>

            <p>Parental Controls & Player Safety</p>
            <p>Browse Games</p>
          </div>

          {/* Getting Started */}
          <div className="topic-card">
            <h3>Getting Started</h3>

            <p>Joining Netflix</p>
            <p>Device Setup</p>
          </div>

        </div>

        {/* Quick Links */}
        <h2 className="quick-title">
          Quick Links
        </h2>

        <div className="quick-links">

          <button>Content Grievances in India</button>

          <button>Reset password</button>

          <button>Update email</button>

          <button>Get help signing in</button>

          <button>Update payment method</button>

          <button>Request TV shows or movies</button>

        </div>

      </section>

      {/* Need More Help */}
      <section className="help-contact">
        <h2>Need more help?</h2>

        <button
          onClick={() => alert("Contact Us coming soon")}
        >
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="help-footer">

        <button
          onClick={() => alert("Language selection coming soon")}
        >
          English ▾
        </button>

        <div className="help-footer-links">
          <span>Terms of Use</span>
          <span>Privacy</span>
          <span>Cookie Preferences</span>
          <span>Corporate Information</span>
        </div>

      </footer>

    </main>
  );
}