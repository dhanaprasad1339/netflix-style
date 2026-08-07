"use client";

import { useEffect, useState } from "react";
import { tmdb } from "../lib/tmdb";
import MovieCard from "./MovieCard";

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
  title: string;
  endpoint: string;
};

export default function MovieRow({
  title,
  endpoint,
}: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const response = await tmdb.get(endpoint);

        setMovies(response.data.results || []);
      } catch (error) {
        console.error(`${title} error:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [endpoint, title]);

  

  return (
    <section className="movie-row">
      <h2>{title}</h2>

      <div className="movie-row-scroll">
        {loading
          ? [1, 2, 3, 4, 5, 6].map((item) => (
              <div
                className="movie-skeleton"
                key={item}
              />
            ))
          : movies.map((movie) => {
              if (!movie.poster_path) {
                return null;
              }

              return (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  type={movie.title ? "movie" : "tv"}
                />
              );
            })}
      </div>
    </section>
  );
}