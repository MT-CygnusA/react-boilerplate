import { AppDispatch, ThunkResult } from '../index';
import { getFilterParams } from './selectors';
import { getReviews } from '../../api/review.api';
import { getReviews as getReviewsAction, getReviewsFailure, getReviewsSuccess, setReviewParams } from './actions';
import { ReviewFilterParams } from './reducers';

export const getCurrentReviews = (): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  const params = getFilterParams(getState());
  await requestReviews(dispatch, params);
};

export const updateFilterTheme = (themeId?: number): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  const filter = getFilterParams(getState());
  const updatedFilter = {
    ...filter,
    offset: undefined,
    theme_id: themeId,
  };

  dispatch(setReviewParams(updatedFilter));
  await requestReviews(dispatch, updatedFilter);
};

export const updateFilterPage = (page?: number): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  const filter = getFilterParams(getState());
  const updatedFilter = {
    ...filter,
    offset: page ? page * filter.limit : page,
  };

  dispatch(setReviewParams(updatedFilter));
  await requestReviews(dispatch, updatedFilter);
};

const requestReviews = async (dispatch: AppDispatch, params: ReviewFilterParams) => {
  dispatch(getReviewsAction());
  try {
    dispatch(getReviewsSuccess(await getReviews(params)));
  } catch (error) {
    dispatch(getReviewsFailure(error.response?.data.message || 'Error'));
  }
};
