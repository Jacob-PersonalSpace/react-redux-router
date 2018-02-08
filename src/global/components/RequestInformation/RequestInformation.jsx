import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import PureComponent from '../../components/PureComponent.jsx'
import bindFunctions from '../../../util/bind-functions'

import './requestInformation.less'

class RequestInformation extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('RequestInformation componentDidMount')
    }

    componentWillMount() {
        console.log('RequestInformation componentWillMount')
    }

    componentWillUnmount() {
        console.log('RequestInformation componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('RequestInformation componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('RequestInformation componentDidUpdate')
    }

    render() {
        const { state, actions, children } = this.props

        return (
            <div className="twRequestContainer">
                {
                    children
                }
            </div>
        )
    }
}

RequestInformation.propTypes = {
    children: PropTypes.element.isRequired,
    // actions: PropTypes.shape({
    //     onChangeSelectedCustomer: PropTypes.func.isRequired,
    //     onChangeSelectedBrand: PropTypes.func.isRequired,
    // }),
    // state: PropTypes.shape({
    //     userProfileState: ImmutablePropTypes.contains({
    //         customerList: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
    //             customerName: PropTypes.string.isRequired,
    //             customerCode: PropTypes.string.isRequired,
    //         })).isRequired,
    //         brandList: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
    //             brandName: PropTypes.string.isRequired,
    //             brandCode: PropTypes.string.isRequired,
    //         })).isRequired,
    //         selectedCustomer: PropTypes.string.isRequired,
    //         selectedBrand: PropTypes.string.isRequired,
    //         userProfile: ImmutablePropTypes.contains({
    //             _id: PropTypes.string,
    //             userName: PropTypes.string,
    //             customers: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
    //                 customerCode: PropTypes.string.isRequired,
    //                 customerName: PropTypes.string.isRequired,
    //                 brands: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
    //                     brandCode: PropTypes.string.isRequired,
    //                     brandName: PropTypes.string.isRequired,
    //                 })).isRequired,
    //             })),
    //         }).isRequired,
    //     }).isRequired,
    // })
}

export default RequestInformation
