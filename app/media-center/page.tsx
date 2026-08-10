"use client";

import { useRouter } from "next/navigation";

const releases = [
  { date: "August 3, 2026", title: "Only on Netflix" },
  { date: "August 4, 2026", title: "Badly in Love" },
  { date: "August 5, 2026", title: "New Netflix Release" },
  { date: "August 5, 2026", title: "New Netflix Release" },
  { date: "August 5, 2026", title: "New Netflix Release" },
  { date: "August 5, 2026", title: "New Netflix Release" },
  { date: "August 6, 2026", title: "New Netflix Release" },
  { date: "August 7, 2026", title: "New Netflix Release" },
  { date: "August 7, 2026", title: "New Netflix Release" },
  { date: "August 7, 2026", title: "New Netflix Release" },
  { date: "August 7, 2026", title: "New Netflix Release" },
  { date: "August 7, 2026", title: "New Netflix Release" },
  { date: "August 11, 2026", title: "New Netflix Release" },
  { date: "August 12, 2026", title: "New Netflix Release" },
  { date: "August 13, 2026", title: "New Netflix Release" },
  { date: "August 13, 2026", title: "New Netflix Release" },
  { date: "August 13, 2026", title: "New Netflix Release" },
  { date: "August 14, 2026", title: "New Netflix Release" },
  { date: "August 14, 2026", title: "New Netflix Release" },
  { date: "August 14, 2026", title: "New Netflix Release" },
];

export default function MediaCenterPage() {
  const router = useRouter();

  return (
    <main className="media-page">

      {/* Header */}
      <header className="media-header">

        <h1
          className="media-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </h1>

        <nav>
          <button onClick={() => router.push("/help")}>
            Help
          </button>

          <button onClick={() => router.push("/login")}>
            Sign In
          </button>
        </nav>

      </header>

      {/* Hero */}
      <section className="media-hero">

        <span>Media Center</span>

        <h1>
          Discover stories and experiences
          <br />
          to share with India.
        </h1>

        <div className="media-filter">

          <label>
            I'm interested in covering titles
            releasing in
          </label>

          <select defaultValue="August">
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>

        </div>

      </section>

      {/* Releases */}
      <section className="media-releases">

        <div className="month-title">
          <h2>August</h2>
        </div>

        <div className="release-grid">

          {releases.map((release, index) => (
            <article
              className="release-card"
              key={index}
            >

              <div className="release-date">
                {release.date}
              </div>

              <div className="release-poster">

                {index === 1 ? (
                  <>
                    <span>Netflix</span>
                    <strong>Badly in Love</strong>
                  </>
                ) : (
                  <>
                    <span>NETFLIX</span>
                    <strong>
                      {release.title}
                    </strong>
                  </>
                )}

              </div>

            </article>
          ))}

        </div>

      </section>

      {/* Latest News */}
      <section className="latest-news">

        <h2>Latest news</h2>

        <div className="news-grid">

          <article>
            <small>India, Global</small>
            <h3>
              'Operation Safed Sagar' Contributes
              Over US$24 Million To India's Economy
            </h3>
          </article>

          <article>
            <small>India, Global</small>
            <h3>
              Netflix Marks 10 Years in India,
              Deepens Partnership with Ministry
              of Tourism and Culture
            </h3>
          </article>

          <article>
            <small>South Korea, Global</small>
            <h3>
              Netflix Confirms Production of New
              Family Action Comedy Film
              ‘Two Cops and Five Kids’
            </h3>
          </article>

        </div>

      </section>

      {/* Company Assets */}
      <section className="media-assets">

        <h2>Looking for company assets?</h2>

        <p>
          Get more images and information about
          Netflix on our company site.
        </p>

        <button
          onClick={() =>
            window.open(
              "https://about.netflix.com/en/company-assets",
              "_blank"
            )
          }
        >
          Company Assets
        </button>

      </section>

      {/* Footer */}
      <footer className="media-footer">

        <div className="footer-column">

          <h3>Company</h3>

          <button
            onClick={() =>
              window.open(
                "https://about.netflix.com/en/",
                "_blank"
              )
            }
          >
            About Netflix
          </button>

          <button
            onClick={() =>
              window.open(
                "https://about.netflix.com/en/newsroom",
                "_blank"
              )
            }
          >
            Newsroom
          </button>

          <button
            onClick={() =>
              window.open(
                "https://about.netflix.com/en/company-assets",
                "_blank"
              )
            }
          >
            Company Assets
          </button>

          <button
            onClick={() =>
              window.open(
                "https://netflix.com/",
                "_blank"
              )
            }
          >
            Start watching
          </button>

        </div>

        <div className="footer-column">

          <h3>Connect</h3>

          <button
            onClick={() =>
              window.open(
                "https://media.netflix.com/en/contact-us",
                "_blank"
              )
            }
          >
            Contact Us
          </button>

        </div>

        <div className="footer-column">

          <h3>Legal</h3>

          <button>Terms and Conditions</button>
          <button>Privacy</button>
          <button>Cookie Preferences</button>

        </div>

      </footer>

    </main>
  );
}