import {
  GET_REVIEWS,
  GET_REVIEWS_FAILURE,
  GET_REVIEWS_SUCCESS,
  GET_REVIEW, GET_REVIEW_FAILURE,
  GET_REVIEW_SUCCESS,
  SET_REVIEW_PARAMS,
  ReviewAction,
} from './actions';
import { Review } from '../../interfaces/review.interface';

export interface ReviewFilterParams {
  limit: number;
  offset?: number;
  theme_id?: number;
}

export interface ReviewState {
  isLoadingReviews: boolean;
  isLoadingReview: boolean;
  reviews: Review[];
  filter: ReviewFilterParams;
  review: Review | null;
  error: string | null;
}

const initialState: ReviewState = {
  isLoadingReviews: false,
  isLoadingReview: false,
  reviews: [],
  filter: {
    limit: 20,
    offset: undefined,
    theme_id: undefined,
  },
  review: null,
  error: null,
};

const review = (state = initialState, action: ReviewAction): ReviewState => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        error: null,
        isLoadingReviews: true,
      };
    case GET_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload,
        isLoadingReviews: false,
      };
    case GET_REVIEWS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoadingReviews: false,
      };
    case GET_REVIEW:
      return {
        ...state,
        isLoadingReview: true,
      };
    case GET_REVIEW_SUCCESS:
      return {
        ...state,
        review: action.payload,
        isLoadingReview: false,
      };
    case GET_REVIEW_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoadingReview: false,
      };
    case SET_REVIEW_PARAMS:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default review;
