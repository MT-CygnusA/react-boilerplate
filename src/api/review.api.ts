import { Review } from '../interfaces/review.interface';
import internalAPI from './internalAPI';
import { APIResponse } from '../interfaces/api.interface';

export const getReviews = async (params = {}): Promise<Review[]> => {
  const { data } = await internalAPI.get<APIResponse<Review[]>>('api/reviews', { params });
  return data.data;
};

export const getReviewById = async (id: number): Promise<Review> => {
  const response = await internalAPI.get<Review>(`api/reviews/${id}`);
  return response.data;
};
