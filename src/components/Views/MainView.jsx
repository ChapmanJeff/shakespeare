
import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from '../Common'
import NavBar from './NavBar'
import { selectReviews } from '../../store/selectors/reviews.selectors'

const MainView = ({
  shows,
  reviews,
  classes,
}) => (
    <div className={classes.main}>
      <NavBar />
    </div>
  )

const styles = theme => ({
  main: {
    height:'100vh',
    width: '100vw',
    backgroundColor: '#F8F6F8',
  },
})

const mapStoreToProps = store => ({
  reviews: {test:'hi'},
  // reviews: selectReviews(store),
})

export default connect(mapStoreToProps)(withStyles(styles)(MainView))