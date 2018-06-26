import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '../../Common'

const PodiumButton = ({ classes }) => (
    <div className={classes.root}>
        {/* <IconButton> */}
            <img src={require('../../../img/podium-green.png')} className={classes.logo} onClick={() => console.log('hi')} />
        {/* </IconButton> */}
    </div>
)

const styles = theme => ({
    root: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        cursor: 'pointer',
    },
    logo: {
        // display: 'flex',
        height: '40px',
        marginRight: '20px',
    }
})

export default withStyles(styles)(PodiumButton)