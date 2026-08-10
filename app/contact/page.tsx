"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactPage() {
  const router = useRouter();

  const [issue, setIssue] = useState("");

  const quickLinks = [
    "Content Grievances in India",
    "Reset password",
    "Update email",
    "Get help signing in",
    "Update payment method",
    "Request TV shows or movies",
  ];

  const handleSearch = () => {
    if (!issue.trim()) {
      alert("Please describe your issue");
      return;
    }

    alert("Thanks! We'll help you find the best solution.");
  };

  return (
    <main className="contact-page">

      {/* HEADER */}
      <header className="contact-header">

        <div
          className="contact-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </div>

        <nav className="contact-nav">

          <button onClick={() => router.push("/login")}>
            Sign In
          </button>

          <button onClick={() => router.push("/help")}>
            Help Center
          </button>

        </nav>

      </header>

      {/* MAIN */}
      <section className="contact-container">

        <button
          className="contact-back"
          onClick={() => router.push("/help")}
        >
          ← Back to Help
        </button>

        <h1>Contact us</h1>

        <p className="contact-subtitle">
          Tell us more and we'll find the best solution for you
        </p>

        {/* SEARCH / ISSUE BOX */}
        <div className="issue-box">

          <label htmlFor="issue">
            Describe your issue
          </label>

          <textarea
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            placeholder="What can we help you with?"
          />

          <button
            className="find-solution"
            onClick={handleSearch}
          >
            Find a solution
          </button>

        </div>

        {/* QUICK LINKS */}
        <section className="quick-links">

          <h2>Quick Links</h2>

          <div className="quick-link-list">

            {quickLinks.map((link) => (
              <button
                key={link}
                onClick={() => {
                  if (link === "Reset password") {
                    router.push("/forgot-password");
                  } else if (
                    link === "Get help signing in"
                  ) {
                    router.push("/login");
                  } else {
                    alert(`${link} selected`);
                  }
                }}
              >
                {link}
              </button>
            ))}

          </div>

        </section>

      </section>

      {/* FOOTER */}
      <footer className="contact-footer">

        <div className="contact-language">

          <select defaultValue="English">
            <option>English</option>
            <option>हिन्दी</option>
            <option>తెలుగు</option>
          </select>

        </div>

        <div className="contact-footer-links">

          <button onClick={() => router.push("/terms")}>
            Terms of Use
          </button>

          <button onClick={() => router.push("/privacy")}>
            Privacy
          </button>

          <button
            onClick={() =>
              router.push("/cookie-preferences")
            }
          >
            Cookie Preferences
          </button>

          <button
            onClick={() =>
              router.push("/corporate-information")
            }
          >
            Corporate Information
          </button>

          <button
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </button>

        </div>

      </footer>

    </main>
  );
}