import React, { FC, useEffect } from 'react';
import { useDispatchAcions } from '../../hooks/useDispatchAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MovieList from './MoviesList/MoviesList';
import SearchMovies from './SearchMovies/SearchMovies';

const Movies: FC = () => {
  const { fetchMovies } = useDispatchAcions();
  const { movies } = useTypedSelector(state => state.movies);

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <SearchMovies />

      {movies ? (
        <MovieList items={movies} />
      ) : (
        <h1>No movies for your request</h1>
      )}
    </main>
  );
};

export default Movies;
