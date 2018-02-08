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

import '../css/trialWeave.less'

import { SHOPPINGCART_TRIALWEAVE_BREADCRUMB } from '../../../constants/index'
import bindFunctions from '../../../util/bind-functions'

class TrialWeave extends PureComponent {
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
        console.log('TrialWeave componentDidMount')
    }

    componentWillMount() {
        this.props.actions.updateBreadcrumb(SHOPPINGCART_TRIALWEAVE_BREADCRUMB)
        console.log('TrialWeave componentWillMount')
    }

    componentWillUnmount() {
        console.log('TrialWeave componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('TrialWeave componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('TrialWeave componentDidUpdate')
    }

    onChangeSelectedCustomer(obj) {
        this.props.actions.onChangeSelectedCustomer(obj && obj.customerCode ? obj.customerCode : '')
    }

    onChangeSelectedBrand(obj) {
        this.props.actions.onChangeSelectedBrand(obj && obj.brandCode ? obj.brandCode : '')
    }

    onKeyPress(evt) {
        if (evt.key === 'Enter') {
            if (!evt.shiftKey) {
                this.textareaRef.blur()

                evt.persist()
                evt.returnValue = false
                evt.preventDefault()
            }
        }
    }

    renderRequestInformation() {
        const { state, actions } = this.props
        const { userProfileState } = state

        let selectedCustomerInfo, selectedBrandInfo, remarkDefaultValue = null

        if (userProfileState.get('userProfile').size > 0) {
            selectedCustomerInfo = userProfileState.getIn(['userProfile', 'customers'])
                .find(customer => customer.get('customerCode') === userProfileState.get('selectedCustomer'))
        }

        if (selectedCustomerInfo) {
            selectedBrandInfo = selectedCustomerInfo.get('brands')
                .find(brand => brand.get('brandCode') === userProfileState.get('selectedBrand'))
        }

        if (selectedBrandInfo) {
            remarkDefaultValue = selectedBrandInfo.getIn(['trialWeave', 'remark'])
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
                {/* <fieldset className='newRowDropdown'>
                <Dropdown
                    state={{
                        items: state.customerList,
                        placeholder: "Please select",
                        value: state.newShoppingCartHeader.selectedCustomerCode,
                    }}
                    actions={{
                        onChange: this.onChangeSelectedCustomer,
                    }}
                />
            </fieldset> */}
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
                {/* <fieldset className='newRowDropdown'>
                <Dropdown
                    state={{
                        items: state.brandList,
                        placeholder: "Please select",
                        value: state.newShoppingCartHeader.selectedBrandCode,
                    }}
                    actions={{
                        onChange: this.onChangeSelectedBrand,
                    }}
                />
            </fieldset> */}
                <fieldset>
                    <div className="field-name">Brand Code</div>
                    <span className="field-value">{userProfileState.get('selectedBrand')}</span>
                </fieldset>
                <fieldset>
                    <div className="field-name">Year Season</div>
                    {
                        // this.renderYearSeason()
                    }
                </fieldset>
                <fieldset>
                    <div className="field-name">Quality Requirement</div>
                </fieldset>
                {/* <fieldset className='newRowDropdown'>
                <Dropdown
                    state={{
                        items: [
                            { value: 'As normal standard', text: 'As normal standard' },
                            { value: 'As bulk standard', text: 'As bulk standard' },
                            { value: 'For color', text: 'For color' },
                            { value: 'For handfeel standard/development', text: 'For handfeel standard/development' },
                            { value: 'For DP rating', text: 'For DP rating' },
                            { value: 'For other special requirement', text: 'For other special requirement' }
                        ],
                        placeholder: "Please select",
                        value: state.newShoppingCartHeader.trialWeave.qualityRequirement,
                    }}
                    actions={{
                        onChange: this.onChangeSelectedQualityRequirement,
                    }} />


            </fieldset> */}
                <fieldset>
                    <div className="field-name">Reservation No</div>
                    {/* <input className="field-input name" type="text" name="nameField"
                    value={state.newShoppingCartHeader.trialWeave.reservationNo}
                    onChange={evt => actions.onChangeTWReservationNo(evt.target.value)} 
                    onBlur={evt => actions.onChangeTrialWeaveReservationNo(evt.target.value)}
                    /> */}
                </fieldset>
                {/* <fieldset>
                <div className="field-name">CO Fty(Route)</div>
                <Dropdown
                    state={{
                        items: state.destinationList.map(destination => ({
                            value: destination.value,
                            text: destination.value,
                        })),
                        placeholder: "Please select",
                        value: state.newShoppingCartHeader.trialWeave.coFty,
                    }}
                    actions={{
                        onChange: this.onChangeSelectedCOFty,
                    }}
                />


            </fieldset> */}
                {/* 

                     value: state.newShoppingCartHeader.selectedBrandCode,

                    actions={{
                        onChange: this.onChangeSelectedBrand,
                    }} */}

                {/* <fieldset className='checkboxFieldset'>
                    <input type='checkbox' checked={state.newShoppingCartHeader.trialWeave.shipmentSample}
                        onChange={evt => actions.onChangTWShippmentSample()} />Shipment Sample
           </fieldset>
                <fieldset className='checkboxFieldset'>
                    <input type='checkbox' checked={state.newShoppingCartHeader.trialWeave.directFabricSales}
                        onChange={evt => actions.onChangTWDirectFabricSales()} />Direct Fabric Sales
           </fieldset>
                <fieldset className='checkboxFieldset'>
                    <input type='checkbox' checked={state.newShoppingCartHeader.trialWeave.trimFabricMatchedKnitBody}
                        onChange={evt => actions.onChangTWTrimFabricMatchedKnitBody()} />Trim Fabric Matches Knit Body Fabric
           </fieldset> */}

                <fieldset>
                    <div className="field-name">Remark</div>
                    <textarea
                        ref={(ref) => this.textareaRef = ref}
                        key={userProfileState.get('selectedBrand') + 'remark' + remarkDefaultValue}
                        type="text"
                        name="nameField"
                        defaultValue={remarkDefaultValue}
                        onBlur={evt => {
                            actions.onBlurShoppingCartTextarea()
                            actions.onChangeShoppingCartHeader('trialWeave', 'remark', evt.target.value)
                        }}
                        onFocus={evt => actions.onFocusShoppingCartTextarea()}
                        onKeyPress={evt => this.onKeyPress(evt)}
                    />
                </fieldset>
                {/* <fieldset>
                    <textarea className="name" type="text" name="nameField"
                        value={state.trialWeaveRemark}
                        onChange={evt => actions.onChangeTWRemark(evt.target.value)}
                        onBlur={evt => actions.onChangeTrialWeaveRemark(evt.target.value)}
                    />
                </fieldset> */}
            </Fragment>
        )
    }

    render() {
        const { state, actions } = this.props
        const { trialWeaveState } = state

        const isExpanded = trialWeaveState.getIn(['leftContainerState', 'isExpanded'])

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

TrialWeave.propTypes = {
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
        trialWeaveState: PropTypes.shape({
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
    })
}

export default TrialWeave
