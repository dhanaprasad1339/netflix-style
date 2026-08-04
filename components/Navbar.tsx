"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import SearchBar from "./SearchBar";

type Movie = {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  vote_average?: number;
};

type Props = {
  onMovieSelect: (movie: Movie) => void;
};

export default function Navbar({
  onMovieSelect,
}: Props) {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/browse" className="logo">
          NETFLIX
        </Link>

        <div className="nav-links">
          <Link href="/browse">
            Home
          </Link>

          <Link href="/browse">
            TV Shows
          </Link>

          <Link href="/browse">
            Movies
          </Link>

          <Link href="/my-list">
            My List
          </Link>
        </div>
      </div>

      <div className="navbar-right">
        <SearchBar
          onMovieSelect={onMovieSelect}
        />

        <div className="profile">
          <div className="profile-avatar">
            👤
          </div>

          <div className="profile-menu">
            <p>My Profile</p>

            <Link href="/my-list">
              My List
            </Link>

            <button onClick={handleLogout}>
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}