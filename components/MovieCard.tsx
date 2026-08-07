"use client";

import { useState } from "react";
import TrailerModal from "./TrailerModal";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { auth, db } from "../lib/firebase";
type Movie = {
  id: number;

  title?: string;
  name?: string;

  poster_path?: string | null;
  backdrop_path?: string | null;

  overview?: string;

  vote_average?: number;

  first_air_date?: string;
  release_date?: string;
};

type Props = {
  movie: Movie;
  type?: "movie" | "tv";
};

export default function MovieCard({ 
  movie,
   type = "movie", 

}: Props) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [addedToList, setAddedToList] = useState(false);

  // Movie title OR TV show name
  const title = movie.title || movie.name || "Movie";

  // Poster
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.jpg";

  // Rating
  const rating =
    movie.vote_average !== undefined
      ? movie.vote_average.toFixed(1)
      : "N/A";

  // Year
  const date =
    movie.release_date || movie.first_air_date;

  const year = date
    ? new Date(date).getFullYear()
    : "2026";

  // Trailer
  const openTrailer = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    alert(`Movie ID: ${movie.id}, Type: ${type}`);

    setShowTrailer(true);
  };

  // My List
  const toggleMyList = async (
  e: React.MouseEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  e.stopPropagation();

  const user = auth.currentUser;

  if (!user) {
    alert("Please login first");
    return;
  }

  const userRef = doc(db, "users", user.uid);

  try {
    if (addedToList) {
      await setDoc(
        userRef,
        {
          myList: arrayRemove(movie),
        },
        { merge: true }
      );
    } else {
      await setDoc(
        userRef,
        {
          myList: arrayUnion(movie),
        },
        { merge: true }
      );
    }

    setAddedToList(!addedToList);
  } catch (error) {
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <>
      <div className="movie-card">

        {/* POSTER */}
        <img
          src={poster}
          alt={title}
          className="movie-card-image"
        />

        {/* HOVER CONTENT */}
        <div className="movie-card-overlay">

          <h3 className="movie-card-title">
            {title}
          </h3>

          <div className="movie-card-info">
            <span className="movie-rating">
              ⭐ {rating}
            </span>

            <span>HD</span>

            <span>{year}</span>
          </div>

          {/* BUTTONS */}
          <div className="movie-card-buttons">

            {/* PLAY */}
            <button
              type="button"
              className="movie-play-button"
              onClick={openTrailer}
            >
              ▶
            </button>

            {/* MY LIST */}
            <button
              type="button"
              className={`movie-list-button ${
                addedToList ? "added" : ""
              }`}
              onClick={toggleMyList}
            >
              {addedToList ? "✓" : "+"}
            </button>

          </div>

        </div>
      </div>

      {/* TRAILER MODAL */}
      {showTrailer && movie.id !== undefined && 
      (
        <TrailerModal
          movieId={movie.id}
          title={title}
          type={type}
          onClose={() => setShowTrailer(false)}
        />
      )}
    </>
  );
}