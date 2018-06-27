import React from 'react'
import Classnames from 'classnames'
import DownArrow from '@material-ui/icons/KeyboardArrowDown'
import Send from '@material-ui/icons/Send'
import { PodiumButton, Button, Avatar } from '../Controls'
import { AppBar } from '../Layout'
import { withStyles } from '../Common'

const menuList = [{ title: 'Plays'}, { title: 'Poems'}, { title: 'Reviews'}, {title:'Insights', icon: true}, {title:'Manage', icon: true}]

class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 2
    }
  }

  setActive = id => {
    this.setState({ active: id })
  }

  render() {
    const { active } = this.state
    const { classes } = this.props
    return (
      <AppBar position='static' className={classes.root}>
        <div className={classes.left}>
          <PodiumButton />
          {/* todo: Below could be turned into its own component */}
          {menuList.map((item, i) => {
            if (item.icon) {
              return (
                <Button key={i} className={Classnames(classes.button,{[classes.activeButton]: i === active})} onClick={() => this.setActive(i)}>
                  {item.title}
                  <DownArrow style={{marginRight: '0'}} className={Classnames(classes.button,{[classes.activeButton]: i === active})} />
                </Button>
              )
            } else {
             return(
              <Button key={i} className={Classnames(classes.button,{[classes.activeButton]: i === active})} onClick={() => this.setActive(i)}>
                {item.title}
              </Button>
             ) 
            }
          })}
        </div>
        <div className={classes.right}>
          <Button variant="contained" className={classes.greenButton}>
            <Send className={classes.leftIcon} />
            Send Review Invite
          </Button>
          <Button>
            <Avatar src={require('../../img/avatar.jpeg')} />
            <DownArrow style={{marginRight: '0'}} className={classes.button} />
          </Button>
        </div>
      </AppBar>

    )
  }
}

const styles = theme => ({
  root: {
    backgroundColor: '#484648',
    padding: '0px 100px',
    height: '84px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    display: 'flex',
    alignItems: 'center',
  },
  right: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing.unit,
    color: '#8B8A8B',
  },
  activeButton: {
    color: theme.palette.common.white,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  greenButton: {
    marginRight: theme.spacing.unit,
    borderRadius: 25,
    backgroundColor: '#30CF71',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#308F71'
    },
  },
})

export default withStyles(styles)(NavBar)
