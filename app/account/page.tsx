"use client";

import { useRouter } from "next/navigation";

export default function AccountPage() {
  const router = useRouter();

  return (
    <main className="account-page">

      {/* Header */}
      <header className="account-header">
        <h1
          className="account-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </h1>

        <button
          className="account-signin"
          onClick={() => router.push("/login")}
        >
          Sign In
        </button>
      </header>

      {/* Main */}
      <section className="account-content">

        <h1>Enter your info to sign in</h1>

        <p>Or get started with a new account.</p>

        <button
          className="account-get-started"
          onClick={() => router.push("/login")}
        >
          Get Started
        </button>

        <button
          className="account-help"
          onClick={() => router.push("/help")}
        >
          Get Help
        </button>

        <p className="recaptcha-text">
          This page is protected by Google reCAPTCHA to ensure you're
          not a bot.
        </p>

        <div className="account-links">

          <p>
            Questions? Call{" "}
            <span>000-800-919-1743 (Toll-Free)</span>
          </p>

          <div className="account-link-grid">

            <button onClick={() => router.push("/faq")}>
              FAQ
            </button>

            <button onClick={() => router.push("/help")}>
              Help Centre
            </button>

            <button>
              Terms of Use
            </button>

            <button>
              Privacy
            </button>

            <button>
              Cookie Preferences
            </button>

            <button>
              Corporate Information
            </button>

          </div>

          <div className="language-box">
            <label>Select language</label>

            <select defaultValue="English">
              <option>English</option>
              <option>తెలుగు</option>
              <option>हिन्दी</option>
            </select>
          </div>

        </div>

      </section>

    </main>
  );
}