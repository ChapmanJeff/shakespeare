
import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { withStyles, Typography } from '../Common'
import { ReviewCard } from '../Layout'
import { CircularProgress } from '../Controls'
import NavBar from './NavBar'
import { selectReviews } from '../../store/selectors/reviews.selectors'

const MainView = ({
  shows,
  reviews,
  classes,
}) => (
    <div className={classes.main}>
      <NavBar />
      {/* <Switch>
        <Route path='/reviews' component={} />
        <Route path='/reviews' component={} />
      </Switch> */}
      <div className={classes.reviews}>
        <div className={classes.titleBox}>
          <Typography color='textSecondary' variant='title'>Reviews</Typography>
        </div>
        {reviews.size > 0
          ? reviews.get('reviews').map((review, i) => (
            <ReviewCard
               key={i}
               review={review.get('body')}
               rating={review.get('rating')}
               date={review.get('publish_date')}
               name={review.get('author')}
            /> ))
          : <div className={classes.progress}><CircularProgress size={80} /></div>}
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
  progress: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const mapStoreToProps = store => ({
  // reviews: {test:'hi'},
  reviews: selectReviews(store),
})

export default connect(mapStoreToProps)(withStyles(styles)(MainView))