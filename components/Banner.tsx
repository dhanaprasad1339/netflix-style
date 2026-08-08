"use client";

import { useEffect, useState } from "react";
import { tmdb } from "../lib/tmdb";
import TrailerModal from "./TrailerModal";

type Movie = {
  id: number;
  title?: string;
  name?: string;
  overview?: string;
  backdrop_path?: string;
  vote_average?: number;
  media_type?: string;
};

export default function Banner() {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [playTrailer, setPlayTrailer] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await tmdb.get("/trending/all/week");

        const movies = response.data.results.filter(
          (item: Movie) => item.backdrop_path
        );

        if (movies.length > 0) {
          const randomMovie =
            movies[Math.floor(Math.random() * movies.length)];

          setMovie(randomMovie);
        }
      } catch (error) {
        console.error("Banner error:", error);
      }
    };

    fetchMovie();
  }, []);

  if (!movie) {
    return <div className="banner banner-loading" />;
  }

  const title = movie.title || movie.name;

  const background = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

  return (
    <section
      className="banner"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            rgba(0,0,0,0.95) 0%,
            rgba(0,0,0,0.55) 45%,
            rgba(0,0,0,0.1) 100%
          ),
          linear-gradient(
            to top,
            #111 0%,
            transparent 30%
          ),
          url(${background})
        `,
      }}
    >
      <div className="banner-content">
        <h1>{title}</h1>

        <div className="banner-info">
          <span>⭐ {movie.vote_average?.toFixed(1)}</span>
          <span>HD</span>
          <span>2026</span>
        </div>

        <p>
          {movie.overview ||
            "Watch the latest movies and TV shows on Netflix Clone."}
        </p>

        <div className="banner-buttons">
          <button className="play-button"
            onClick={() => setPlayTrailer(true)}
          >
            ▶ Play
          </button>

          <button className="info-button">
            ⓘ More Info
          </button>
        </div>
      </div>
      {playTrailer && movie && (
  <TrailerModal
    movieId={movie.id}
    title={title || ""}
     type = {movie.media_type === "tv" ? "tv" : "movie"}
    onClose={() => 
      setPlayTrailer(false)}
  />
)}
    </section>
  );
}