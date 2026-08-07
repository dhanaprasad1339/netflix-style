"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { onAuthStateChanged, User } from "firebase/auth";
import {auth} from "@/lib/firebase";
export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<User | null>(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return () => unsubscribe();
}, []);

  const handleGetStarted = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    if(user){
      router.push("/browse");
    }else{
  
      router.push("/login");
    }
  };

  return (
  <div className="hero">

  <header className="landing-header">
    <h1 className="landing-logo">NETFLIX</h1>

    <button
      className="signin-btn"
      onClick={() => router.push("/login")}
    >
      Sign In
    </button>
  </header>

  <h1>Unlimited movies, TV shows and more</h1>

  <p>Starts at ₹149. Cancel anytime.</p>

  <p>
    Ready to watch? Enter your email to create or sign in to your account.
  </p>

  <div className="email-box">
    <input
      type="email"
      placeholder="Email address"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />

    <button onClick={handleGetStarted}>
      Get Started 
    </button>
  </div>
    {/* Subscription Plans */}

  <div className="plans-section">
  <h2>Choose your plan</h2>

  <p className="plans-subtitle">
    Watch unlimited movies and TV shows.
  </p>

  <div className="plans-container">

    {/* Basic */}
    <div className="plan-card">
      <h3>Basic</h3>

      <div className="plan-price">₹149</div>

      <p>Good video quality</p>
      <p>Watch on 1 device</p>

      <button
        onClick={() => router.push("/payment?plan=basic")}
      >
        Choose Basic
      </button>
    </div>

    {/* Standard */}
    <div className="plan-card popular">
      <span className="popular-badge">
        Most Popular
      </span>

      <h3>Standard</h3>

      <div className="plan-price">₹499</div>

      <p>Full HD video quality</p>
      <p>Watch on 2 devices</p>

      <button
        onClick={() => router.push("/payment?plan=standard")}
      >
        Choose Standard
      </button>
    </div>

    {/* Premium */}
    <div className="plan-card">
      <h3>Premium</h3>

      <div className="plan-price">₹649</div>

      <p>4K + HDR video quality</p>
      <p>Watch on 4 devices</p>

      <button
        onClick={() => router.push("/payment?plan=premium")}
      >
        Choose Premium
      </button>
    </div>

  </div>
</div>
</div>  
  );
}