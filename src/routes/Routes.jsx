import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import MainContainer from '../container'

const Routes = () => {
    return (
        <Router>
            <MainContainer />
        </Router>
    )
}

export default Routes
