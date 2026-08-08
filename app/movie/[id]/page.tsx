import { tmdb } from "../../../lib/tmdb";
import MovieActions from "../../../components/MovieActions";

type Movie = {
  id: number;
  title?: string;
  name?: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  vote_average?: number;
  release_date?: string;
  runtime?: number;
};

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MoviePage({ params }: Props) {
  const { id } = await params;

  let movie: Movie | null = null;

  try {
    const response = await tmdb.get(`/movie/${id}`);
    movie = response.data;
  } catch (error) {
    console.error("Failed to fetch movie:", error);
  }

  if (!movie) {
    return (
      <main className="movie-details-page">
        <h1>Movie not found</h1>
      </main>
    );
  }

  const title = movie.title || movie.name || "Unknown";

  return (
    <main className="movie-details-page">

      {movie.backdrop_path && (
        <div className="movie-backdrop">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={title}
          />

          <div className="backdrop-overlay" />
        </div>
      )}

      <div className="movie-details-content">

        <div className="movie-details-poster">
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={title}
            />
          )}
        </div>

        <div className="movie-details-info">

          <h1>{title}</h1>

          <div className="movie-meta">

            {movie.release_date && (
              <span>
                {movie.release_date.slice(0, 4)}
              </span>
            )}

            {movie.runtime && (
              <span>
                {movie.runtime} min
              </span>
            )}

            {movie.vote_average !== undefined && (
              <span>
                ⭐ {movie.vote_average.toFixed(1)}
              </span>
            )}

          </div>

          <p className="movie-overview">
            {movie.overview || "No description available."}
          </p>

          <MovieActions
            movieId={movie.id}
            title={title}
          />

        </div>
        
      </div>

    </main>
  );
}