import { Loader } from 'components/Loader/Loader';
import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchActor } from 'services/api';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const defaultImg =
    'https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg';
  const { movieId } = useParams();

  useEffect(() => {
    const details = async () => {
      setLoading(true);
      try {
        const cast = await fetchActor(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    details();
  }, [movieId]);

  return (
    <Container>
      {loading && <Loader />}
      <h1>Cast of the movie!</h1>
      {cast &&
        cast.map(({ id, name, profile_path }) => (
          <div key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              width={150}
              alt="poster"
            />

            <h2>{name}</h2>
          </div>
        ))}
    </Container>
  );
};

export default Cast;
