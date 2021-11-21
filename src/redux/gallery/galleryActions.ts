import { IGalleryItem, IGalleryError } from './galleryType';
export enum GalleryType {
  FETCH_IMG_START = 'FETCH_IMG_STAR',
  FETCH_IMG_SUCCESS = 'FETCH_IMG_SUCCESS',
  FETCH_IMG_ERROR = 'FETCH_IMG_ERROR',

  LOAD_MORE_IMG_START = 'LOAD_MORE_IMG_START',
  LOAD_MORE_IMG_SUCCESS = 'LOAD_MORE_IMG_SUCCESS',
  LOAD_MORE_IMG_ERROR = 'LOAD_MORE_IMG_ERROR',
}
/* Fetch Img */
export const fetchImagestart = () => ({
  type: GalleryType.FETCH_IMG_START,
});
export const fetchImagesSucces = (images: IGalleryItem[]) => ({
  type: GalleryType.FETCH_IMG_SUCCESS,
  payload: { images },
});
export const fetchImagesError = (error: IGalleryError) => ({
  type: GalleryType.FETCH_IMG_ERROR,
  payload: { error },
});

/* More Img */
export const loadMoreImagesStart = () => ({
  type: GalleryType.LOAD_MORE_IMG_START,
});
export const loadMoreImagesSuccess = (images: IGalleryItem[]) => ({
  type: GalleryType.LOAD_MORE_IMG_SUCCESS,
  payload: { images },
});
export const loadMoreImagesError = (error: IGalleryError) => ({
  type: GalleryType.LOAD_MORE_IMG_ERROR,
  payload: { error },
});
