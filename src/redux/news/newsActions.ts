import { INews } from '../../components/News/NewsType';

export enum Type {
  NEWS_FETCH_START = 'NEWS_FETCH_START',
  NEWS_FETCH_SUCCESSS = 'NEWS_FETCH_SUCCESSS',
  NEWS_FETCH_ERROR = 'NEWS_FETCH_ERROR',
}

export const fetchNewsStart = () => ({
  type: Type.NEWS_FETCH_START,
});

export const fetchNewsSuccess = (news: INews[]) => ({
  type: Type.NEWS_FETCH_SUCCESSS,
  payload: { news },
});

export const fetchNewsError = (error: string) => ({
  type: Type.NEWS_FETCH_ERROR,
  payload: { error },
});
