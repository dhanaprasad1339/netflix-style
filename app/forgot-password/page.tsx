"use client";

import { useState } from "react";
import Link from "next/link";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../lib/firebase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage("");
    setError("");

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent successfully.");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="login-page">
      <div className="login-background" />

      <header className="login-header">
        <Link href="/" className="netflix-logo">
          NETFLIX
        </Link>
      </header>

      <section className="login-box">
        <h1>Forgot Password</h1>

        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {message && (
            <p style={{ color: "lightgreen" }}>{message}</p>
          )}

          {error && (
            <p style={{ color: "tomato" }}>{error}</p>
          )}

          <button type="submit" className="login-button">
            Send Reset Link
          </button>
        </form>

        <p className="new-user">
          <Link href="/login">Back to Login</Link>
        </p>
      </section>
    </main>
  );
}