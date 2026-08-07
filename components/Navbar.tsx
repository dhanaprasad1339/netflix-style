"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
type Movie = {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  vote_average?: number;
};
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const handleLogout = async () => {
  try {
    await signOut(auth);
    router.push("/login");
  } catch (error) {
    console.error("Logout failed:", error);
  }
};

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
      <div className="navbar-right">
        <SearchBar
  onMovieSelect={(movie) => {
    setSelectedMovie(movie);
  }}
/>
      

      <button onClick={handleLogout} className="profile-icon">
  👤
</button>
      </div>
    </nav>
  );
}