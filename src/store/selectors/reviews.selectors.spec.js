import {
  fromJS
} from 'immutable'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  selectReviews
} from './reviews.selectors'

const mockStore = configureStore([thunk])
let store
let dispatch

beforeEach(() => {
  store = mockStore({
    reviews: fromJS({
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
    })
  })

  dispatch = jest.fn()
})

test('selectReviews gets all reviews', () => {
  const reviews = selectReviews(store.getState())
  expect(reviews).toEqual(fromJS({
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
  }))
  expect(dispatch).not.toHaveBeenCalled()
})
