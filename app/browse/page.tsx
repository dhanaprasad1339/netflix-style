"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";

import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import MovieRow from "../../components/MovieRow";
import TrailerModal from "../../components/TrailerModal";

type Movie = {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  vote_average?: number;
  
};

export default function BrowsePage() {
  const router = useRouter();

  const [selectedMovie, setSelectedMovie] =
    useState<Movie | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <main className="browse-page">
      <Navbar />

      <Banner />

      <div className="movie-section">
        <MovieRow title="My Movies"/>
      </div>

      {selectedMovie && (
        <TrailerModal
          movieId={selectedMovie.id}
          title={selectedMovie.title || selectedMovie.name || ""}
          type={selectedMovie.title ? "movie" : "tv"}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </main>
  );
}