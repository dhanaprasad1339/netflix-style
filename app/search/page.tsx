"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { tmdb } from "../../lib/tmdb";
import MovieCard from "../../components/MovieCard";

type Movie = {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
};

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const searchMovies = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!query.trim()) return;

    const res = await tmdb.get(
      `/search/multi?query=${query}`
    );

    setMovies(res.data.results);
  };
return (
  <main className="search-page">
    <h1 className="search-title">Search</h1>

    <form className="search-form" onSubmit={searchMovies}>
  <input
    className="search-input"
    type="text"
    placeholder="Search movies, TV shows..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
  />

  <button className="search-button" type="submit">
    🔍
  </button>
</form>

<div className="search-grid">
  {movies
    .filter((m) => m.poster_path)
    .map((movie) => (
      <MovieCard
        key={movie.id}
        movie={movie}
        type={movie.title ? "movie" : "tv"}
      />
    ))}
</div>    
  </main>
);
}