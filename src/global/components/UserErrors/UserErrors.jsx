import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import swal from 'sweetalert2'

import PureComponent from '../PureComponent.jsx'

import './userErrors.less'

class UserErrors extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('UserErrors componentDidMount')
    }

    componentWillMount() {
        console.log('UserErrors componentWillMount')
    }

    componentWillUnmount() {
        console.log('UserErrors componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('UserErrors componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('UserErrors componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        const { userErrors } = state

        if (userErrors.size > 0) {
            let options = {}

            if (userErrors.getIn([0, 'title'])) {
                Object.assign(options, {
                    title: userErrors.getIn([0, 'title'])
                })
            }

            if (userErrors.getIn([0, 'message'])) {
                Object.assign(options, {
                    text: userErrors.getIn([0, 'message']).toString()
                })
            }

            if (userErrors.getIn([0, 'html'])) {
                Object.assign(options, {
                    html: userErrors.getIn([0, 'html'])
                })
            }

            if (userErrors.getIn([0, 'alertType'])) {
                Object.assign(options, {
                    type: userErrors.getIn([0, 'alertType'])
                })
            }

            swal(options)
                .then(() => {
                    actions.onRemoveUserErrorForAlert(userErrors.getIn([0, 'index']))
                })
        }

        return null
    }
}

UserErrors.propTypes = {
    state: PropTypes.shape({
        userErrors: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
            message: PropTypes.any,
            index: PropTypes.number.isRequired,
            title: PropTypes.string,
            alertType: PropTypes.string,
            html: PropTypes.string,
        })).isRequired,
    }),
    actions: PropTypes.shape({
        onRemoveUserErrorForAlert: PropTypes.func.isRequired,
    }),
}

export default UserErrors
