const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '59364287eb9441f4377a756545696a86';

async function fetchWithErrorHandling(url = '', config = {}, key = '') {
  const response = await fetch(url, config, key);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchMovieTrends() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
}
export function fetchMovieWithQuery(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
}
export function fetchMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
}
export function fetchActorsDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}
export function fetchReviewsDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}

const movieApp = {
  fetchMovieTrends,
  fetchMovieWithQuery,
  fetchMovieDetails,
  fetchActorsDetails,
  fetchReviewsDetails,
};

export default movieApp;
