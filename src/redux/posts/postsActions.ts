import { IPostsType, IPostsError, IAddPostError } from './postsTypes';
export enum PostsType {
  FETCH_POSTS_START = 'FETCH_POSTS_START',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',

  FETCH_POSTS_PAGES_SUCCESS = 'FETCH_POSTS-PAGES_SUCCESS',

  ADD_POST_START = 'ADD_POST_START',
  ADD_POST_SUCCESS = 'ADD_POST_SUCCES',
  ADD_POST_ERROR = 'ADD_POST_ERROR',

  EDIT_POST_START = 'EDIT_POST_START',
  EDIT_POST_SUCCES = 'EDIT_POST_SUCCES',
  EDIT_POST_ERROR = 'EDIT_POST_ERROR',

  DELETE_POST_START = 'DELETE_POST_START',
  DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS',
  DELETE_POST_ERROR = 'DELETE_POST_ERROR',

  CHANGE_FILTER = 'CHANGE_FILTER',
  GET_SELECTED_POST_ID = 'GET_SELECTED_POST_ID',
}

/*Fetch Posts*/
export const fetchPostsStart = () => ({
  type: PostsType.FETCH_POSTS_START,
});
export const fetchPostsSuccess = (posts: IPostsType[]) => ({
  type: PostsType.FETCH_POSTS_SUCCESS,
  payload: { posts },
});
export const fetchPostsError = (error: IPostsError) => ({
  type: PostsType.FETCH_POSTS_ERROR,
  payload: { error },
});

/*Add Posts*/
export const addPostsStart = () => ({
  type: PostsType.ADD_POST_START,
});

export const addPostSuccess = (post: IPostsType) => ({
  type: PostsType.ADD_POST_SUCCESS,
  payload: { post },
});

export const addPostError = (error: IPostsError) => ({
  type: PostsType.ADD_POST_ERROR,
  payload: { error },
});

/*Delete Post*/
export const deletePostStart = () => ({
  type: PostsType.DELETE_POST_START,
});
export const deletePostSuccess = (id: string) => ({
  type: PostsType.DELETE_POST_SUCCESS,
  payload: { id },
});
export const deletePostError = (error: IPostsError) => ({
  type: PostsType.DELETE_POST_ERROR,
  payload: { error },
});

export const getPostId = (id: string) => ({
  type: PostsType.GET_SELECTED_POST_ID,
  payload: { id },
});

/* Edit Post */
export const editPostStart = () => ({
  type: PostsType.EDIT_POST_START,
});
export const editPostSuccess = (post: IPostsType) => ({
  type: PostsType.EDIT_POST_SUCCES,
  payload: { post },
});
export const editPostError = (error: IAddPostError) => ({
  type: PostsType.EDIT_POST_ERROR,
  payload: { error },
});

/* Filter */
export const changeFilterValue = (value: string) => ({
  type: PostsType.CHANGE_FILTER,
  payload: { value },
});

/* Get total Page */
export const getTotalPage = (totalPage: number) => ({
  type: PostsType.FETCH_POSTS_PAGES_SUCCESS,
  payload: { totalPage },
});
