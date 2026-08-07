declare module "movie-trailer" {
  interface MovieTrailerOptions {
    year?: number;
    multi?: boolean;
  }

  function movieTrailer(
    movieName?: string,
    options?: MovieTrailerOptions
  ): Promise<string | null>;

  export default movieTrailer;
}