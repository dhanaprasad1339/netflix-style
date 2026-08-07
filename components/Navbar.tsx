"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      {/* LOGO */}
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

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <Link href="/search" className="search-icon">
          🔍
        </Link>

        <Link href="/profile" className="profile-icon">
          👤
        </Link>
      </div>
    </nav>
  );
}