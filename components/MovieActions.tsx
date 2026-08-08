"use client";

import { useState, useEffect } from "react";

type Props = {
  movieId: number;
  title: string;
};

export default function MovieActions({
  movieId,
  title,
}: Props) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [inList, setInList] = useState(false);

  useEffect(() => {
    const existingList = JSON.parse(
      localStorage.getItem("myList") || "[]"
    );

    const exists = existingList.some(
      (movie: { id: number }) => movie.id === movieId
    );

    setInList(exists);
  }, [movieId]);

  const handlePlay = async () => {
    try {
      console.log("Playing movie:", movieId);

      const response = await fetch(
        `/api/movie/${movieId}/trailer`
      );

      console.log("Response status:", response.status);

      const data = await response.json();

      console.log("Trailer data:", data);

      if (!response.ok) {
        alert(data.error || "Failed to load trailer");
        return;
      }

      if (!data.key) {
        alert("Trailer not available");
        return;
      }

      setTrailerKey(data.key);
      setShowTrailer(true);

    } catch (error) {
      console.error("Trailer error:", error);
      alert("Failed to load trailer");
    }
  };

  const handleMyList = () => {
    const existingList = JSON.parse(
      localStorage.getItem("myList") || "[]"
    );

    const alreadyExists = existingList.some(
      (movie: { id: number }) => movie.id === movieId
    );

    if (alreadyExists) {
      alert(`${title} is already in My List`);
      setInList(true);
      return;
    }

    const movie = {
      id: movieId,
      title,
    };

    localStorage.setItem(
      "myList",
      JSON.stringify([...existingList, movie])
    );

    setInList(true);

    alert(`${title} added to My List`);
  };

  return (
    <>
      <div className="movie-buttons">

        <button
          className="play-button"
          onClick={handlePlay}
        >
          ▶ Play
        </button>

        <button
          className="list-button"
          onClick={handleMyList}
        >
          {inList ? "✓ My List" : "+ My List"}
        </button>

      </div>

      {showTrailer && trailerKey && (
        <div className="trailer-overlay">

          <div className="trailer-modal">

            <button
              className="trailer-close"
              onClick={() => {
                setShowTrailer(false);
                setTrailerKey(null);
              }}
            >
              ✕
            </button>

            <div className="trailer-video">
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                title={`${title} Trailer`}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>

          </div>

        </div>
      )}
    </>
  );
}