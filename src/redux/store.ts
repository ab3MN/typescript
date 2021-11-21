import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import newsReducer from "./news/newsReducer";
import postsReducer from "./posts/postsReducer";
import galleryReducer from "./gallery/galleryReducer";
import moviesReducer from "./movies/moviesReducer";
import weatherReducer from "./weather/weatherReducer";

const rootReducer = combineReducers({
  news: newsReducer,
  posts: postsReducer,
  gallery: galleryReducer,
  movies: moviesReducer,
  weather: weatherReducer,
});

const middleWare = [ReduxThunk, logger];

const enchancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(...middleWare))
    : applyMiddleware(...middleWare);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const store = createStore(rootReducer, enchancer);
