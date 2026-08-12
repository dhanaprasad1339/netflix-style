"use client";

import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../lib/firebase";

type Movie = {
  id: number;

  title?: string;
  name?: string;

  poster_path?: string | null;
  backdrop_path?: string | null;

  overview?: string;
  vote_average?: number;

  videoUrl?: string;
};

type FirestoreMovie = {
  title?: string;
  name?: string;

  posterUrl?: string;
  videoUrl?: string;

  description?: string;
  rating?: number;
};

type Props = {
  title: string;
};

export default function MovieRow({ title }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const snapshot = await getDocs(
          collection(db, "movies")
        );

        const firestoreMovies: Movie[] = snapshot.docs.map(
          (item, index) => {
            const data =
              item.data() as FirestoreMovie;

            return {
              id: index + 1,

              title: data.title || data.name || "Movie",

              poster_path:
                data.posterUrl || null,

              overview:
                data.description || "",

              vote_average:
                Number(data.rating) || 0,

              videoUrl:
                data.videoUrl || "",
            };
          }
        );

        setMovies(firestoreMovies);

      } catch (error) {
        console.error(
          "Firestore movies error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const scrollLeft = () => {
    rowRef.current?.scrollBy({
      left: -700,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    rowRef.current?.scrollBy({
      left: 700,
      behavior: "smooth",
    });
  };

  return (
    <section className="movie-row">

      <h2>{title}</h2>

      <div className="movie-slider">

        <button
          className="slider-button slider-left"
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          ❮
        </button>

        <div
          ref={rowRef}
          className="movie-row-scroll"
        >

          {loading ? (

            [1, 2, 3, 4, 5, 6].map(
              (item) => (
                <div
                  className="movie-skeleton"
                  key={item}
                />
              )
            )

          ) : movies.length === 0 ? (

            <p style={{ color: "white" }}>
              No movies found in Firestore.
            </p>

          ) : (

            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                type="movie"
              />
            ))

          )}

        </div>

        <button
          className="slider-button slider-right"
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          ❯
        </button>

      </div>

    </section>
  );
}