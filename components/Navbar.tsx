"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="navbar-left">
        <Link href="/browse" className="netflix-logo">
          NETFLIX
        </Link>

        {/* NAV LINKS */}
        <div className="nav-links">

          <Link
            href="/browse"
            className={pathname === "/browse" ? "active" : ""}
          >
            Home
          </Link>

          <Link
            href="/tv-shows"
            className={pathname === "/tv-shows" ? "active" : ""}
          >
            TV Shows
          </Link>

          <Link
            href="/movies"
            className={pathname === "/movies" ? "active" : ""}
          >
            Movies
          </Link>

          <Link
            href="/my-list"
            className={pathname === "/my-list" ? "active" : ""}
          >
            My List
          </Link>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-right">

        <SearchBar
          onMovieSelect={(movie) => {
            router.push(`/movie/${movie.id}`);
          }}
        />

        {/* PROFILE */}
        <button
          onClick={() => router.push("/profile")}
          className="profile-icon"
          type="button"
          aria-label="Open profile"
        >
          👤
        </button>

      </div>

    </nav>
  );
}