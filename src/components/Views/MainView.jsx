
import React from 'react'
import { connect } from 'react-redux'
import NavBar from './NavBar'
import { selectReviews } from '../../store/selectors/reviews.selectors'

const MainView = ({
  shows,
  reviews,
  classes,
}) => (
    <React.Fragment>
      <NavBar />
    </React.Fragment>
  )

const mapStoreToProps = store => ({
  reviews: {test:'hi'},
  // reviews: selectReviews(store),
})

export default connect(mapStoreToProps)(MainView)