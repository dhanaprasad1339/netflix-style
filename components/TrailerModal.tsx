"use client";

import { useEffect, useState } from "react";


type TrailerModalProps = {
  movieId: number;
  title: string;
  type: "movie" | "tv"
  onClose: () => void;
};

export default function TrailerModal({
  movieId,
  title,
  type,
  onClose,
}: TrailerModalProps) {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrailer = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

        const response = await fetch(
          `https://api.themoviedb.org/3/${type}/${movieId}/videos?api_key=${apiKey}&language=en-US`
        );

        const data = await response.json();
        console.log("Type:", type);
        console.log("movieId:", movieId);
        console.log(data);
        console.log("Results:", data.results);
        

        console.log("API URL:", `https://api.themoviedb.org/3/${type}/${movieId}/videos?api_key=${apiKey}`);

        const videos = data.results || [];

        const trailer =
          videos.find(
            (video: any) =>
              video.site === "YouTube" &&
              video.type === "Trailer" &&
              video.official === true
          ) ||
          videos.find(
            (video: any) =>
              video.site === "YouTube" && video.type === "Trailer"
          ) ||
          videos.find(
            (video: any) =>
              video.site === "YouTube" && video.type === "Teaser"
          );
        console.log("Trailer:", trailer);

        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error("Trailer error:", error);
      } finally {
        setLoading(false);
      }
    };

    getTrailer();
  }, [movieId, type]);

  return (
    <div className="trailer-overlay" onClick={onClose}>
      <div
        className="trailer-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="trailer-close" onClick={onClose}>
          ✕
        </button>

        <h2>{title} - Trailer</h2>

        {loading && (
          <div className="trailer-loading">
            Loading trailer...
          </div>
        )}

        {!loading && trailerKey && (
          <div className="trailer-video">
            <iframe
      src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0`}
      title={`${title} Trailer`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>
)}

        {!loading && !trailerKey && (
          <div className="trailer-loading">
            Trailer not available for this movie.
          </div>
        )}
      </div>
    </div>
  );
}