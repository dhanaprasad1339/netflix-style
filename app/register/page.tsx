"use client";

import { FormEvent, useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "../../lib/firebase";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");

    if (!name || !email || !password) {
      setError("Please fill all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    try {
      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      router.push("/browse");
    } catch (error: any) {
      console.error(error);

      if (error.code === "auth/email-already-in-use") {
        setError("This email is already registered.");
      } else if (error.code === "auth/invalid-email") {
        setError("Please enter a valid email.");
      } else if (error.code === "auth/weak-password") {
        setError("Password is too weak.");
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
      }}
    >
      <header
        style={{
          padding: "25px 5%",
          borderBottom: "1px solid #222",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#e50914",
            fontSize: "2rem",
            fontWeight: 900,
          }}
        >
          NETFLIX
        </Link>
      </header>

      <section
        style={{
          maxWidth: "450px",
          margin: "70px auto",
          padding: "40px",
        }}
      >
        <h1 style={{ fontSize: "32px", marginBottom: "30px" }}>
          Create Account
        </h1>

        <form
          onSubmit={handleRegister}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          {error && (
            <p style={{ color: "#ff6b6b" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={buttonStyle}
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p
          style={{
            marginTop: "30px",
            color: "#737373",
          }}
        >
          Already have an account?{" "}
          <Link
            href="/login"
            style={{ color: "#fff" }}
          >
            Sign in.
          </Link>
        </p>
      </section>
    </main>
  );
}

const inputStyle = {
  padding: "16px",
  background: "#333",
  color: "#fff",
  border: "1px solid #555",
  borderRadius: "4px",
  fontSize: "16px",
  outline: "none",
};

const buttonStyle = {
  padding: "16px",
  background: "#e50914",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  fontWeight: 700,
  cursor: "pointer",
};