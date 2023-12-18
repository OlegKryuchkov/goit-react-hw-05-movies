import { Loader } from 'components/Loader/Loader';
import { WrapperMovieItem } from 'components/MoviesInfo/Movie.styled';
import { MovieInfo } from 'components/MoviesInfo/MovieInfo';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchAllDetails } from 'services/api';

const MovieDetails = ({ title }) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovies] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const details = async movieId => {
      setLoading(true);
      try {
        const result = await fetchAllDetails(movieId);
        setMovies(result);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    details(movieId);
  }, [movieId]);

  return (
    <Container>
      <h1>{title}</h1>
      {loading && <Loader />}
      {movie && <MovieInfo {...movie} />}

      <WrapperMovieItem>
        <li>
          <h3>
            <Link to="cast">Cast</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link to="reviews">Reviews</Link>
          </h3>
        </li>
      </WrapperMovieItem>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
