import { Review } from '../interfaces/review.interface';
import internalAPI from './internalAPI';

export const getReviews = async (params = {}): Promise<Review[]> => {
  const { data } = await internalAPI.get<Review[]>('reviews', { params });
  return data;
};

export const getReviewById = async (id: number): Promise<Review> => {
  const response = await internalAPI.get<Review>(`reviews/${id}`);
  return response.data;
};
