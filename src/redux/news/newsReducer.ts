import { combineReducers } from 'redux';
import { Type } from './newsActions';
import { INews } from '../../components/News/NewsType';
import {
  INewsActionError,
  INewsActionSuccess,
  INewsActionStart,
} from './newsTypes';

const newsReducer = (
  state: INews[] = [],
  { type, payload }: INewsActionSuccess,
) => {
  switch (type) {
    case Type.NEWS_FETCH_SUCCESSS:
      return payload?.news || null;

    default:
      return state;
  }
};

const errorReducer = (
  state: string = '',
  { type, payload }: INewsActionError,
) => {
  switch (type) {
    case Type.NEWS_FETCH_ERROR:
      return payload.error;

    default:
      return state;
  }
};

const loadingReducer = (
  state: boolean = false,
  { type }: INewsActionStart | INewsActionSuccess | INewsActionError,
) => {
  switch (type) {
    case Type.NEWS_FETCH_START:
      return true;

    case Type.NEWS_FETCH_SUCCESSS:
    case Type.NEWS_FETCH_ERROR:
      return false;
    default:
      return false;
  }
};

export default combineReducers({
  news: newsReducer,
  error: errorReducer,
  isLoading: loadingReducer,
});
