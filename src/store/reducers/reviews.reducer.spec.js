import {
  fromJS
} from 'immutable'
import reducer from './reviews.reducer.js'
import actionDefs from '../actions/actionDefs'
import {
  setReviews
} from '../actions/reviews.actions'
import {
  ENETRESET
} from 'constants';

test(`${actionDefs.Reviews.Set} reduces to correct structure`, () => {

  const reviews = {
    reviews: [{
        rating: 0.8,
        publish_date: "2016-09-05T23:25:47.642350Z",
        id: "9783221620868",
        body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        author: "Kaley Schiller"
      },
      {
        rating: 3.2,
        publish_date: "2016-09-04T23:25:47.642388Z",
        id: "9793364045824",
        body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
        author: "Fay Lemke"
      }
    ]
  }

  const action = {
    type: actionDefs.Reviews.Set,
    payload: reviews
  }

  const nextState = reducer(undefined, action)

  expect(nextState.toJS()).toEqual({
    reviews: {
      reviews: [{
          rating: 0.8,
          publish_date: "2016-09-05T23:25:47.642350Z",
          id: "9783221620868",
          body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
          author: "Kaley Schiller"
        },
        {
          rating: 3.2,
          publish_date: "2016-09-04T23:25:47.642388Z",
          id: "9793364045824",
          body: "The fool doth think he is wise, but the wise man knows himself to be a fool.",
          author: "Fay Lemke"
        }
      ]
    }
  })

})