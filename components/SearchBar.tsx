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
      return;
    }

    try {
      setLoading(true);

      const response = await tmdb.get("/search/multi", {
        params: {
          query: value,
          page: 1,
          include_adult: false,
        },
      });

      const filtered = response.data.results.filter(
        (movie: Movie) =>
          movie.poster_path &&
          (movie.title || movie.name)
      );

      setResults(filtered);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-wrapper">
      <div className="search-input-wrapper">
        <span>🔍</span>

        <input
          type="text"
          value={query}
          placeholder="Search movies, shows..."
          onChange={(e) =>
            searchMovies(e.target.value)
          }
        />
      </div>

      {query && (
        <div className="search-results">
          {loading && (
            <p className="search-message">
              Searching...
            </p>
          )}

          {!loading && results.length === 0 && (
            <p className="search-message">
              No movies found.
            </p>
          )}

          {results.map((movie) => (
            <button
              key={movie.id}
              className="search-result"
              onClick={() => {
                onMovieSelect(movie);
                setQuery("");
                setResults([]);
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                alt={movie.title || movie.name}
              />

              <div>
                <strong>
                  {movie.title || movie.name}
                </strong>

                <small>
                  ⭐{" "}
                  {movie.vote_average?.toFixed(1)}
                </small>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}