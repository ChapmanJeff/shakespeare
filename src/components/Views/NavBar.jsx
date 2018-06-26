import React from 'react'
import PropTypes from 'prop-types'
import MUIAppBar from '@material-ui/core/AppBar'
import { withStyles } from '../Common'

const NavBar = ({ classes, children }) => (
    <MUIAppBar position='static' >
        Hi
    </MUIAppBar>
)

const styles = theme => ({
    root: {

    },
})

NavBar.propTypes = {
    // clases: PropTypes.object,
}

export default withStyles(styles)(NavBar)
