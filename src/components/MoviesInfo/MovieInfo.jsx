import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

import { GenresItem, LinkBtnBack, MovieItemWrapper } from './MoviesItem.styled';

const BASE_IMG = 'https://image.tmdb.org/t/p/w200/';

export const MovieInfo = ({
  title,
  overview,
  genres,
  release_date,
  vote_average,
  poster_path,
}) => {
  const location = useLocation();

  const ref = useRef(location.state?.from ?? '/');

  return (
    <>
      <LinkBtnBack to={ref.current}>Go back</LinkBtnBack>

      <div>
        <img src={`${BASE_IMG}${poster_path}`} alt={title} />
        {vote_average ? (
          <p role={vote_average}>{vote_average.toFixed(1)}</p>
        ) : (
          ''
        )}
      </div>
      <MovieItemWrapper>
        <h2>{title}</h2>
        <p>Release data: {release_date}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {genres &&
            genres.map(({ id, name }) => (
              <GenresItem key={id}>{name}</GenresItem>
            ))}
        </ul>
      </MovieItemWrapper>
    </>
  );
};
