import { fromJS, Map } from 'immutable'
import actionDefs from '../actions/actionDefs'

const setReviews = (state, payload) => {
  return state.merge(fromJS({ reviews: payload }))
}

const reducer = (state = Map(), action) => {
  switch (action.type) {
    case actionDefs.Reviews.Set:
      return setReviews(state, action.payload)

    default:
      return state
  }
}

export default reducer
