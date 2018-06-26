import React from 'react'
import Stars from 'react-stars'
import PropTypes from 'prop-types' 
import moment from 'moment'
import TagIcon from '@material-ui/icons/LocalOffer'
import { withStyles, Typography } from '../Common'
import { Button, Input } from '../Controls'
import { Card, Divider } from '.'

const ReviewCard = ({ classes }) => (
  <Card raised={false} className={classes.root}>
    <div className={classes.ratingContainer}>
      <div className={classes.rating}>
        <Button variant='contained' color='primary' size='small' className={classes.sourceButton}>
          Facebook
        </Button>
        <Stars count={5} value={.8} edit={false}/>
      </div>
      <div>
        <TagIcon color='action' />
      </div>
    </div>
    <div className={classes.reviewContainer}>
      <div className={classes.nameLine}>
        <Typography style={{marginRight: '15px'}} variant='body2'>Cameroon Boone</Typography>
        <Typography color='textSecondary' variant='body1'>{`Published ${moment("2016-09-05T23:25:47.642350Z").fromNow()}`}</Typography>
      </div>
      <div>
        <Typography variant='body1'>"The fool doth think he is wise, but the wise man knows himself to be a fool."</Typography>
      </div>
      <Divider className={classes.divider} />
      <div className={classes.replyContainer}>
        <Input placeholder='Respond As Shakespeare' className={classes.input}/>
        <Button variant='contained' className={classes.replyButton}>reply</Button>
      </div>
    </div>
  </Card>
)

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
    backgroundColor: theme.palette.common.white,
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'column',
    marginBottom: theme.spacing.unit * 3,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  ratingContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  sourceButton: {
    marginRight: theme.spacing.unit,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  reviewContainer: {
    marginTop: theme.spacing.unit * 3,
    display: 'flex',
    flexDirection: 'column',
  },
  nameLine: {
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    margin: `${theme.spacing.unit * 3}px 0`,
  },
  replyContainer: {
    display: 'flex',
  },
  input: {
    flex: 1,
    marginRight: theme.spacing.unit * 3,
  },
  replyButton: {
    backgroundColor: 'eeeeee',
    borderRadius: 3,
  },
})

ReviewCard.propTypes = {
  // company: PropTypes.string,
  // rating: PropTypes.number,
  // name: PropTypes.string,
  // date: PropTypes.string,
}

export default withStyles(styles)(ReviewCard)