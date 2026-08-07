"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import {
  arrayRemove,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

import { auth, db } from "../../lib/firebase";
import Navbar from "../../components/Navbar";
import TrailerModal from "../../components/TrailerModal";

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

export default function MyListPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] =
    useState<Movie | null>(null);

  useEffect(() => {
    let unsubscribeFirestore: (() => void) | undefined;

    const unsubscribeAuth = onAuthStateChanged(
      auth,
      (user) => {
        if (!user) {
          setMovies([]);
          return;
        }

        const userRef = doc(
          db,
          "users",
          user.uid
        );

        unsubscribeFirestore = onSnapshot(
          userRef,
          (snapshot) => {
            const data = snapshot.data();

            setMovies(data?.myList || []);
          },
          (error) => {
            console.error(
              "My List error:",
              error
            );
          }
        );
      }
    );

    return () => {
      unsubscribeAuth();

      if (unsubscribeFirestore) {
        unsubscribeFirestore();
      }
    };
  }, []);

  const removeFromMyList = async (movie: Movie) => {
  const user = auth.currentUser;

  if (!user) return;

  try {
    const userRef = doc(db, "users", user.uid);

    await updateDoc(userRef, {
      myList: arrayRemove(movie),
    });

    alert("Removed from My List");
  } catch (error) {
    console.error("Remove error:", error);
  }
};

  return (
    <main className="browse-page">
      <Navbar/>

      <section className="my-list-page">
        <h1>My List ❤️</h1>

        {movies.length === 0 ? (
          <div className="empty-list">
            <h2>Your list is empty</h2>

            <p>
              Add movies and TV shows from
              Browse.
            </p>
          </div>
        ) : (
          <div className="my-list-grid">
            {movies.map((movie) => (
              <div
                className="my-list-card"
                key={movie.id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={
                    movie.title ||
                    movie.name ||
                    "Movie"
                  }
                />

                <div className="my-list-info">
                  <h3>
                    {movie.title ||
                      movie.name}
                  </h3>

                  <p>
                    ⭐{" "}
                    {movie.vote_average?.toFixed(
                      1
                    )}
                  </p>

                  <div className="my-list-actions">
                    <button
                      onClick={() =>
                        setSelectedMovie(
                          movie
                        )
                      }
                    >
                      ▶ Trailer
                    </button>

                    <button
                      onClick={() =>
                        removeFromMyList(
                          movie
                        )
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {selectedMovie && (
  <TrailerModal
    movieId={selectedMovie.id}
    type={selectedMovie.media_type || "movie"}
    title={selectedMovie.title ||
       selectedMovie.name || "Trailer"}
    onClose={() => setSelectedMovie(null)}
  />
)}
    </main>
  );
}