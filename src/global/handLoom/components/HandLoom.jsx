import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import LeftContainer from '../../components/LeftContainer/LeftContainer.jsx'
import RightContainer from '../../components/RightContainer/RightContainer.jsx'
import PureComponent from '../../components/PureComponent.jsx'
import RequestInformation from '../../components/RequestInformation/RequestInformation.jsx'
import ExpandedDirectory from '../../components/ExpandedDirectory/ExpandedDirectory.jsx'

import '../css/handloom.less'

import bindFunctions from '../../../util/bind-functions'

class HandLoom extends PureComponent {
    constructor(props) {
        super(props)

        bindFunctions.call(this, [
            'onKeyPress',
            'renderRequestInformation',
            'onChangeSelectedCustomer',
            'onChangeSelectedBrand',
        ])
    }

    componentDidMount() {
        console.log('HandLoom componentDidMount')
    }

    componentWillMount() {
        console.log('HandLoom componentWillMount')
    }

    componentWillUnmount() {
        console.log('HandLoom componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('HandLoom componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('HandLoom componentDidUpdate')
    }

    onChangeSelectedCustomer(obj) {
        this.props.actions.onChangeSelectedCustomer(obj && obj.customerCode ? obj.customerCode : '')
    }

    onChangeSelectedBrand(obj) {
        this.props.actions.onChangeSelectedBrand(obj && obj.brandCode ? obj.brandCode : '')
    }

    onKeyPress(evt) {
        if (evt.key === 'Enter') {
            this.textareaRef.blur()

            evt.persist()
            evt.returnValue = false
            evt.preventDefault()
        }
    }

    renderRequestInformation() {
        const { state, actions } = this.props
        const { userProfileState } = state

        let selectedCustomerInfo, selectedBrandInfo, sendToDefaultValue = null

        if (userProfileState.get('userProfile').size > 0) {
            selectedCustomerInfo = userProfileState.getIn(['userProfile', 'customers'])
                .find(customer => customer.get('customerCode') === userProfileState.get('selectedCustomer'))
        }

        if (selectedCustomerInfo) {
            selectedBrandInfo = selectedCustomerInfo.get('brands')
                .find(brand => brand.get('brandCode') === userProfileState.get('selectedBrand'))
        }

        if (selectedBrandInfo) {
            sendToDefaultValue = selectedBrandInfo.getIn(['handloom', 'sendTo'])
        }

        return (
            <Fragment>
                <fieldset>
                    <div className="field-name">Customer Name</div>
                </fieldset>
                <fieldset>
                    <Select
                        value={userProfileState.get('selectedCustomer')}
                        valueKey='customerCode'
                        labelKey='customerName'
                        placeholder='Customer Name'
                        className='custom-react-select'
                        onChange={this.onChangeSelectedCustomer}
                        options={userProfileState.get('customerList').toJS()}
                    />
                </fieldset>
                <fieldset>
                    <span className="field-name">Customer Code</span>
                    <span className="field-value">{userProfileState.get('selectedCustomer')}</span>
                </fieldset>
                <fieldset>
                    <div className="field-name">Brand Name</div>
                </fieldset>
                <fieldset>
                    <Select
                        value={userProfileState.get('selectedBrand')}
                        valueKey='brandCode'
                        labelKey='brandName'
                        placeholder='Brand Name'
                        className='custom-react-select'
                        onChange={this.onChangeSelectedBrand}
                        options={userProfileState.get('brandList').toJS()}
                    />
                </fieldset>
                <fieldset>
                    <span className="field-name">Brand Code</span>
                    <span className="field-value">{userProfileState.get('selectedBrand')}</span>
                </fieldset>
                <fieldset>
                    <div className="field-name">Year Season</div>
                    {/* {
                        this.renderYearSeason()
                    } */}
                </fieldset>
                <fieldset>
                    <div className="field-name">Send To</div>
                    <textarea
                        ref={(ref) => this.textareaRef = ref}
                        key={userProfileState.get('selectedBrand') + 'sendTo' + sendToDefaultValue}
                        type="text"
                        name="nameField"
                        defaultValue={sendToDefaultValue}
                        onBlur={evt => {
                            actions.onBlurShoppingCartTextarea()
                            actions.onChangeShoppingCartHeader('handloom', 'sendTo', evt.target.value)
                        }}
                        onFocus={evt => actions.onFocusShoppingCartTextarea()}
                        onKeyPress={evt => this.onKeyPress(evt)}
                    />
                </fieldset>
            </Fragment>
        )
    }

    render() {
        const { state, actions } = this.props
        const { handLoomState, userProfileState } = state

        const isExpanded = handLoomState.getIn(['leftContainerState', 'isExpanded'])

        return (
            <div>
                <LeftContainer
                    state={{ isExpanded }}
                    actions={{
                        onExpandDirectory: actions.onExpandDirectory,
                    }}
                >
                    {
                        <ExpandedDirectory
                            actions={{
                                onCollapseDirectory: actions.onCollapseDirectory,
                            }}
                            state={{
                                title: 'Request Information',
                            }}
                        >
                            <RequestInformation>
                                {
                                    this.renderRequestInformation()
                                }
                            </RequestInformation>
                        </ExpandedDirectory>
                    }
                </LeftContainer>

                <RightContainer
                    style={{
                        height: 'calc(100% - 214px)',
                        width: isExpanded ? 'calc(100% - 262px)' : 'calc(100% - 52px)',
                        left: isExpanded ? '262px' : '52px',
                    }}
                >
                </RightContainer>
            </div>
        )
    }
}

HandLoom.propTypes = {
    actions: PropTypes.shape({
        updateBreadcrumb: PropTypes.func.isRequired,
        onExpandDirectory: PropTypes.func.isRequired,
        onCollapseDirectory: PropTypes.func.isRequired,
        onChangeSelectedCustomer: PropTypes.func.isRequired,
        onChangeSelectedBrand: PropTypes.func.isRequired,
        onChangeShoppingCartHeader: PropTypes.func.isRequired,
        onFocusShoppingCartTextarea: PropTypes.func.isRequired,
        onBlurShoppingCartTextarea: PropTypes.func.isRequired,
    }),
    state: PropTypes.shape({
        handLoomState: PropTypes.shape({
            leftContainerState: ImmutablePropTypes.contains({
                isExpanded: PropTypes.bool.isRequired,
            })
        }),
        userProfileState: ImmutablePropTypes.contains({
            customerList: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                customerName: PropTypes.string.isRequired,
                customerCode: PropTypes.string.isRequired,
            })).isRequired,
            brandList: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                brandName: PropTypes.string.isRequired,
                brandCode: PropTypes.string.isRequired,
            })).isRequired,
            selectedCustomer: PropTypes.string.isRequired,
            selectedBrand: PropTypes.string.isRequired,
            userProfile: ImmutablePropTypes.contains({
                _id: PropTypes.string,
                userName: PropTypes.string,
                customers: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                    customerCode: PropTypes.string.isRequired,
                    customerName: PropTypes.string.isRequired,
                    brands: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                        brandCode: PropTypes.string.isRequired,
                        brandName: PropTypes.string.isRequired,
                    })).isRequired,
                })),
            }).isRequired,
        }).isRequired,
    }),
}

export default HandLoom
