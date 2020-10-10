import { AppState } from '../index';
import { modifyDateString } from '../../utils/helpers';

export const getReviewError = (state: AppState) => state.review.error;

export const getReviews = (state: AppState) => state.review.reviews;

export const getFilterParams = (state: AppState) => state.review.filter;

export const isLoadingReviews = (state: AppState) => state.review.isLoadingReviews;

export const getCurrentPage = (state: AppState) => {
  const { offset, limit } = state.review.filter;
  return offset && limit ? offset / limit : 0;
};

export const getReviewTableItems = (state: AppState) =>
  (state.review.reviews || []).map(({ created_at, comment }) => ({ cells: [modifyDateString(created_at), comment] }));
