import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Questions */}
        <p className="footer-question">
          Questions?{" "}
          <Link href="/contact">
            Contact us.
          </Link>
        </p>

        {/* Footer Links */}
        <div className="footer-links">

          {/* Column 1 */}
          <div className="footer-column">
            <Link href="/faq">
              FAQ
            </Link>

            <Link href="/investor-relations">
              Investor Relations
            </Link>

            <Link href="/privacy">
              Privacy
            </Link>

            <Link href="/speed-test">
              Speed Test
            </Link>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <Link href="/help">
              Help Center
            </Link>

            <Link href="/jobs">
              Jobs
            </Link>

            <Link href="/cookie-preferences">
              Cookie Preferences
            </Link>

            <Link href="/legal-notices">
              Legal Notices
            </Link>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <Link href="/account">
              Account
            </Link>

            <Link href="/ways-to-watch">
              Ways to Watch
            </Link>

            <Link href="/corporate-information">
              Corporate Information
            </Link>

            <Link href="/only-on-netflix">
              Only on Netflix
            </Link>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <Link href="/media-center">
              Media Center
            </Link>

            <Link href="/terms">
              Terms of Use
            </Link>

            <Link href="/contact">
              Contact Us
            </Link>
          </div>

        </div>

        {/* Language */}
        <button
          type="button"
          className="language-button"
        >
          🌐 English ▾
        </button>

        {/* Country */}
        <p className="footer-country">
          Netflix India
        </p>

        {/* Copyright */}
        <p className="footer-copyright">
          © {new Date().getFullYear()} Netflix Clone
        </p>

      </div>
    </footer>
  );
}