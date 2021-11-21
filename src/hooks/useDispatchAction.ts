import * as no from '../redux/news/newsOperations';
import * as po from '../redux/posts/postsOperations';
import * as go from '../redux/gallery/galleryOperations';
import * as mo from '../redux/movies/moviesOperations';
import * as wo from '../redux/weather/weatherOperations';
import { getPostId, changeFilterValue } from '../redux/posts/postsActions';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const Actions = {
  ...no,
  ...po,
  ...go,
  ...mo,
  ...wo,
  getPostId,
  changeFilterValue,
};

export const useDispatchAcions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Actions, dispatch);
};
