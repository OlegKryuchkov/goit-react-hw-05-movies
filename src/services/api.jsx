import axios from 'axios';

const API_KEY = '6be9aea73575a40cd7daafca7fef73e1';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const fetchSearchMovies = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: query,
    },
  });
  return data;
};

export const fetchAllDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};
// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/movie_id?language=en-US' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmU5YWVhNzM1NzVhNDBjZDdkYWFmY2E3ZmVmNzNlMSIsInN1YiI6IjY1N2Y0NzQzNGYzM2FkMDdkMGQxYjc1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bRYvjFEYcpSiGXnGvMSmcGRT0IBDMutycdjA748A2U' \
//      --header 'accept: application/json'

export const fetchActor = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};
// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmU5YWVhNzM1NzVhNDBjZDdkYWFmY2E3ZmVmNzNlMSIsInN1YiI6IjY1N2Y0NzQzNGYzM2FkMDdkMGQxYjc1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bRYvjFEYcpSiGXnGvMSmcGRT0IBDMutycdjA748A2U' \
//      --header 'accept: application/json'

export const fetchReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};
// curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmU5YWVhNzM1NzVhNDBjZDdkYWFmY2E3ZmVmNzNlMSIsInN1YiI6IjY1N2Y0NzQzNGYzM2FkMDdkMGQxYjc1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bRYvjFEYcpSiGXnGvMSmcGRT0IBDMutycdjA748A2U' \
//      --header 'accept: application/json'
