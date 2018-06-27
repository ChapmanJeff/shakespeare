import React from 'react'
import { withStyles } from '../../Common'

const PodiumButton = ({ classes }) => (
    <div className={classes.root}>
        <img alt='send invite' src={require('../../../img/podium-green.png')} className={classes.logo} onClick={() => console.log('hi')} />
    </div>
)

const styles = theme => ({
    root: {
        cursor: 'pointer',
    },
    logo: {
        height: '40px',
        marginRight: '20px',
    }
})

export default withStyles(styles)(PodiumButton)