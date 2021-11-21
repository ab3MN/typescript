import { combineReducers } from 'redux';
import { PostsType } from './postsActions';
import { IGetTotalPage } from './postsTypes';
import {
  IDeletePostSuccess,
  IGetPostId,
  IEditPostSucces,
  IFilterValue,
} from './postsTypes';
import {
  IPostsType,
  IAddPostError,
  IAddPostSuccess,
  IDeletePostError,
} from './postsTypes';
import {
  IFetchPostsStart,
  IFetchPostsSucces,
  IFetchPostsError,
} from './postsTypes';

const postReducer = (
  state: IPostsType[] = [],
  {
    type,
    payload,
  }: IFetchPostsSucces | IAddPostSuccess | IDeletePostSuccess | IEditPostSucces,
) => {
  switch (type) {
    case PostsType.FETCH_POSTS_SUCCESS:
      return payload.posts || null;

    case PostsType.DELETE_POST_SUCCESS:
      return state.filter(p => p.id !== payload.id);

    case PostsType.ADD_POST_SUCCESS:
      return [...state, payload.post];

    case PostsType.EDIT_POST_SUCCES:
      return state.map(i =>
        i.id === payload.post.id ? Object.assign({}, i, payload.post) : i,
      );

    default:
      return state;
  }
};

const loadingReducer = (
  state: boolean = false,
  { type }: IFetchPostsSucces | IFetchPostsStart | IFetchPostsError,
) => {
  switch (type) {
    case PostsType.FETCH_POSTS_START:
      return true;
    case PostsType.FETCH_POSTS_SUCCESS:
    case PostsType.FETCH_POSTS_ERROR:
      return false;
    default:
      return false;
  }
};

const errorReducer = (
  state: string = '',
  { type, payload }: IFetchPostsError | IAddPostError | IDeletePostError,
) => {
  switch (type) {
    case PostsType.FETCH_POSTS_ERROR:
    case PostsType.DELETE_POST_ERROR:
    case PostsType.ADD_POST_ERROR:
      return payload.error;

    default:
      return state;
  }
};

const selectedId = (state = '', { type, payload }: IGetPostId) => {
  switch (type) {
    case PostsType.GET_SELECTED_POST_ID:
      return payload.id;
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }: IFilterValue) => {
  switch (type) {
    case PostsType.CHANGE_FILTER:
      return payload.value;
    default:
      return state;
  }
};
const totalPageReducer = (state = null, { type, payload }: IGetTotalPage) => {
  switch (type) {
    case PostsType.FETCH_POSTS_PAGES_SUCCESS:
      return payload.totalPage;
    default:
      return state;
  }
};

export default combineReducers({
  posts: postReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
  totalPage: totalPageReducer,
  selectedId,
});
