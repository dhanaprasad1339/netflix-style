"use client";

import { useRouter } from "next/navigation";

export default function InvestorsPage() {
  const router = useRouter();

  return (
    <main className="investors-page">

      {/* Skip */}
      <a href="#investors-main" className="skip-link">
        Skip to main content
      </a>

      {/* Header */}
      <header className="investors-header">

        <div
          className="investors-logo"
          onClick={() => router.push("/")}
        >
          Netflix
        </div>

        <nav className="investors-nav">
          <a href="#company-profile">Company Profile</a>
          <a href="#events">Investor Events</a>
          <a href="#releases">Financial Releases</a>
          <a href="#earnings">Quarterly Earnings</a>
        </nav>

      </header>

      <main id="investors-main">

        {/* Company Profile */}
        <section
          id="company-profile"
          className="investors-hero"
        >
          <div>
            <p className="investors-label">
              Netflix
            </p>

            <h1>Investors</h1>

            <h2>Company Profile</h2>

            <p className="company-description">
              Netflix is one of the world’s leading entertainment
              services offering TV series, films, games and live
              programming across a wide variety of genres and languages.
              Members can play, pause and resume watching as much as
              they want, anytime, anywhere, and can change their plans
              at any time.
            </p>
          </div>

          {/* Stock */}
          <div className="stock-card">

            <span>NASDAQ: NFLX</span>

            <strong>$74.14</strong>

            <p className="stock-change">
              +0.45 (0.61%)
            </p>

            <p>24,789,174</p>

            <small>
              Pricing delayed by 20 minutes
            </small>

            <small>
              Last Updated 08/07/26 4:00 PM
            </small>

          </div>
        </section>

        {/* Investor Events */}
        <section
          id="events"
          className="investor-section"
        >
          <div className="section-heading">
            <h2>Investor Events</h2>

            <button>
              Event RSS Feed ↗
            </button>
          </div>

          <div className="event-card">

            <small>Jul 16, 2026 · 01:45 PST</small>

            <h3>
              Netflix Second Quarter 2026 Earnings Interview
            </h3>

            <div className="event-links">
              <button>Video Interview ↗</button>
              <button>Letter to Shareholders ↗</button>
              <button>Financial Statements ↗</button>
              <button>Transcript ↗</button>
            </div>

          </div>

          <div className="event-card">

            <small>Jun 04, 2026 · 03:00 PST</small>

            <h3>
              Annual Meeting of Stockholders of Netflix, Inc.
            </h3>

            <button>Webcast ↗</button>

          </div>

          <button className="all-events">
            All Events
          </button>
        </section>

        {/* Investor Kit */}
        <section className="investor-section investor-kit">

          <h2>Investor Kit</h2>

          <div className="kit-grid">

            <a href="#">Top Investor Questions</a>

            <a href="#">Content Accounting Overview ↗</a>

            <a href="#">Netflix Culture ↗</a>

            <a href="#">
              Netflix Approach to Corporate Governance ↗
            </a>

          </div>

        </section>

        {/* Financial Releases */}
        <section
          id="releases"
          className="investor-section"
        >

          <div className="section-heading">

            <h2>Financial Releases and Updates</h2>

            <button>
              Press Release RSS Feed ↗
            </button>

          </div>

          <div className="release-list">

            <article>
              <small>Jun 15, 2026</small>
              <h3>
                Netflix to Announce Second Quarter 2026
                Financial Results
              </h3>
            </article>

            <article>
              <small>Mar 13, 2026</small>
              <h3>
                Netflix to Announce First Quarter 2026
                Financial Results
              </h3>
            </article>

            <article>
              <small>Feb 26, 2026</small>
              <h3>
                Netflix Declines to Raise Offer for Warner Bros.
              </h3>
            </article>

          </div>

          <button className="all-events">
            All Releases
          </button>

        </section>

        {/* Quarterly Earnings */}
        <section
          id="earnings"
          className="investor-section earnings-section"
        >

          <h2>Quarterly Earnings</h2>

          <div className="earnings-card">

            <h3>
              Second-Quarter 2026 Financial Results
            </h3>

            <div className="earnings-links">
              <button>Video Interview ↗</button>
              <button>Letter to Shareholders ↗</button>
              <button>Financial Statements ↗</button>
              <button>Transcript ↗</button>
            </div>

          </div>

          <button className="all-events">
            All Quarters
          </button>

        </section>

        {/* Quick Links */}
        <section className="quick-investor-links">

          <h2>Quick Links</h2>

          <div>

            <a href="#">Annual Reports &amp; Proxies</a>
            <a href="#">SEC Filings</a>
            <a href="#">Stock Information</a>
            <a href="#">IR Contacts</a>

          </div>

        </section>

      </main>

      {/* Footer */}
      <footer className="investors-footer">

        <div>
          <strong>Netflix</strong>
          <span>Investors</span>
        </div>

        <div className="follow">

          <h3>Follow</h3>

          <a href="#">Facebook ↗</a>
          <a href="#">Twitter ↗</a>
          <a href="#">Instagram ↗</a>
          <a href="#">LinkedIn ↗</a>

        </div>

        <div className="footer-bottom">

          <span>Netflix.com</span>
          <span>Terms of Use</span>
          <span>Privacy Policy</span>

        </div>

      </footer>

    </main>
  );
}