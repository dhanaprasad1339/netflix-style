"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CookiePreferences() {
  const router = useRouter();

  const [essential, setEssential] = useState(true);
  const [firstParty, setFirstParty] = useState(true);
  const [thirdParty, setThirdParty] = useState(true);
  const [advertising, setAdvertising] = useState(false);

  const saveSettings = () => {
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify({
        essential,
        firstParty,
        thirdParty,
        advertising,
      })
    );

    alert("Cookie preferences saved successfully.");
  };

  return (
    <main className="cookie-page">

      {/* HEADER */}
      <header className="cookie-header">

        <div
          className="cookie-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </div>

        <div className="cookie-header-right">
          <button onClick={() => router.push("/")}>
            Home
          </button>

          <button onClick={() => router.push("/help")}>
            Help Centre
          </button>

          <button onClick={() => router.push("/login")}>
            Sign In
          </button>
        </div>

      </header>

      {/* CONTENT */}
      <section className="cookie-container">

        <div className="cookie-title">

          <div className="cookie-icon">
            🍪
          </div>

          <h1>Privacy Preference Center</h1>

        </div>

        <div className="cookie-card">

          <h2>General Description</h2>

          <p>
            This cookie tool will help you understand the use of
            cookies on the Netflix service, and how you can control
            the use of these cookies.
          </p>

          <p>
            Privacy settings in most browsers allow you to prevent
            your browser from accepting some or all cookies, notify
            you when it receives a new cookie, or disable cookies
            altogether.
          </p>

          <p>
            If your browser disables all cookies, then information
            will not be collected or stored via the cookies listed
            in this tool. This means that your use of the Netflix
            service may be impaired.
          </p>

          <p>
            Please note that when you use this cookie tool to opt
            out of certain cookies, your opt out preferences are
            recorded by placing a cookie on your device.
          </p>

          <p>
            Therefore, your browser must be configured to accept
            cookies in order for your preferences to take effect.
            If you delete or clear your cookies, or change your
            web browser, you will need to reset your cookie
            preferences.
          </p>

          <p>
            For more information on our use of cookies, please
            visit the Cookies and other Technologies section of
            our Privacy Statement.
          </p>

        </div>

        {/* COOKIE SETTINGS */}

        <div className="cookie-settings">

          <h2>Cookie Settings</h2>

          {/* ESSENTIAL */}

          <div className="cookie-option">

            <div className="cookie-option-text">
              <h3>Essential Cookies</h3>

              <p>
                These cookies are required for the website to
                function properly and cannot be switched off.
              </p>
            </div>

            <label className="switch">

              <input
                type="checkbox"
                checked={essential}
                disabled
                onChange={(e) =>
                  setEssential(e.target.checked)
                }
              />

              <span className="slider"></span>

            </label>

          </div>

          {/* FIRST PARTY */}

          <div className="cookie-option">

            <div className="cookie-option-text">
              <h3>
                First Party Performance and Functionality Cookies
              </h3>

              <p>
                These cookies help us understand how the service
                performs and improve features and functionality.
              </p>
            </div>

            <label className="switch">

              <input
                type="checkbox"
                checked={firstParty}
                onChange={(e) =>
                  setFirstParty(e.target.checked)
                }
              />

              <span className="slider"></span>

            </label>

          </div>

          {/* THIRD PARTY */}

          <div className="cookie-option">

            <div className="cookie-option-text">
              <h3>
                Third Party Performance and Functionality Cookies
              </h3>

              <p>
                These cookies may be used by third-party services
                to provide functionality and performance features.
              </p>
            </div>

            <label className="switch">

              <input
                type="checkbox"
                checked={thirdParty}
                onChange={(e) =>
                  setThirdParty(e.target.checked)
                }
              />

              <span className="slider"></span>

            </label>

          </div>

          {/* ADVERTISING */}

          <div className="cookie-option">

            <div className="cookie-option-text">

              <h3>Advertising Cookies</h3>

              <p>
                These cookies may be used to provide and measure
                advertising and promotional content.
              </p>

            </div>

            <label className="switch">

              <input
                type="checkbox"
                checked={advertising}
                onChange={(e) =>
                  setAdvertising(e.target.checked)
                }
              />

              <span className="slider"></span>

            </label>

          </div>

        </div>

        {/* SAVE */}

        <div className="cookie-save">

          <button onClick={saveSettings}>
            Save settings
          </button>

        </div>

        <div className="powered">
          Powered by <strong>Cookie Preferences</strong>
        </div>

      </section>

      {/* FOOTER */}

      <footer className="cookie-footer">

        <div className="cookie-footer-logo">
          NETFLIX
        </div>

        <div className="cookie-footer-links">

          <button onClick={() => router.push("/help")}>
            Help Centre
          </button>

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

          <button>
            Corporate Information
          </button>

        </div>

        <p>
          © 2026 Netflix Clone
        </p>

      </footer>

    </main>
  );
}