"use client";

import { useRouter } from "next/navigation";

export default function LegalNotices() {
  const router = useRouter();

  return (
    <div className="legal-page">

      {/* HEADER */}
      <header className="legal-header">

        <div
          className="legal-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </div>

        <div className="legal-header-buttons">
          <button onClick={() => router.push("/login")}>
            Sign In
          </button>

          <button onClick={() => router.push("/help")}>
            Help Center
          </button>
        </div>

      </header>

      {/* MAIN CONTENT */}
      <main className="legal-container">

        <div className="back-help">
          <button onClick={() => router.push("/help")}>
            ← Back to Help Home
          </button>
        </div>

        <h1>Legal Notices</h1>

        <p>
          The Netflix service, including all content provided on the
          Netflix service, is protected by copyright, trademark, trade
          secret or other intellectual property laws and treaties.
        </p>

        {/* COPYRIGHTS */}
        <section>
          <h2>Copyrights</h2>

          <p>
            The copyrights in the content on our service are owned by
            many great producers and production companies, including
            Netflix.
          </p>

          <p>
            If you believe your or someone else’s copyrights are being
            infringed upon through the Netflix service, let us know by
            completing the Copyright Infringement Claims form.
          </p>

          <button
            className="legal-link"
            onClick={() => {
              window.location.href = "/copyrights";
            }}
          >
            Copyright Infringement Claims
          </button>
        </section>

        {/* TRADEMARKS */}
        <section>
          <h2>Trademarks</h2>

          <p>
            Netflix, the N Logo and its sonic Tudum ident are trademarks
            of Netflix, Inc.
          </p>

          <p>
            Unless you have our permission, do not use the Netflix marks
            as your own or in any manner that implies sponsorship or
            endorsement by Netflix.
          </p>

          <p>
            A product branded with the Netflix name or logo is a
            reflection of Netflix. Unless you are one of our licensees,
            we don’t allow others to make, sell, or give away anything
            with our name or logo on it.
          </p>
        </section>

        {/* PATENTS */}
        <section>
          <h2>Patents</h2>

          <p>
            Netflix applications and services are covered by patents.
            For information on patents related to our services please
            visit our patents information page.
          </p>

          <button
            className="legal-link"
            onClick={() => {
              window.location.href = "/patents";
            }}
          >
            Netflix Patents
          </button>
        </section>

        {/* THIRD PARTY */}
        <section>
          <h2>Third Party Notices</h2>

          <p>
            Netflix applications, software development kits (SDKs) and
            other Netflix products may contain software available under
            open source or free software licenses (“Open Source
            Software”).
          </p>

          <p>
            The Netflix Terms of Use do not alter any rights or
            obligations you may have under those Open Source Software
            licenses.
          </p>

          <p>
            Additional information about Open Source Software,
            including required acknowledgements, license terms and
            notices, can be found below.
          </p>
        </section>

        {/* NOTICES */}
        <section>
          <h2>Notices</h2>

          <p>
            Additional notices and acknowledgements related to software
            used by the service may be provided here.
          </p>
        </section>

        <div className="last-updated">
          <strong>Last Updated:</strong> September 25, 2023
        </div>

      </main>

      {/* FOOTER */}
      <footer className="legal-footer">

        <div className="legal-language">
          <select defaultValue="English">
            <option>English</option>
            <option>हिन्दी</option>
            <option>తెలుగు</option>
          </select>
        </div>

        <div className="legal-footer-links">

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

    </div>
  );
}