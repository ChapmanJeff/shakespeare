import { getDispatch } from '../store'
import { fetchReviews } from '../actions/reviewActions'

export const selectReviews = store => {
  const reviews = store.reviews
  if (reviews.size === 0) {
    getDispatch()(fetchReviews())
  }
  return reviews
}