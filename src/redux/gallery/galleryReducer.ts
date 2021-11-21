import { combineReducers } from 'redux';
import { GalleryType } from './galleryActions';
import {
  ILoadMoreImagesSuccess,
  IFetchImagesStart,
  IFetchImagesError,
  ILoadMoreImagesError,
  IFetchImagesSuccess,
  IGalleryItem,
} from './galleryType';

const galleryReducer = (
  state: IGalleryItem[] = [],
  { type, payload }: IFetchImagesSuccess | ILoadMoreImagesSuccess,
) => {
  switch (type) {
    case GalleryType.FETCH_IMG_SUCCESS:
      return payload.images || state;

    case GalleryType.LOAD_MORE_IMG_SUCCESS:
      return [...state, ...payload.images];

    default:
      return state;
  }
};

const errorReducer = (
  state: string = '',
  { type, payload }: IFetchImagesError | ILoadMoreImagesError,
) => {
  switch (type) {
    case GalleryType.FETCH_IMG_ERROR:
    case GalleryType.LOAD_MORE_IMG_ERROR:
      return payload.error;
    default:
      return state;
  }
};
const loadingReducer = (
  state: boolean = false,
  { type }: IFetchImagesStart | IFetchImagesSuccess | IFetchImagesError,
) => {
  switch (type) {
    case GalleryType.FETCH_IMG_START:
      return true;
    case GalleryType.FETCH_IMG_SUCCESS:
    case GalleryType.FETCH_IMG_ERROR:
      return false;
    default:
      return false;
  }
};

export default combineReducers({
  images: galleryReducer,
  error: errorReducer,
  isLoading: loadingReducer,
});
