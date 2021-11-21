import { GalleryType } from './galleryActions';

export interface IGalleryItem {
  webformatURL: string;
  largeImageURL: string;
  id: string;
  tags: string;
}
export interface IImages {
  images: IGalleryItem[];
}
export interface IGalleryError {
  error: string;
}

/* Fetch Images */
export interface IFetchImagesStart {
  type: GalleryType.FETCH_IMG_START;
}
export interface IFetchImagesSuccess {
  type: GalleryType.FETCH_IMG_SUCCESS;
  payload: IImages;
}
export interface IFetchImagesError {
  type: GalleryType.FETCH_IMG_ERROR;
  payload: IGalleryError;
}

/* Load More */
export interface ILoadMoreImagesSuccess {
  type: GalleryType.LOAD_MORE_IMG_SUCCESS;
  payload: any;
}
export interface ILoadMoreImagesError {
  type: GalleryType.LOAD_MORE_IMG_ERROR;
  payload: IGalleryError;
}
