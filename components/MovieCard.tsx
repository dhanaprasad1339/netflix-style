"use client";

import { useState } from "react";
import TrailerModal from "./TrailerModal";

import {
  doc,
  setDoc,
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

  vote_average?: number | string;

  first_air_date?: string;
  release_date?: string;

  // Cloudflare R2 video URL
  videoUrl?: string;
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

  // =========================
  // TITLE
  // =========================

  const title =
    movie.title ||
    movie.name ||
    "Movie";

  // =========================
  // POSTER
  // =========================
  // IMPORTANT:
  // poster_path now contains the
  // Firestore posterUrl directly.
  //
  // NO TMDB URL here.

  const poster =
    movie.poster_path ||
    "/placeholder.jpg";

  // =========================
  // RATING
  // =========================

  const rating =
    movie.vote_average !== undefined
    movie.vote_average !== null &&
    !isNaN(Number(movie.vote_average))
      ?
      Number(movie.vote_average).toFixed(1)
      : "N/A";

  // =========================
  // YEAR
  // =========================

  const date =
    movie.release_date ||
    movie.first_air_date;

  const year = date
    ? new Date(date).getFullYear()
    : "2026";

  // =========================
  // PLAY
  // =========================

  const openTrailer = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (!movie.videoUrl) {
      alert(
        "Video URL not found in Firestore."
      );
      return;
    }

    setShowTrailer(true);
  };

  // =========================
  // MY LIST
  // =========================

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

    const userRef = doc(
      db,
      "users",
      user.uid
    );

    try {
      if (addedToList) {
        await setDoc(
          userRef,
          {
            myList: arrayRemove(movie),
          },
          {
            merge: true,
          }
        );
      } else {
        await setDoc(
          userRef,
          {
            myList: arrayUnion(movie),
          },
          {
            merge: true,
          }
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
      {/* =========================
          MOVIE CARD
      ========================= */}

      <div className="movie-card">

        {/* POSTER */}

        <img
          src={poster}
          alt={title}
          className="movie-card-image"
          onError={(e) => {
            e.currentTarget.src =
              "/placeholder.jpg";
          }}
        />

        {/* HOVER CONTENT */}

        <div className="movie-card-overlay">

          <h3 className="movie-card-title">
            {title}
          </h3>

          <div className="movie-card-info">

            <span className="movie-rating">
              ⭐9 {rating}
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
                addedToList
                  ? "added"
                  : ""
              }`}
              onClick={toggleMyList}
            >
              {addedToList
                ? "✓"
                : "+"}
            </button>

          </div>

        </div>
      </div>

      {/* =========================
          VIDEO / TRAILER MODAL
      ========================= */}

      {showTrailer && (
        <>
          {movie.videoUrl ? (

            <div
              className="video-modal-overlay"
              onClick={() =>
                setShowTrailer(false)
              }
            >

              <div
                className="video-modal-box"
                onClick={(e) =>
                  e.stopPropagation()
                }
              >

                {/* CLOSE */}

                <button
                  className="video-close-button"
                  onClick={() =>
                    setShowTrailer(false)
                  }
                >
                  ✕
                </button>

                {/* R2 VIDEO */}

                <video
                  src={movie.videoUrl}
                  controls
                  autoPlay
                  className="r2-video-player"
                />

              </div>
            </div>

          ) : (

            <TrailerModal
              movieId={movie.id}
              title={title}
              type={type}
              onClose={() =>
                setShowTrailer(false)
              }
            />

          )}
        </>
      )}
    </>
  );
}