import { lazy } from 'react';

const HomePage = lazy(
  () =>
    import('../pages/HomePage/HomePage' /* webpackChunkName: "home-page" */),
);

const PostsPage = lazy(
  () =>
    import('../pages/PostPage/PostPage' /* webpackChunkName: "posts-page" */),
);

const WeatherPage = lazy(
  () =>
    import(
      '../pages/WeatherPage/WeatherPage' /* webpackChunkName: "posts-page" */
    ),
);

const galleryPage = lazy(
  () =>
    import(
      '../pages/GalleryPage/GalleryPage' /* webpackChunkName: "gallery-page" */
    ),
);

/*Movies Page*/
const moviesPage = lazy(
  () =>
    import(
      '../pages/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
    ),
);

const movieDetailsPage = lazy(
  () =>
    import(
      '../pages/MoviesPage/MoviesDetailsPage/MovieDetailsPage'
    ) /* webpackChunkName: "movieDetails-page" */,
);

const movieCastPage = lazy(
  () =>
    import(
      '../pages/MoviesPage/MoviesCastPage/MoviesCastPage'
    ) /* webpackChunkName: "movieCast-page" */,
);

const movieReviewsPage = lazy(
  () =>
    import(
      '../pages/MoviesPage/MoviesReviewPage/MoviesReviewPage'
    ) /* webpackChunkName: "movieReviews-page" */,
);

const routes = {
  MOVIES_PAGE: {
    path: '/movies',
    component: moviesPage,
  },
  MOVIE_DETAILS_PAGE: {
    path: '/movies/:moviesid',
    component: movieDetailsPage,
  },
  MOVIE_REVIEW_PAGE: {
    path: '/reviews',
    component: movieReviewsPage,
  },
  MOVIE_CAST_PAGE: {
    path: '/cast',
    component: movieCastPage,
  },
  HOME_PAGE: {
    path: '/',
    component: HomePage,
  },
  POST_PAGE: {
    path: '/posts',
    component: PostsPage,
  },
  WEATHER_PAGE: {
    path: '/weather',
    component: WeatherPage,
  },
  GALLERY_PAGE: {
    path: '/gallery',
    component: galleryPage,
  },
};

export default routes;
