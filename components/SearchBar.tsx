"use client";

import { useState } from "react";
import { tmdb } from "../lib/tmdb";

type Movie = {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  vote_average?: number;
  media_type?: "movie" | "tv";
};

type Props = {
  onMovieSelect: (movie: Movie) => void;
};

export default function SearchBar({
  onMovieSelect,
}: Props) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (value: string) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const response = await tmdb.get("/search/multi", {
        params: {
          query: value.trim(),
          page: 1,
          include_adult: false,
        },
      });

      const filtered = response.data.results
        .filter(
          (movie: Movie) =>
            movie.poster_path &&
            (movie.title || movie.name) &&
            (movie.media_type === "movie" ||
              movie.media_type === "tv")
        )
        .slice(0, 8);

      setResults(filtered);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (movie: Movie) => {
    onMovieSelect(movie);

    setQuery("");
    setResults([]);
  };

  return (
    <div className="search-wrapper">

      {/* SEARCH INPUT */}
      <div className="search-input-wrapper">
        <span
          className="search-icon"
          aria-hidden="true"
        >
          🔍
        </span>

        <input
          type="text"
          value={query}
          placeholder="Search movies, shows..."
          onChange={(e) =>
            searchMovies(e.target.value)
          }
          aria-label="Search movies and shows"
        />

        {query && (
          <button
            type="button"
            className="search-clear"
            onClick={() => {
              setQuery("");
              setResults([]);
            }}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {/* SEARCH DROPDOWN */}
      {query && (
        <div className="navbar-search-results">

          {/* LOADING */}
          {loading && (
            <p className="search-message">
              Searching...
            </p>
          )}

          {/* NO RESULTS */}
          {!loading && results.length === 0 && (
            <p className="search-message">
              No movies or shows found.
            </p>
          )}

          {/* RESULTS */}
          {!loading &&
            results.map((movie) => (
              <button
                key={`${movie.media_type}-${movie.id}`}
                type="button"
                className="search-result"
                onClick={() => handleSelect(movie)}
              >

                <img
                  src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                  alt={movie.title || movie.name}
                />

                <div className="search-result-info">

                  <strong>
                    {movie.title || movie.name}
                  </strong>

                  <div className="search-result-meta">
                    <span>
                      {movie.media_type === "tv"
                        ? "TV Show"
                        : "Movie"}
                    </span>

                    <span>
                      ⭐{" "}
                      {typeof movie.vote_average ===
                      "number"
                        ? movie.vote_average.toFixed(1)
                        : "N/A"}
                    </span>
                  </div>

                </div>

              </button>
            ))}

        </div>
      )}

    </div>
  );
}