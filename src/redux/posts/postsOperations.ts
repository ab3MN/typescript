import axios from 'axios';
import { Dispatch } from 'redux';
import {
  addPostsStart,
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsError,
  addPostSuccess,
  addPostError,
  deletePostStart,
  deletePostError,
  deletePostSuccess,
  editPostSuccess,
  editPostError,
} from './postsActions';
import { IPostsType } from './postsTypes';
import { editPostStart, getTotalPage } from './postsActions';

const baseUrl: string = 'https://jsonplaceholder.typicode.com';

/* Fetch Posts */
export const fetchPosts =
  (limit: number = 10, page: number = 1) =>
  (d: Dispatch) => {
    d(fetchPostsStart());
    axios
      .get(`${baseUrl}/posts?_limit=${limit}&_page=${page}`)
      .then(res => {
        d(fetchPostsSuccess(res.data));
        d(getTotalPage(+res.headers['x-total-count']));
      })
      .catch(error => d(fetchPostsError(error.message)));
  };

/* Add Post */
export const addPost = (post: IPostsType) => (d: Dispatch) => {
  d(addPostsStart());
  axios
    .post(`${baseUrl}/posts`, post)
    .then(() => {
      d(addPostSuccess(post));
    })
    .catch(error => addPostError(error.message));
};

/* Delete Post */
export const deletePost = (id: string) => (d: Dispatch) => {
  d(deletePostStart());
  axios
    .delete(`${baseUrl}/posts/${id}`)
    .then(() => d(deletePostSuccess(id)))
    .catch(error => d(deletePostError(error.message)));
};

/* Edit Post */
export const onEditPost = (id: string, post: IPostsType) => (d: Dispatch) => {
  d(editPostStart());
  axios
    .put(`${baseUrl}/posts/${id}`, post)
    .then(res => d(editPostSuccess(res.data)))
    .catch(error => d(editPostError(error.message)));
};
