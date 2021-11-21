import { Type } from './newsActions';

interface INews {
  news: any[];
}
interface IError {
  error: string;
}

export interface INewsActionStart {
  type: Type.NEWS_FETCH_START;
}

export interface INewsActionSuccess {
  type: Type.NEWS_FETCH_SUCCESSS;
  payload: INews;
}
export interface INewsActionError {
  type: Type.NEWS_FETCH_ERROR;
  payload: IError;
}
