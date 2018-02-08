import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter, Switch, Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'

import PageHeader from './global/pageHeader/components/PageHeader.jsx'
import Development from './development/components/Development.jsx'
import ShoppingCart from './shoppingCart/components/ShoppingCart.jsx'
import JoAssign from './joAssign/components/JoAssign.jsx'
import PureComponent from './global/components/PureComponent.jsx'
import BlockWholeUi from './global/components/BlockUi/BlockWholeUi.jsx'
import UserErrors from './global/components/UserErrors/UserErrors.jsx'

import * as developmentActions from './development/actions'
import * as shoppingCartActions from './shoppingCart/actions'
import * as joAssignActions from './joAssign/actions'
import * as pageHeaderActions from './global/pageHeader/actions'
import * as globalActions from './global/actions'

class MainContainer extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('MainContainer componentDidMount')
    }

    componentWillMount() {
        this.props.actions.global.searchFinishing()
        this.props.actions.global.getShipMode()
        this.props.actions.global.getDestination()
        this.props.actions.global.getWashType()
        this.props.actions.global.getGarmentFeature()
        this.props.actions.global.getUserProfile()
        console.log('MainContainer componentWillMount')
    }

    componentWillUnmount() {
        console.log('MainContainer componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('MainContainer componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('MainContainer componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props
        const { development, shoppingCart, joAssign, pageHeader, global } = state

        return (
            <div>
                <BlockWholeUi
                    state={{
                        ifShow: global.getIn(['apiRequestState', 'apiRequestsForBlockUi']) > 0,
                        message: '',
                    }}
                />

                <UserErrors
                    state={{
                        userErrors: global.getIn(['userErrorState', 'userErrors']),
                    }}
                    actions={{
                        onRemoveUserErrorForAlert: actions.global.onRemoveUserErrorForAlert,
                    }}
                />

                <PageHeader
                    state={pageHeader}
                    actions={{ ...actions.pageHeader }}
                />

                <Switch>
                    <Route path="/development" render={() => <Development
                        state={development}
                        actions={{ ...actions.development }}
                    />} />
                    <Route path="/shoppingCart" render={() => <ShoppingCart
                        state={shoppingCart}
                        actions={{ ...actions.shoppingCart }}
                    />} />
                    <Route path="/joAssign" render={() => <JoAssign
                        state={{
                            joAssign,
                            masterDataState: global.get('masterDataState'),
                        }}
                        actions={{
                            ...actions.joAssign,
                            updateBreadcrumb: actions.pageHeader.updateBreadcrumb,
                        }}
                    />} />
                    <Redirect to="/development/fabricitem" />
                </Switch>
            </div>
        )
    }
}

MainContainer.propTypes = {
    state: PropTypes.shape({
        // shoppingCart: ImmutablePropTypes.contains({
        //     handLoomState: ImmutablePropTypes.contains({
        //         leftContainerState: ImmutablePropTypes.contains({
        //             isExpanded: PropTypes.bool.isRequired,
        //         }).isRequired,
        //     }).isRequired,
        //     trialWeaveState: ImmutablePropTypes.contains({
        //         leftContainerState: ImmutablePropTypes.contains({
        //             isExpanded: PropTypes.bool.isRequired,
        //         }).isRequired,
        //     }).isRequired,
        //     fcrState: ImmutablePropTypes.contains({
        //         leftContainerState: ImmutablePropTypes.contains({
        //             isExpanded: PropTypes.bool.isRequired,
        //         }).isRequired,
        //     }).isRequired,
        //     sheetSelectorState: ImmutablePropTypes.contains({
        //         sheets: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
        //             text: PropTypes.string.isRequired,
        //             value: PropTypes.string.isRequired,
        //         })),
        //         selectedSheet: PropTypes.string.isRequired,
        //     }).isRequired,
        // }),
        joAssign: ImmutablePropTypes.contains({
            leftContainerState: ImmutablePropTypes.contains({
                requestList: ImmutablePropTypes.listOf(ImmutablePropTypes.map.isRequired).isRequired,
                isExpanded: PropTypes.bool.isRequired,
                isFetchingRequestList: PropTypes.bool.isRequired,
            }).isRequired,
            rightContainerState: ImmutablePropTypes.contains({
                fileContent: ImmutablePropTypes.map.isRequired,
                isFetchingRequestFile: PropTypes.bool.isRequired,
            }).isRequired,
            sheetSelectorState: ImmutablePropTypes.contains({
                sheets: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                    text: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired,
                })),
                selectedSheet: PropTypes.string.isRequired,
            }).isRequired,
        }),
        global: ImmutablePropTypes.contains({
            apiRequestState: ImmutablePropTypes.contains({
                apiRequestsForBlockUi: PropTypes.number.isRequired,
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
            }).isRequired,
            userErrorState: ImmutablePropTypes.contains({
                userErrors: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
                    title: PropTypes.string,
                    message: PropTypes.any,
                    alertType: PropTypes.string,
                    index: PropTypes.number.isRequired,
                    html: PropTypes.string,
                })).isRequired,
            }).isRequired,
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
        }).isRequired,
        pageHeader: ImmutablePropTypes.contains({
            menu: PropTypes.string.isRequired,
            menuItemSet: ImmutablePropTypes.listOf(PropTypes.string.isRequired).isRequired,
            systemMenu: ImmutablePropTypes.listOf(ImmutablePropTypes.map.isRequired).isRequired,
            breadcrumb: ImmutablePropTypes.listOf(PropTypes.string.isRequired).isRequired,
            sites: ImmutablePropTypes.listOf(PropTypes.string.isRequired).isRequired,
            menuItems: ImmutablePropTypes.listOf(PropTypes.string.isRequired).isRequired,
        }),
    }),
    actions: PropTypes.shape({
        // shoppingCart: PropTypes.shape({
        //     shoppingCartActions: PropTypes.shape({
        //         onChangeSheet: PropTypes.func.isRequired,
        //         onChangeShoppingCartHeader: PropTypes.func.isRequired,
        //         onFocusShoppingCartTextarea: PropTypes.func.isRequired,
        //         onBlurShoppingCartTextarea: PropTypes.func.isRequired,
        //     }).isRequired,
        //     handLoomActions: PropTypes.shape({
        //         onExpandDirectory: PropTypes.func.isRequired,
        //         onCollapseDirectory: PropTypes.func.isRequired,
        //     }).isRequired,
        //     trialWeaveActions: PropTypes.shape({
        //         onExpandDirectory: PropTypes.func.isRequired,
        //         onCollapseDirectory: PropTypes.func.isRequired,
        //     }).isRequired,
        //     fcrActions: PropTypes.shape({
        //         onExpandDirectory: PropTypes.func.isRequired,
        //         onCollapseDirectory: PropTypes.func.isRequired,
        //     }).isRequired,
        // }),
        joAssign: PropTypes.shape({
            onClickFolder: PropTypes.func.isRequired,
            onExpandDirectory: PropTypes.func.isRequired,
            onCollapseDirectory: PropTypes.func.isRequired,
            onFetchHandloomRequestList: PropTypes.func.isRequired,
            onOpenHandloomRequest: PropTypes.func.isRequired,
            onClickSave: PropTypes.func.isRequired,
            onClickProceed: PropTypes.func.isRequired,
            onChangeSheet: PropTypes.func.isRequired,
        }),
        pageHeader: PropTypes.shape({
            getSystemMenu: PropTypes.func.isRequired,
            selectMenuItem: PropTypes.func.isRequired,
            addMenuItemSet: PropTypes.func.isRequired,
            cleanMenuItemSet: PropTypes.func.isRequired,
            updateBreadcrumb: PropTypes.func.isRequired,
        }),
        global: PropTypes.shape({
            onAddUserErrorForAlert: PropTypes.func.isRequired,
            onRemoveUserErrorForAlert: PropTypes.func.isRequired,
            searchFinishing: PropTypes.func.isRequired,
            getShipMode: PropTypes.func.isRequired,
            getDestination: PropTypes.func.isRequired,
            getWashType: PropTypes.func.isRequired,
            getGarmentFeature: PropTypes.func.isRequired,
            onAddAPIRequestForBlockUi: PropTypes.func.isRequired,
            onRemoveAPIRequestForBlockUi: PropTypes.func.isRequired,
            getUserProfile: PropTypes.func.isRequired,
            onChangeSelectedCustomer: PropTypes.func.isRequired,
            onChangeSelectedBrand: PropTypes.func.isRequired,
        }),
    }),
}

const mapStateToProps = state => {
    console.debug('whole state tree: ', state.toJS())

    return {
        state: {
            development: state.get('development'),
            shoppingCart: state.get('shoppingCart'),
            joAssign: state.get('joAssign'),
            pageHeader: state.get('pageHeader'),
            global: state.get('global'),
        },
    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            development: bindActionCreators({ ...developmentActions, }, dispatch),
            shoppingCart: bindActionCreators({ ...shoppingCartActions, }, dispatch),
            joAssign: bindActionCreators({ ...joAssignActions, }, dispatch),
            pageHeader: bindActionCreators({ ...pageHeaderActions, }, dispatch),
            global: bindActionCreators({ ...globalActions, }, dispatch),
        }
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainContainer))
