"use client";

import { useState } from "react";
import {
  arrayUnion,
  doc,
  updateDoc,
} from "firebase/firestore";

import { auth, db } from "../lib/firebase";
import TrailerModal from "./TrailerModal";

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
  movie: Movie;
};

export default function MovieCard({
  movie,
}: Props) {
  const [showTrailer, setShowTrailer] =
    useState(false);

  const addToMyList = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please login first.");
      return;
    }

    try {
      const userRef = doc(db, "users", user.uid);

      await updateDoc(userRef, {
        myList: arrayUnion({
          id: movie.id,
          title: movie.title || movie.name || "",
          poster_path: movie.poster_path || "",
          backdrop_path: movie.backdrop_path || "",
          overview: movie.overview || "",
          vote_average: movie.vote_average || 0,
        }),
      });

      alert("Added to My List ❤️");
    } catch (error) {
      console.error("My List error:", error);
    }
  };

  return (
    <>
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || movie.name || "Movie"}
        />

        <div className="movie-overlay">
          <h3>
            {movie.title || movie.name}
          </h3>

          <div className="movie-actions">
            <button
              onClick={() => setShowTrailer(true)}
              title="Play Trailer"
            >
              ▶
            </button>

            <button
              onClick={addToMyList}
              title="Add to My List"
            >
              +
            </button>

            <button title="Like">
              👍
            </button>
          </div>

          <div className="movie-rating">
            ⭐{" "}
            {movie.vote_average?.toFixed(1)}
          </div>
        </div>
      </div>

      <TrailerModal
        movie={showTrailer ? movie : null}
        onClose={() => setShowTrailer(false)}
      />
    </>
  );
}