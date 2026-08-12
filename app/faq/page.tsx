"use client";

import { useRouter } from "next/navigation";


export default function FAQPage() {
  const router = useRouter();

  return (
    <main className="faq-page">

      {/* Header */}
      <header className="faq-header">
        <h1
          className="faq-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </h1>

        <button
          className="faq-signin"
          onClick={() => router.push("/login")}
        >
          Sign In
        </button>
      </header>

      {/* Hero */}
      <section className="faq-hero">
        <h1>What is Netflix?</h1>

        <p>
          Netflix is a subscription-based streaming service that allows
          our members to watch TV shows and movies on an internet-connected
          device.
        </p>

        <p>
          Depending on your plan, you can also download TV shows and movies
          to your Android phone or tablet, iPhone, iPad, or Google Chromebook
          device and watch without an internet connection.
        </p>

        <p>
          If you're already a member and would like to learn more about
          using Netflix, visit <b>Getting started with Netflix.</b>
        </p>
      </section>

     
      {/* Supported Devices */}
      <section className="faq-section">
        <h2>Supported Devices</h2>

        <div className="device-box">
          <span>📺 Smart TV</span>
          <span>💻 Computer</span>
          <span>📱 Mobile</span>
          <span>🎮 Game Console</span>
          <span>📟 Tablet</span>
        </div>

        <p>
          You can watch Netflix through any supported internet-connected
          device that offers the Netflix app, including smart TVs,
          game consoles, streaming media players, cable boxes,
          smartphones, and tablets.
        </p>

        <p>
          You can also watch Netflix on your computer using an internet
          browser.
        </p>

        <p>
          To get the best performance, you can review the system
          requirements for web browser compatibility and check our
          internet speed recommendations.
        </p>

        <div className="note">
          <strong>Note:</strong> A small percentage of devices may not
          be supported by all plans.
        </div>

        <p>
          Need help getting set up? Search our Help Center for the
          manufacturer of the device you're using.
        </p>

        <div className="note">
          <strong>Note:</strong> The Netflix app may come pre-loaded on
          certain devices, or you may need to download the Netflix app
          onto your device. Netflix app functionality may differ between
          devices.
        </div>
      </section>

      {/* Plans */}
      <section className="faq-section">
        <h2>Plans and Pricing</h2>

        <p>
          Each Netflix plan determines the number of devices you can watch
          Netflix on at the same time and whether you can watch in
          High Definition (HD), Full High Definition (FHD), or
          Ultra High Definition (UHD).
        </p>

        <div className="quality-grid">
          <div>
            <h3>Basic</h3>
            <strong>₹149</strong>
            <p>Good video quality</p>
          </div>

          <div>
            <h3>Standard</h3>
            <strong>₹499</strong>
            <p>Full HD video quality</p>
          </div>

          <div>
            <h3>Premium</h3>
            <strong>₹649</strong>
            <p>4K + HDR video quality</p>
          </div>
        </div>

        <p>
          You can change your plan or cancel online at any time.
        </p>
      </section>

      {/* Get Started */}
      <section className="faq-section">
        <h2>Get Started</h2>

        <div className="started-box">
          <div>BRIDGERTON</div>
          <div>THE CROWN</div>
          <div>LUPIN</div>
          <div>OZARK</div>
        </div>

        <h3>To start watching Netflix:</h3>

        <ol>
          <li>Visit netflix.com/signup.</li>
          <li>Choose a plan.</li>
          <li>
            Create an account by entering your email address and
            creating a password.
          </li>
          <li>Enter a payment method.</li>
        </ol>

        <p>
          As a Netflix member, you are charged once a month on the date
          you signed up.
        </p>
      </section>

      {/* Helpful */}
      <section className="helpful">
        <h3>Was this article helpful?</h3>

        <button>Yes</button>
        <button>No</button>
      </section>

      {/* Related */}
      <section className="related">
        <h2>Related Articles</h2>

        <p>Getting started with Netflix</p>
        <p>Billing and Payments</p>
        <p>Netflix Gift Cards</p>
      </section>
      

      {/* Footer */}
      <footer className="faq-footer">
        <h2>Need more help?</h2>

        <button
          onClick={() => alert("Contact support coming soon")}
        >
          Contact Us
        </button>

        <div className="footer-links">
          <span>English</span>
          <span>Terms of Use</span>
          <span>Privacy</span>
          <span>Cookie Preferences</span>
        </div>
        
      </footer>

    </main>
  );
}