import { action } from 'typesafe-actions';
import { Review } from '../../interfaces/review.interface';
import { ReviewFilterParams } from './reducers';

export const GET_REVIEWS = 'GET_REVIEWS';
export const GET_REVIEWS_SUCCESS = 'GET_REVIEWS_SUCCESS';
export const GET_REVIEWS_FAILURE = 'GET_REVIEWS_FAILURE';
export const GET_REVIEW = 'GET_REVIEW';
export const GET_REVIEW_SUCCESS = 'GET_REVIEW_SUCCESS';
export const GET_REVIEW_FAILURE = 'GET_REVIEW_FAILURE';
export const SET_REVIEW_PARAMS = 'SET_REVIEW_PARAMS';

export const getReviews = () => action(GET_REVIEWS);
export const getReviewsSuccess = (reviews: Review[]) => action(GET_REVIEWS_SUCCESS, reviews);
export const getReviewsFailure = (error: string) => action(GET_REVIEWS_FAILURE, error);
export const getReview = (id: number) => action(GET_REVIEW, id);
export const getReviewSuccess = (review: Review) => action(GET_REVIEW_SUCCESS, review);
export const getReviewFailure = (error: string) => action(GET_REVIEW_FAILURE, error);
export const setReviewParams = (params: ReviewFilterParams) => action(SET_REVIEW_PARAMS, params);

export type ReviewAction =
  | ReturnType<typeof getReviews>
  | ReturnType<typeof getReviewsSuccess>
  | ReturnType<typeof getReviewsFailure>
  | ReturnType<typeof getReview>
  | ReturnType<typeof getReviewSuccess>
  | ReturnType<typeof getReviewFailure>
  | ReturnType<typeof setReviewParams>;
