import React, { Component } from 'react'
import { render } from 'react-dom'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import PureComponent from '../../global/components/PureComponent.jsx'

import bindFunctions from '../../util/bind-functions'

import SheetSelector from '../../global/components/SheetSelector/SheetSelector.jsx'
import HandLoom from '../../global/handLoom/components/HandLoom.jsx'
import TrialWeave from '../../global/trialWeave/components/TrialWeave.jsx'
// import FCR from '../../global/FCR/components/FCR.jsx'

import '../css/shoppingCart.less'

import { SHOPPINGCART_SHEETS } from '../../constants/index'

class ShoppingCart extends PureComponent {
    constructor(props) {
        super(props)

        bindFunctions.call(this, [
            'backToDevelopment',
            'onChangeSheet',
        ])
    }

    componentDidMount() {
        console.log('ShoppingCart componentDidMount')
    }

    componentWillMount() {
        console.log('ShoppingCart componentWillMount')
    }

    componentWillUnmount() {
        console.log('ShoppingCart componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('ShoppingCart componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('ShoppingCart componentDidUpdate')
    }

    backToDevelopment() {
        this.props.history.push('/development')
    }

    onChangeSheet(value) {
        // this.props.actions.shoppingCartActions.onChangeSheet(value)

        if (value === SHOPPINGCART_SHEETS[0].value) {
            this.props.history.push(`${this.props.match.url}/handloom`)
        }
        else if (value === SHOPPINGCART_SHEETS[1].value) {
            this.props.history.push(`${this.props.match.url}/trialweave`)
        }
        // else if (value === SHOPPINGCART_SHEETS[2].value) {
        //     this.props.history.push(`${this.props.match.url}/fcr`)
        // }
    }

    render() {
        const { state, actions, match, history } = this.props
        const { shoppingCart, masterDataState, userProfileState } = state

        console.log('????', shoppingCart)

        return (
            <div>
                <SheetSelector
                    state={{
                        sheets: shoppingCart.getIn(['sheetSelectorState', 'sheets']),
                        selectedSheet: shoppingCart.getIn(['sheetSelectorState', 'selectedSheet']),
                    }}
                    actions={{
                        onChangeSheet: this.onChangeSheet,
                    }}
                />

                <Switch>
                    <Route exact path={`${match.url}`} render={() => <Redirect to={`${match.url}/handloom`} />} />
                    <Route path={`${match.url}/handloom`} render={() => <HandLoom
                        state={{
                            handLoomState: shoppingCart.get('handLoomState'),
                            userProfileState,
                        }}
                        actions={{
                            updateBreadcrumb: actions.updateBreadcrumb,
                            onExpandDirectory: actions.handLoomActions.onExpandDirectory,
                            onCollapseDirectory: actions.handLoomActions.onCollapseDirectory,
                            onChangeSelectedCustomer: actions.onChangeSelectedCustomer,
                            onChangeSelectedBrand: actions.onChangeSelectedBrand,
                            onChangeShoppingCartHeader: actions.shoppingCartActions.onChangeShoppingCartHeader,
                            onFocusShoppingCartTextarea: actions.shoppingCartActions.onFocusShoppingCartTextarea,
                            onBlurShoppingCartTextarea: actions.shoppingCartActions.onBlurShoppingCartTextarea,
                        }}
                    />} />
                    <Route path={`${match.url}/trialweave`} render={() => <TrialWeave
                        state={{
                            trialWeaveState: shoppingCart.get('trialWeaveState'),
                            userProfileState,
                        }}
                        actions={{
                            updateBreadcrumb: actions.updateBreadcrumb,
                            onExpandDirectory: actions.trialWeaveActions.onExpandDirectory,
                            onCollapseDirectory: actions.trialWeaveActions.onCollapseDirectory,
                            onChangeSelectedCustomer: actions.onChangeSelectedCustomer,
                            onChangeSelectedBrand: actions.onChangeSelectedBrand,
                            onChangeShoppingCartHeader: actions.shoppingCartActions.onChangeShoppingCartHeader,
                            onFocusShoppingCartTextarea: actions.shoppingCartActions.onFocusShoppingCartTextarea,
                            onBlurShoppingCartTextarea: actions.shoppingCartActions.onBlurShoppingCartTextarea,
                        }}
                    />} />
                    {/* <Route path={`${match.url}/fcr`} render={() => <FCR
                        state={state.get('fcrState')}
                    />} /> */}
                    <Redirect to={`${match.url}/handloom`} />
                </Switch>
            </div>
        )
    }
}

ShoppingCart.propTypes = {
    actions: PropTypes.shape({
        onChangeSelectedCustomer: PropTypes.func.isRequired,
        onChangeSelectedBrand: PropTypes.func.isRequired,
        updateBreadcrumb: PropTypes.func.isRequired,
        shoppingCartActions: PropTypes.shape({
            onChangeSheet: PropTypes.func.isRequired,
            onChangeShoppingCartHeader: PropTypes.func.isRequired,
            onFocusShoppingCartTextarea: PropTypes.func.isRequired,
            onBlurShoppingCartTextarea: PropTypes.func.isRequired,
        }).isRequired,
        handLoomActions: PropTypes.shape({
            onExpandDirectory: PropTypes.func.isRequired,
            onCollapseDirectory: PropTypes.func.isRequired,
        }).isRequired,
        trialWeaveActions: PropTypes.shape({
            onExpandDirectory: PropTypes.func.isRequired,
            onCollapseDirectory: PropTypes.func.isRequired,
        }).isRequired,
        // fcrActions: PropTypes.shape({
        //     onExpandDirectory: PropTypes.func.isRequired,
        //     onCollapseDirectory: PropTypes.func.isRequired,
        // }).isRequired,
    }),
    state: PropTypes.shape({
        shoppingCart: ImmutablePropTypes.contains({
            // fcrState: ImmutablePropTypes.contains({
            //     leftContainerState: ImmutablePropTypes.contains({
            //         isExpanded: PropTypes.bool.isRequired,
            //     }).isRequired,
            // }).isRequired,
            trialWeaveState: ImmutablePropTypes.contains({
                leftContainerState: ImmutablePropTypes.contains({
                    isExpanded: PropTypes.bool.isRequired,
                }).isRequired,
            }).isRequired,
            handLoomState: ImmutablePropTypes.contains({
                leftContainerState: ImmutablePropTypes.contains({
                    isExpanded: PropTypes.bool.isRequired,
                }).isRequired,
            }).isRequired,
            sheetSelectorState: ImmutablePropTypes.contains({
                sheets: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                    text: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired,
                })).isRequired,
                selectedSheet: PropTypes.string.isRequired,
            }),
        }).isRequired,
        masterDataState: ImmutablePropTypes.contains({
            finishingList: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            })).isRequired,
            washTypeList: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            })).isRequired,
            garmentFeatureList: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            })).isRequired,
            destinationList: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            })).isRequired,
            shipModeList: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            })).isRequired,
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

export default withRouter(ShoppingCart)
