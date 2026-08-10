"use client";

import { useRouter } from "next/navigation";

export default function CorporateInformation() {
  const router = useRouter();

  return (
    <main className="corporate-page">

      {/* HEADER */}
      <header className="corporate-header">

        <div
          className="corporate-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </div>

        <div className="corporate-header-links">

          <button onClick={() => router.push("/login")}>
            Sign In
          </button>

          <button onClick={() => router.push("/help")}>
            Help Center
          </button>

        </div>

      </header>

      {/* MAIN CONTENT */}
      <section className="corporate-container">

        <button
          className="back-help"
          onClick={() => router.push("/help")}
        >
          ← Back to Help Home
        </button>

        <div className="country-box">
          <span>Currently viewing information for:</span>

          <strong>India</strong>
        </div>

        <h1>Corporate Information</h1>

        <p className="intro-text">
          We're here to help if you need it -- for the fastest
          answer to your questions, we encourage you to reach out
          to our customer service. Visit the Help Center for more
          info or contact us.
        </p>

        <p className="intro-text">
          If you have a request for a TV show or movie, see{" "}
          <button
            className="inline-link"
            onClick={() => router.push("/help")}
          >
            Request TV shows or movies
          </button>
          .
        </p>

        {/* CONTRACTUAL PARTNER */}

        <section className="company-section">

          <h2>
            Contractual partner and point of contact for Netflix
            members:
          </h2>

          <div className="company-card">

            <h3>Netflix Entertainment Services India LLP</h3>

            <p>
                Level 5, Tech Park , Plot No.2   
            </p>

            <p>
              Hitech City, Madhapur
            </p>

            <p>
              Hyderabad 500081,India
            </p>

          </div>

        </section>

        {/* DATA CONTROLLER */}

        <section className="company-section">

          <h2>Data Controller:</h2>

          <div className="company-card">

            <h3>Netflix Entertainment Services India LLP</h3>

            <p>
              Level 5, Tech Park , Plot No.2            </p>

            <p>
             Hitech City, Madhapur
            </p>

            <p>
              Hyderabad 500081,India
            </p>

          </div>

        </section>

        {/* HELPFUL */}

        <section className="helpful-section">

          <h2>Was this article helpful?</h2>

          <div className="helpful-buttons">

            <button
              onClick={() => alert("Thanks for your feedback!")}
            >
              Yes
            </button>

            <button
              onClick={() => alert("Thanks for your feedback!")}
            >
              No
            </button>

          </div>

        </section>

        {/* RELATED ARTICLES */}

        <section className="related-section">

          <h2>Related Articles</h2>

          <button onClick={() => router.push("/help")}>
            Billing and Payments
          </button>

          <button onClick={() => router.push("/help")}>
            How to download titles to watch offline
          </button>

          <button onClick={() => router.push("/help")}>
            How to create, edit, or delete profiles
          </button>

        </section>

        {/* NEED MORE HELP */}

        <section className="need-help">

          <h2>Need more help?</h2>

          <button onClick={() => router.push("/help")}>
            Contact Us
          </button>

        </section>

      </section>

      {/* FOOTER */}

      <footer className="corporate-footer">

        <div className="footer-language">
          <select defaultValue="English">
            <option>English</option>
            <option>हिन्दी</option>
            <option>తెలుగు</option>
          </select>
        </div>

        <div className="footer-links">

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

        </div>

      </footer>

    </main>
  );
}