import axios from 'axios'
import config from '../../utils/config'
import actionDefs from './actionDefs';

axios.defaults.baseURL = config.api.baseUrl
axios.defaults.headers.common['Authorization'] = config.api.token

export const setReviews = reviews => ({
  type: actionDefs.Reviews.Set,
  payload: reviews,
})

export const apiCalls = async (dispatch) => {
  const initialSet = await axios.get().then(response => response.data.data.map(item => axios.get(`/${item.id}`).then(review => review.data.data)))
  Promise.all(initialSet).then(results => dispatch(setReviews(results)))
}

/** Does both calls */
export const fetchReviews = () => 
  dispatch => 
    apiCalls(dispatch)

/** Does Single Call */
// export const fetchReviews = () => 
//   dispatch => 
//   dispatch(axios.get()
//     .then(results => {
//       console.log('setRev', setReviews(results.data.data))
//       dispatch(setReviews(results.data.data))
//     }))
