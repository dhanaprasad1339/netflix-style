"use client";

import { useRouter } from "next/navigation";

export default function PrivacyPage() {
  const router = useRouter();

  return (
    <main className="privacy-page">

      {/* HEADER */}
      <header className="privacy-header">

        <div
          className="privacy-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </div>

        <nav className="privacy-nav">
          <button onClick={() => router.push("/")}>
            Join Netflix
          </button>

          <button onClick={() => router.push("/login")}>
            Sign In
          </button>

          <button onClick={() => router.push("/help")}>
            Help Center
          </button>
        </nav>

      </header>

      {/* BACK */}
      <div className="privacy-back">
        <button onClick={() => router.push("/help")}>
          ← Back to Help Home
        </button>
      </div>

      {/* CONTENT */}
      <article className="privacy-content">

        <h1>Privacy Statement</h1>

        <p>
          This Privacy Statement explains how we collect, use,
          and disclose your personal information when you interact
          with the Netflix service. It also explains what privacy
          rights you have and how to exercise them.
        </p>

        <p>
          Certain functionalities or apps that are part of the
          Netflix service may also provide contextual privacy
          information or choices.
        </p>

        {/* CONTACT */}
        <h2>Contacting Us</h2>

        <p>
          For questions about this Privacy Statement, our use of
          your personal information, or how to exercise your
          privacy rights, please contact our Privacy Office.
        </p>

        <div className="privacy-contact">
          <strong>Privacy Office</strong>
          <br />
          privacy@example.com
        </div>

        <p>
          For general questions about the service, your account,
          or customer support, please visit the Help Center.
        </p>

        {/* SECTION A */}
        <h2>
          Section A: Our Collection, Use, and Disclosure of
          Personal Information
        </h2>

        <h2>
          The Categories of Personal Information We Collect
        </h2>

        <p>
          We collect different categories of personal information
          depending on how you interact with the service.
        </p>

        {/* PERSONAL DETAILS */}
        <h3>Personal details</h3>

        <p>
          When you register with the service, we may collect
          contact information such as your email address and
          authentication information used for login.
        </p>

        <p>
          Depending on your interaction with the service, this
          may include your name, phone number, postal address,
          date of birth, and other information you choose to
          provide.
        </p>

        {/* PAYMENT */}
        <h3>Payment details</h3>

        <p>
          When you subscribe or make a purchase, we may collect
          information necessary to process payments, including
          payment history and billing-related information.
        </p>

        {/* PURCHASE */}
        <h3>Purchase information</h3>

        <p>
          We may collect information about purchases you make,
          your purchase history, and products or services that
          you have considered or purchased.
        </p>

        {/* ACCOUNT */}
        <h3>Netflix account/profile information</h3>

        <p>
          We may collect information associated with your account
          and profiles, such as profile name, profile icon,
          ratings, feedback, My List, Continue Watching,
          account settings, and profile preferences.
        </p>

        {/* USAGE */}
        <h3>Usage information</h3>

        <p>
          We may collect information about how you interact with
          the service, including playback events such as play and
          pause, viewing history, search queries, page views,
          clicks, and the duration of your access.
        </p>

        {/* ADVERTISING */}
        <h3>Advertising information</h3>

        <p>
          Depending on the service and applicable choices, we may
          collect information related to advertisements you view
          or interact with, device identifiers, IP addresses, and
          information used to understand advertising preferences.
        </p>

        {/* DEVICE */}
        <h3>Device and network information</h3>

        <p>
          We may collect information about the computer, smart TV,
          mobile device, gaming system, streaming device, network,
          and other devices used to access the service.
        </p>

        <ul>
          <li>Device identifiers</li>
          <li>IP address</li>
          <li>Device type and configuration</li>
          <li>Browser and application information</li>
          <li>Network and connection information</li>
          <li>Performance and crash information</li>
          <li>Cookie and similar technology information</li>
        </ul>

        {/* COMMUNICATION */}
        <h3>Communications</h3>

        <p>
          If you communicate with customer support or participate
          in surveys and feedback requests, we may collect
          information contained in those communications.
        </p>

        {/* SOURCES */}
        <h2>
          Where We Collect Personal Information From
        </h2>

        <h3>Directly from you</h3>

        <p>
          We may collect information when you register, update
          your account or profile, make purchases, communicate
          with us, or respond to surveys.
        </p>

        <h3>Automatically when you use our service</h3>

        <p>
          We may automatically collect account, usage, device,
          network, purchase, and communication information when
          you use the service.
        </p>

        <h3>From Partners</h3>

        <p>
          We may receive certain information from partners whose
          products or services you use to access, pay for, or
          interact with the service.
        </p>

        <h3>From other sources</h3>

        <p>
          Information may also be received from service providers,
          marketing providers, public sources, and other
          organizations where permitted by applicable law.
        </p>

        {/* USE */}
        <h2>How We Use Your Personal Information</h2>

        <p>
          We use personal information to provide, maintain,
          improve, and promote the service and to communicate
          with you.
        </p>

        <div className="privacy-list">

          <div>
            <h3>Provide our service</h3>
            <p>
              To provide the service and personalize content,
              recommendations, features, and functionality.
            </p>
          </div>

          <div>
            <h3>Operate our business</h3>
            <p>
              To process payments, send account communications,
              respond to requests, and assist with account issues.
            </p>
          </div>

          <div>
            <h3>Improve our services</h3>
            <p>
              To research and understand how users interact with
              the service and improve our products and features.
            </p>
          </div>

          <div>
            <h3>Partner integrations</h3>
            <p>
              To enable integrations and promotions with partners
              where applicable.
            </p>
          </div>

          <div>
            <h3>Marketing communications</h3>
            <p>
              To send information about services, features,
              content, offers, and other communications where
              permitted.
            </p>
          </div>

          <div>
            <h3>Safety and security</h3>
            <p>
              To protect users, prevent fraud, secure systems,
              and detect prohibited or illegal activity.
            </p>
          </div>

          <div>
            <h3>Legal compliance</h3>
            <p>
              To comply with applicable laws, regulations, legal
              processes, and governmental requests.
            </p>
          </div>

        </div>

        {/* DISCLOSURE */}
        <h2>
          Who We Disclose Personal Information To
        </h2>

        <h3>Service providers</h3>

        <p>
          We may use service providers to assist with
          communications, security, infrastructure, IT services,
          personalization, and payment processing.
        </p>

        <h3>Partners</h3>

        <p>
          Where applicable, certain information may be shared
          with partners in accordance with applicable law and
          the relationship you have with them.
        </p>

        <h3>Marketing providers</h3>

        <p>
          Marketing providers may receive limited information
          needed to measure and improve marketing campaigns.
        </p>

        <h3>Advertising companies</h3>

        <p>
          Certain information may be disclosed to advertising
          companies to support, deliver, measure, and improve
          advertisements where applicable.
        </p>

        {/* PRIVACY CHOICES */}
        <h2>Privacy Choices</h2>

        <p>
          You may have rights and choices regarding your personal
          information depending on applicable laws. These may
          include accessing, correcting, deleting, or managing
          certain information associated with your account.
        </p>

        {/* SECURITY */}
        <h2>Security</h2>

        <p>
          We use reasonable technical and organizational measures
          designed to protect personal information from
          unauthorized access, loss, misuse, or alteration.
        </p>

        {/* CHANGES */}
        <h2>Changes to This Privacy Statement</h2>

        <p>
          We may update this Privacy Statement from time to time.
          When changes are made, the updated version will be
          published through the appropriate service or website.
        </p>

      </article>

      {/* FOOTER */}
      <footer className="privacy-footer">

        <div className="privacy-footer-logo">
          NETFLIX
        </div>

        <div className="privacy-footer-links">

          <button onClick={() => router.push("/help")}>
            Help Center
          </button>

          <button onClick={() => router.push("/terms")}>
            Terms of Use
          </button>

          <button onClick={() => router.push("/privacy")}>
            Privacy
          </button>

          <button>
            Cookie Preferences
          </button>

          <button>
            Corporate Information
          </button>

        </div>

        <p>
          © 2026 Netflix Clone — Privacy Demo
        </p>

      </footer>

    </main>
  );
}