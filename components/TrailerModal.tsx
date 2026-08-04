"use client";

import { useEffect, useState } from "react";
import { tmdb } from "../lib/tmdb";

type Movie = {
  id: number;
  title?: string;
  name?: string;
  backdrop_path?: string;
};

type Props = {
  movie: Movie | null;
  onClose: () => void;
};

export default function TrailerModal({
  movie,
  onClose,
}: Props) {
  const [videoKey, setVideoKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movie) return;

    const getTrailer = async () => {
      try {
        setLoading(true);
        setVideoKey(null);

        const response = await tmdb.get(
          `/movie/${movie.id}/videos`
        );

        const videos = response.data.results || [];

        const trailer =
          videos.find(
            (video: any) =>
              video.site === "YouTube" &&
              video.type === "Trailer" &&
              video.official === true
          ) ||
          videos.find(
            (video: any) =>
              video.site === "YouTube" &&
              video.type === "Trailer"
          ) ||
          videos.find(
            (video: any) =>
              video.site === "YouTube"
          );

        if (trailer) {
          setVideoKey(trailer.key);
        }
      } catch (error) {
        console.error("Trailer error:", error);
      } finally {
        setLoading(false);
      }
    };

    getTrailer();
  }, [movie]);

  if (!movie) return null;

  return (
    <div className="trailer-backdrop" onClick={onClose}>
      <div
        className="trailer-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="trailer-close"
          onClick={onClose}
        >
          ✕
        </button>

        {loading && (
          <div className="trailer-loading">
            Loading trailer...
          </div>
        )}

        {!loading && videoKey && (
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
            title={`${movie.title || movie.name} Trailer`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}

        {!loading && !videoKey && (
          <div className="trailer-loading">
            Trailer not available.
          </div>
        )}
      </div>
    </div>
  );
}