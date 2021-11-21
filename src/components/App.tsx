import React, { FC, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from './Nav/Nav';
import routes from '../Routes/Routes';

const App: FC = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route
            exact
            path={routes.HOME_PAGE.path}
            component={routes.HOME_PAGE.component}
          />
          <Route
            path={routes.POST_PAGE.path}
            component={routes.POST_PAGE.component}
          />
          <Route
            path={routes.GALLERY_PAGE.path}
            component={routes.GALLERY_PAGE.component}
          />
          <Route
            path={routes.WEATHER_PAGE.path}
            component={routes.WEATHER_PAGE.component}
          />{' '}
          <Route
            path={routes.MOVIE_DETAILS_PAGE.path}
            component={routes.MOVIE_DETAILS_PAGE.component}
          />
          <Route
            path={routes.MOVIES_PAGE.path}
            component={routes.MOVIES_PAGE.component}
          />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
