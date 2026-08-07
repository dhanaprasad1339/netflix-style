"use client";

import Navbar from "../../components/Navbar";
import MovieRow from "../../components/MovieRow";

export default function MoviesPage() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "80px" }}>
        <MovieRow
          title="Popular Movies"
          endpoint="/movie/popular"
        />

        <MovieRow
          title="Top Rated"
          endpoint="/movie/top_rated"
        />

        <MovieRow
          title="Now Playing"
          endpoint="/movie/now_playing"
        />
      </div>
    </>
  );
}