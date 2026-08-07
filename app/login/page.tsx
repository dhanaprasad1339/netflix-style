"use client";

import { FormEvent, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "../../lib/firebase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/browse");
    } catch (error: any) {
      console.error(error);

      if (error.code === "auth/invalid-credential") {
        setError("Incorrect email or password.");
      } else if (error.code === "auth/user-not-found") {
        setError("Account not found.");
      } else if (error.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
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
        <h1>Sign In</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email or mobile number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="login-error">{error}</p>}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <div className="or">
            <span>OR</span>
          </div>

          <button
            type="button"
            className="code-button"
            onClick={() =>
              alert("Sign-in with code will be added later.")
            }
          >
            Use a Sign-In Code
          </button>
        </form>

        <div className="login-help">
          <label>
            <input type="checkbox" />
            <span>Remember me</span>
          </label>

          <Link href="/forgot-password">
            Forgot password?
          </Link>
        </div>

        <p className="new-user">
          New to Netflix Clone?{" "}
          <Link href="/register">Sign up now.</Link>
        </p>

        <p className="captcha-text">
          This page is protected by Google reCAPTCHA to ensure
          you're not a bot.
        </p>
      </section>
    </main>
  );
}