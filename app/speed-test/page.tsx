"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SpeedTest() {
  const router = useRouter();

  const [speed, setSpeed] = useState<number | null>(null);
  const [testing, setTesting] = useState(false);
  const [progress, setProgress] = useState(0);

  const runSpeedTest = async () => {
    setTesting(true);
    setSpeed(null);
    setProgress(0);

    const startTime = performance.now();

    try {
      // Public test file
      const url =
        "https://speed.cloudflare.com/__down?bytes=5000000";

      const response = await fetch(
        `${url}&cacheBust=${Date.now()}`,
        {
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error("Speed test failed");
      }

      const reader = response.body?.getReader();

      if (!reader) {
        throw new Error("Streaming not supported");
      }

      let totalBytes = 0;

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        totalBytes += value.length;

        const currentProgress = Math.min(
          Math.round((totalBytes / 5000000) * 100),
          100
        );

        setProgress(currentProgress);
      }

      const endTime = performance.now();

      const seconds = (endTime - startTime) / 1000;

      const megabits =
        (totalBytes * 8) / seconds / 1000000;

      setSpeed(Number(megabits.toFixed(2)));
    } catch (error) {
      console.error(error);
      alert("Speed test failed. Please try again.");
    }

    setTesting(false);
  };

  return (
    <main className="speed-test-page">

      {/* HEADER */}

      <header className="speed-header">

        <div
          className="speed-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </div>

        <div className="speed-header-links">

          <button onClick={() => router.push("/login")}>
            Sign In
          </button>

          <button onClick={() => router.push("/help")}>
            Help Center
          </button>

        </div>

      </header>

      {/* MAIN */}

      <section className="speed-container">

        <h1>Internet Speed Test</h1>

        <p className="speed-description">
          Check your internet connection speed to see if
          your connection is fast enough to watch movies
          and TV shows.
        </p>

        <div className="speed-card">

          {!testing && speed === null && (
            <>
              <div className="speed-circle">
                <span>Mbps</span>
              </div>

              <p className="speed-status">
                Ready to test your internet speed
              </p>

              <button
                className="start-speed-test"
                onClick={runSpeedTest}
              >
                Start Test
              </button>
            </>
          )}

          {testing && (
            <>
              <div className="speed-circle testing-circle">
                <strong>{progress}%</strong>
                <span>Testing</span>
              </div>

              <p className="speed-status">
                Measuring your internet speed...
              </p>

              <div className="speed-progress">
                <div
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </>
          )}

          {!testing && speed !== null && (
            <>
              <div className="speed-circle result-circle">
                <strong>{speed}</strong>
                <span>Mbps</span>
              </div>

              <p className="speed-status">
                Your internet speed
              </p>

              <div className="speed-result">

                {speed >= 15 ? (
                  <>
                    <h2>Good connection</h2>
                    <p>
                      Your connection should be suitable
                      for Ultra HD streaming.
                    </p>
                  </>
                ) : speed >= 5 ? (
                  <>
                    <h2>Good connection</h2>
                    <p>
                      Your connection should be suitable
                      for HD streaming.
                    </p>
                  </>
                ) : (
                  <>
                    <h2>Slow connection</h2>
                    <p>
                      Your connection may have difficulty
                      streaming high-quality video.
                    </p>
                  </>
                )}

              </div>

              <button
                className="start-speed-test"
                onClick={runSpeedTest}
              >
                Test Again
              </button>
            </>
          )}

        </div>

        {/* NETFLIX STYLE INFO */}

        <div className="speed-info">

          <h2>What does my speed mean?</h2>

          <div className="speed-levels">

            <div>
              <strong>3 Mbps</strong>
              <span>HD streaming</span>
            </div>

            <div>
              <strong>5 Mbps</strong>
              <span>Full HD streaming</span>
            </div>

            <div>
              <strong>15 Mbps</strong>
              <span>Ultra HD / 4K streaming</span>
            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="speed-footer">

        <div className="speed-language">
          <select defaultValue="English">
            <option>English</option>
            <option>हिन्दी</option>
            <option>తెలుగు</option>
          </select>
        </div>

        <div className="speed-footer-links">

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

          <button onClick={() => router.push("/contact")}>
            Contact Us
          </button>

        </div>

      </footer>

    </main>
  );
}