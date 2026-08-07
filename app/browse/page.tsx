"use client";

import { useState } from "react";

import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import MovieRow from "../../components/MovieRow";
import TrailerModal from "../../components/TrailerModal";

type Movie = {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
  vote_average?: number;
};

export default function BrowsePage() {
  const [selectedMovie, setSelectedMovie] =
    useState<Movie | null>(null);

  return (
    <main className="browse-page">
      <Navbar/>

      <Banner />

      <div className="movie-section">
        <MovieRow
          title="Trending Now"
          endpoint="/trending/all/week"
        />

        <MovieRow
          title="Netflix Originals"
          endpoint="/discover/tv?with_networks=213"
        />

        <MovieRow
          title="Top Rated"
          endpoint="/movie/top_rated"
        />

        <MovieRow
          title="Action Movies"
          endpoint="/discover/movie?with_genres=28"
        />

        <MovieRow
          title="Comedy Movies"
          endpoint="/discover/movie?with_genres=35"
        />

        <MovieRow
          title="Horror Movies"
          endpoint="/discover/movie?with_genres=27"
        />

        <MovieRow
          title="Science Fiction"
          endpoint="/discover/movie?with_genres=878"
        />
      </div>

      {selectedMovie && (
  <TrailerModal
    movieId={selectedMovie.id}
    title={selectedMovie.title || selectedMovie.name || ""}
    type={selectedMovie.title ? 
      "movie" : "tv"
    }
    onClose={() => setSelectedMovie(null)}
  />
)}
    </main>
  );
}