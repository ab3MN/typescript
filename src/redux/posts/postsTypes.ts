import { PostsType } from './postsActions';

/* Interface */
export interface IPostsType {
  title: string;
  body: string;
  readonly id: string;
}

export interface IPosts {
  posts: IPostsType[];
}
export interface IPostsError {
  error: string;
}
export interface IPostId {
  id: string;
}
export interface IFilterValue {
  value: string;
}
export interface ITotalPage {
  totalPage: number;
}

/* Fetch */
export interface IFetchPostsStart {
  type: PostsType.FETCH_POSTS_START;
}
export interface IFetchPostsSucces {
  type: PostsType.FETCH_POSTS_SUCCESS;
  payload: IPosts;
}
export interface IFetchPostsError {
  type: PostsType.FETCH_POSTS_ERROR;
  payload: IPostsError;
}

/* Add */
export interface IAddPostSuccess {
  type: PostsType.ADD_POST_SUCCESS;
  payload: any;
}
export interface IAddPostError {
  type: PostsType.ADD_POST_ERROR;
  payload: IPostsError;
}

/* Delete */
export interface IDeletePostSuccess {
  type: PostsType.DELETE_POST_SUCCESS;
  payload: string;
}
export interface IDeletePostError {
  type: PostsType.DELETE_POST_ERROR;
  payload: IPostsError;
}

/* get ID */
export interface IGetPostId {
  type: PostsType.GET_SELECTED_POST_ID;
  payload: IPostId;
}

/* Edit */
export interface IEditPostSucces {
  type: PostsType.EDIT_POST_SUCCES;
  payload: any;
}
export interface IEditPostError {
  type: PostsType.EDIT_POST_ERROR;
  payload: IPostsError;
}

/* Filter */
export interface IFilterValue {
  type: PostsType.CHANGE_FILTER;
  payload: IFilterValue;
}

export interface IGetTotalPage {
  type: PostsType.FETCH_POSTS_PAGES_SUCCESS;
  payload: ITotalPage;
}
