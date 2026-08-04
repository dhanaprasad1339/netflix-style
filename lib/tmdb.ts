import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

const requests = {
  trending: "/trending/all/week",
  netflixOriginals: "/discover/tv",
  topRated: "/movie/top_rated",
  actionMovies: "/discover/movie?with_genres=28",
  comedyMovies: "/discover/movie?with_genres=35",
  horrorMovies: "/discover/movie?with_genres=27",
};

export { tmdb };
export default requests;