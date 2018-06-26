
import React from 'react'
import { connect } from 'react-redux'
import { withStyles, Typography } from '../Common'
import { ReviewCard } from '../Layout'
import NavBar from './NavBar'
import { selectReviews } from '../../store/selectors/reviews.selectors'

const MainView = ({
  shows,
  reviews,
  classes,
}) => (
    <div className={classes.main}>
      <NavBar />
      <div className={classes.reviews}>
        <div className={classes.titleBox}>
          <Typography color='textSecondary' variant='title'>Reviews</Typography>
        </div>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>

    </div>
  )

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    height:'100vh',
    width: '100vw',
    backgroundColor: '#F8F6F8',
  },
  titleBox: {
    padding:`${theme.spacing.unit *4}px 0`,
  },
  reviews: {
    flex: 1,
    overflow: 'scroll',
    padding: '0px 100px',
  },
})

const mapStoreToProps = store => ({
  reviews: {test:'hi'},
  // reviews: selectReviews(store),
})

export default connect(mapStoreToProps)(withStyles(styles)(MainView))