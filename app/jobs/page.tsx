"use client";

import { useRouter } from "next/navigation";

export default function JobsPage() {
  const router = useRouter();

  return (
    <main className="jobs-page">

      {/* Header */}
      <header className="jobs-header">

        <h1
          className="jobs-logo"
          onClick={() => router.push("/")}
        >
          NETFLIX
        </h1>

        <nav className="jobs-nav">
          <button>Teams</button>
          <button>Locations</button>
          <button>Job Search</button>

          <button
            className="jobs-signin"
            onClick={() => router.push("/login")}
          >
            Sign In
          </button>
        </nav>

      </header>

      {/* Hero */}
      <section className="jobs-hero">

        <div className="jobs-hero-content">

          <p className="jobs-small-title">
            NETFLIX JOBS
          </p>

          <h1>
            Join our
            <br />
            star-studded
            <br />
            ensemble.
          </h1>

          <p>
            We’re looking for talented people who are
            passionate about entertainment, technology,
            and creating amazing experiences for our
            members around the world.
          </p>

          <button
            className="jobs-search-btn"
            onClick={() =>
              document
                .getElementById("open-jobs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Search Jobs
          </button>

        </div>

      </section>

      {/* About Jobs */}
      <section className="jobs-about">

        <div>
          <p className="jobs-label">
            WORK WITH US
          </p>

          <h2>
            Great stories start
            with great people.
          </h2>
        </div>

        <p>
          At Netflix, we strive to entertain the world.
          We believe our culture helps us attract and
          retain the best people in the industry.
        </p>

      </section>

      {/* Teams */}
      <section className="jobs-teams">

        <h2>Explore Teams</h2>

        <div className="teams-grid">

          <div className="team-card">
            <h3>Engineering</h3>
            <p>
              Build technology that powers the
              Netflix experience.
            </p>
            <button>Explore →</button>
          </div>

          <div className="team-card">
            <h3>Product</h3>
            <p>
              Create experiences that millions
              of members love.
            </p>
            <button>Explore →</button>
          </div>

          <div className="team-card">
            <h3>Content</h3>
            <p>
              Help bring incredible stories and
              entertainment to our members.
            </p>
            <button>Explore →</button>
          </div>

          <div className="team-card">
            <h3>Marketing</h3>
            <p>
              Connect our stories with audiences
              around the world.
            </p>
            <button>Explore →</button>
          </div>

          <div className="team-card">
            <h3>Design</h3>
            <p>
              Design beautiful experiences for
              Netflix members.
            </p>
            <button>Explore →</button>
          </div>

          <div className="team-card">
            <h3>Finance</h3>
            <p>
              Help shape the future of global
              entertainment.
            </p>
            <button>Explore →</button>
          </div>

        </div>

      </section>

      {/* Job Search */}
      <section
        id="open-jobs"
        className="open-jobs"
      >

        <p className="jobs-label">
          FIND YOUR ROLE
        </p>

        <h2>
          Find your next role.
        </h2>

        <div className="job-search-box">

          <input
            type="text"
            placeholder="Search jobs by title or keyword"
          />

          <select defaultValue="">
            <option value="" disabled>
              Location
            </option>
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Canada</option>
          </select>

          <button>
            Search
          </button>

        </div>

      </section>

      {/* Culture */}
      <section className="jobs-culture">

        <div>
          <p className="jobs-label">
            OUR CULTURE
          </p>

          <h2>
            Freedom and
            responsibility.
          </h2>

          <p>
            We trust our people to make decisions,
            take ownership, and do their best work.
            Our culture encourages curiosity,
            creativity, and collaboration.
          </p>
        </div>

        <div className="culture-box">
          <span>NETFLIX</span>
          <strong>
            Culture
          </strong>
        </div>

      </section>

      {/* Footer */}
      <footer className="jobs-footer">

        <h2>Netflix Jobs</h2>

        <div className="jobs-footer-links">
          <span>Privacy</span>
          <span>Terms of Use</span>
          <span>Help Center</span>
          <span>Netflix.com</span>
        </div>

        <p>
          © 2026 Netflix Clone — Jobs Demo
        </p>

      </footer>

    </main>
  );
}