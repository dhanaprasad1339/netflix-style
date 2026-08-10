"use client";

import { useRouter } from "next/navigation";

export default function WaysToWatchPage() {
  const router = useRouter();

  const tvDevices = [
    "Amazon Fire TV/Stick",
    "Apple TV",
    "Chromecast",
    "Hisense",
    "LG",
    "Panasonic",
    "Philips",
    "Roku TV/Stick",
    "Samsung",
    "Sharp",
    "Sony",
    "TCL",
    "Vestel",
    "Vizio",
    "Toshiba or TVS REGZA TV",
  ];

  const mobileDevices = [
    "Android phone or tablet",
    "iPhone or iPad",
    "Amazon Fire tablet",
    "Windows tablet",
  ];

  const gamingDevices = [
    "Sony PlayStation consoles",
    "Microsoft Xbox consoles",
    "Apple Vision Pro",
    "Meta Quest headsets",
  ];

  return (
    <main className="ways-page">

      {/* Header */}
      <header className="ways-header">

        <h1
          className="ways-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </h1>

        <div className="ways-header-buttons">

          <button
            onClick={() => router.push("/help")}
          >
            Help
          </button>

          <button
            className="ways-signin"
            onClick={() => router.push("/login")}
          >
            Sign In
          </button>

        </div>

      </header>

      {/* Main Content */}
      <section className="ways-container">

        <h1>
          Netflix Supported Devices
        </h1>

        <p className="ways-subtitle">
          You can watch Netflix on your TV, phone,
          tablet, or computer.
        </p>

        <p>
          You can watch Netflix on any supported smart TV,
          phone, tablet, streaming player, or game console
          that connects to the internet and offers the
          Netflix app, or at netflix.com using a computer.
        </p>

        {/* TVs */}
        <section className="ways-section">

          <h2>
            TVs and TV streaming devices
          </h2>

          <p>
            Many TVs, TV streaming devices, and media players
            come with the Netflix app included. To get started,
            use the links below to learn how to get Netflix
            on your device.
          </p>

          <div className="device-grid">

            {tvDevices.map((device) => (
              <button key={device}>
                {device}
              </button>
            ))}

          </div>

          <div className="ways-note">
            <strong>Note:</strong> Netflix may no longer be
            available on some TVs and TV streaming devices
            made before 2015.
          </div>

          <p>
            Not seeing your device? Search for your device's
            name or manufacturer in our Help Center for more
            information. To learn more about device support,
            contact us or the company that made your device.
          </p>

        </section>

        {/* Mobile */}
        <section className="ways-section">

          <h2>
            Mobile phones and tablets
          </h2>

          <p>
            You can watch Netflix on any supported mobile
            phone or tablet. To get started, use the links
            below to see specific requirements and learn
            how to get the Netflix app on your device.
          </p>

          <div className="device-grid mobile-grid">

            {mobileDevices.map((device) => (
              <button key={device}>
                {device}
              </button>
            ))}

          </div>

        </section>

        {/* Computers */}
        <section className="ways-section">

          <h2>Computers</h2>

          <p>
            You can watch Netflix on Mac, Windows, or
            Chromebook computers. To get started, go to
            netflix.com using a supported web browser,
            or get the Netflix app for Windows.
          </p>

          <div className="computer-box">

            <div>
              <span></span>
              <strong>Mac</strong>
            </div>

            <div>
              <span>⊞</span>
              <strong>Windows</strong>
            </div>

            <div>
              <span>◉</span>
              <strong>Chromebook</strong>
            </div>

          </div>

          <div className="ways-note">
            <strong>Note:</strong> For issues getting started,
            make sure your computer and browser meet these
            system requirements.
          </div>

        </section>

        {/* Cable Boxes */}
        <section className="ways-section">

          <h2>Cable boxes</h2>

          <p>
            Many internet, cable, and pay TV providers include
            the Netflix app on their devices. To get started,
            search the name of your provider in our Help Center
            to check if Netflix is available on your device.
          </p>

          <p>
            To learn more about device support, contact us or
            the company that provided your device.
          </p>

          <button
            className="ways-help-button"
            onClick={() => router.push("/help")}
          >
            Visit Help Center
          </button>

        </section>

        {/* Gaming */}
        <section className="ways-section">

          <h2>
            Video game consoles and AR/VR devices
          </h2>

          <p>
            You can watch Netflix on these popular video game
            consoles and AR/VR devices. To get started, use
            the links below to learn how to get Netflix on
            your game console.
          </p>

          <div className="device-grid gaming-grid">

            {gamingDevices.map((device) => (
              <button key={device}>
                {device}
              </button>
            ))}

          </div>

        </section>

        {/* Helpful */}
        <section className="ways-helpful">

          <h3>Was this article helpful?</h3>

          <button>Yes</button>
          <button>No</button>

        </section>

        {/* Related */}
        <section className="ways-related">

          <h2>Related Articles</h2>

          <button>
            What is Netflix?
          </button>

          <button>
            Getting started with Netflix
          </button>

          <button>
            How to sign up for Netflix
          </button>

        </section>

        {/* Need Help */}
        <section className="ways-contact">

          <h2>Need more help?</h2>

          <button
            onClick={() => router.push("/help")}
          >
            Contact Us
          </button>

        </section>

      </section>

      {/* Footer */}
      <footer className="ways-footer">

        <button>English ▾</button>

        <div>
          <span>Terms of Use</span>
          <span>Privacy</span>
          <span>Cookie Preferences</span>
          <span>Corporate Information</span>
        </div>

      </footer>

    </main>
  );
}