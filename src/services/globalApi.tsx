import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY_MOVIE_DB;

const movieBaseUrl = "https://api.themoviedb.org/3";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id: number) =>
  axios.get(movieByGenreBaseURL + api_key + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
