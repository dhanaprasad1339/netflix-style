"use client";

import Navbar from "../../components/Navbar";
import MovieRow from "../../components/MovieRow";

export default function TVShowsPage() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: "80px" }}>
        <MovieRow
          title="Popular TV Shows"
          endpoint="/tv/popular"
        />

        <MovieRow
          title="Top Rated TV"
          endpoint="/tv/top_rated"
        />

        <MovieRow
          title="Airing Today"
          endpoint="/tv/airing_today"
        />
      </div>
    </>
  );
}