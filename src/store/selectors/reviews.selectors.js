import { getDispatch } from '../store'
import { fetchReviews } from '../actions/reviews.actions'

export const selectReviews = store => {
  const reviews = store.reviews
  if (reviews.size === 0) {
    getDispatch()(fetchReviews())
  }
  return reviews
}