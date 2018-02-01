import React, { Component } from 'react'
import { render } from 'react-dom'
import $ from 'jquery'
import { isEmpty } from 'lodash'

import PureComponent from '../../components/PureComponent.jsx'

import { adalLogout } from '../../../util/authenticate'
import bindFunctions from '../../../util/bind-functions'
import headerupnib from '../../../../static/img/header-up-nib.png'

import '../css/pageHeader.less'
import 'font-awesome/css/font-awesome.min.css'
import '../../css/pillandpillow.css'

class PageHeader extends PureComponent {
    constructor(props) {
        super(props)

        bindFunctions.call(this, [
            'goHome',
            'goToSite',
            'renderSites',
            'renderNotification',
            'onChangeSelectedMenu',
            'renderMenu',
            'doAction',
            'makeAction',
            'onOtherClick',
            'onOtherKeydown',
            'hide',
            'show',
            'shouldShow',
            'getRecentBuyings',
            'renderRecentBuyings',
            'renderDevelopmentMenu',
            'getRecentLinePlans',
            'renderRecentLinePlans',
            'getRecentSourcings',
            'renderRecentSourcings',
            'getRecentAssortments',
            'renderRecentAssortments',
            'renderPlanningMenu',
            'onLogout',
            'showSytemInfo',
        ])
    }

    goHome() {
        window.location.href = Constant.intranetUrl
    }

    goToSite(site) {
        if (site === 'Workbench') {
            window.location.href = 'index.html'
        }
    }

    renderSites() {
        const { state } = this.props

        return (
            <ul className="site-nav">
                <li><button onClick={() => this.goHome()}><i className="ppicon ppicon-home" /></button></li>
                {
                    state.get('sites').map((site, index) => {
                        return (
                            <li key={index}>
                                <button onClick={() => this.goToSite(site)}>{site}</button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    renderNotification() {
        const { state } = this.props

        return (
            <li>
                <button>
                    <span className="content">
                        <i className="ppicon ppicon-notification" />
                    </span>
                    {!isEmpty(state.get('notifications')) ? <span className="badge">{state.get('notifications')}</span> : false}
                </button>
            </li>
        )
    }

    onChangeSelectedMenu(evt, menuItem) {
        evt.stopPropagation()

        this.props.actions.selectMenuItem(menuItem.toLowerCase())
    }

    renderMenu(menuItem, index) {
        const { state } = this.props

        return (
            <li key={index} className={state.get('menu') === menuItem.toLowerCase() ? 'active' : ''}>
                <button onClick={evt => this.onChangeSelectedMenu(evt, menuItem)}>
                    <span className="content">{menuItem}</span>
                </button>
                {menuItem === 'Development' && this.renderDevelopmentMenu()}
                {menuItem === "Planning" && this.renderPlanningMenu()}
            </li>
        )
    }

    doAction(action) {
        if (action === 'line-plan/create') {
            window.location.href = 'lineplan.html?_=' + new Date().getTime()
        }
        else if (action === 'line-plan/history') {
            alert('This function has not been implemented.')
        }
        else if (action.indexOf('line-plan/open/') >= 0) {
            let id = action.split('/')[2]
            window.location.href = 'lineplan.html?_=' + new Date().getTime() + '#id=' + encodeURIComponent(id)
        }
        else if (action.indexOf('sourcing/open/') >= 0) {
            let id = action.split('/')[2]
            window.location.href = 'sourcing.html?_=' + new Date().getTime() + '#id=' + encodeURIComponent(id)
        }
        else if (action.indexOf('assortment/open/') >= 0) {
            let id = action.split('/')[2]
            window.location.href = 'assortment.html?_=' + new Date().getTime() + '#id=' + encodeURIComponent(id)
        }
        else if (action === 'assortment/history') {
            alert('This function has not been implemented.')
        }
        else if (action.indexOf('buying/open/') >= 0) {
            let id = action.split('/')[2],
                { actionData } = this.props.state.systemMenu.find(r => r.itemCode === 'BuyPlan').subMenuItem[id]

            window.location.href = 'buying.html?_=' + new Date().getTime() + '#json=' + encodeURIComponent(JSON.stringify(actionData))
        }
        else if (action === 'fabric/woven') {
            if (window.location.pathname.indexOf('development.html') >= 0) {
                return
            }

            window.location.href = 'development.html?_=' + Date.now()
        }
    }

    makeAction(action) {
        let firstPages = ['/', '/index.html', '/sprint9/', '/sprint9/index.html', '/InstantNoodle/Workbench/', '/InstantNoodle/Workbench/index.html']
        let firstPage = window.location.pathname && (firstPages.includes(window.location.pathname))

        if (firstPage) {
            this.doAction(action)
        }
        else {
            if (window.location.pathname.indexOf('development.html') >= 0 && action === 'fabric/woven') {
                return
            }
            window.app.flux.Modal.Actions.show('Confirm to discard changes?', 'yesno', (err, confirm) => {
                confirm && this.doAction(action)
            })
        }
    }

    onOtherClick() {
        this.hide()
    }

    onOtherKeydown(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault()
            this.hide()
        }
    }

    hide() {
        this.props.actions.selectMenuItem('')
        this.props.actions.cleanMenuItemSet()
    }

    show(evt, nextMenuItem) {
        evt.stopPropagation()

        if (nextMenuItem[0] === '@') {
            this.hide()
            this.makeAction(nextMenuItem.substring(1))

            return
        }

        this.props.actions.cleanMenuItemSet()

        let r = nextMenuItem.split('/').reduce((p, c) => {
            this.props.actions.addMenuItemSet(p)
            return p + '/' + c
        })

        this.props.actions.addMenuItemSet(r)
    }

    shouldShow(targetMenuItem) {
        const { state } = this.props

        return state.get('menuItemSet').indexOf(targetMenuItem) > -1 ?
            true :
            false
    }

    getRecentBuyings() {
        const { state } = this.props

        let subMenuItems = state.get('systemMenu').find(r => r.get('itemCode') === 'BuyPlan').get('subMenuItem')

        return subMenuItems.map((r, i) => ({
            text: r.get('displayText'),
            id: i,
        }))
    }

    renderRecentBuyings() {
        let buyings = this.getRecentBuyings()

        return (
            <ul className="sub-menu-box">
                {
                    buyings.map((buying, i) => {
                        return (
                            <li key={i}>
                                <a onClick={evt => this.show(evt, '@buying/open/' + buying.id)}>
                                    {buying.text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    renderDevelopmentMenu() {
        const { state } = this.props

        if (state.get('menu') !== 'development') return false

        return (
            <div className="menu">
                <img className="nib" src={headerupnib} />
                <ul className="menu-box">
                    <li>
                        <a onClick={evt => this.show(evt, 'fabric')}>
                            <span>Fabric</span>
                            <i className="icon fa fa-chevron-right" />
                        </a>
                        {
                            !this.shouldShow('fabric') ?
                                false :
                                <ul className="sub-menu-box">
                                    <li>
                                        <a onClick={evt => this.show(evt, '@fabric/woven')}>Woven</a>
                                    </li>
                                    <li>
                                        <a className="disabled" onClick={evt => this.show(evt, '@fabric/knit')}>Knit</a>
                                    </li>
                                </ul>
                        }
                    </li>
                    <li>
                        <a className="disabled" onClick={evt => this.show(evt, 'garment')}>Garment</a>
                    </li>
                    <li>
                        <a className="disabled" onClick={evt => this.show(evt, 'trims')}>Trims</a>
                    </li>
                    <li>
                        <a className="disabled" onClick={evt => this.show(evt, 'vap')}>Vap</a>
                    </li>
                </ul>
            </div>
        )
    }

    getRecentLinePlans() {
        const { state } = this.props

        let subMenuItems =
            state.get('systemMenu')
                .find(r => r.get('itemCode') === 'LinePlan').get('subMenuItem')
                .find(r => r.get('itemCode') === 'LinePlan-OpenRecent').get('subMenuItem')

        return subMenuItems.map((r, i) => {
            if (r.get('itemCode') === 'LinePlan-OpenRecentItem') {
                return {
                    text: r.get('displayText'),
                    id: r.get('actionData').find(r => r.get('cd') === 'linePlanID').get('val'),
                }
            }
        })
    }

    renderRecentLinePlans() {
        let plans = this.getRecentLinePlans()

        return (
            <ul className="sub-menu-box">
                {
                    plans.map((plan, i) => {
                        return (
                            <li key={i}>
                                <a onClick={evt => this.show(evt, '@line-plan/open/' + plan.id)}>
                                    {plan.text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    getRecentSourcings() {
        const { state } = this.props

        let subMenuItems = state.get('systemMenu').find(r => r.get('itemCode') === 'Sourcing').get('subMenuItem')

        return subMenuItems.map((r, i) => {
            if (r.get('itemCode') === 'Sourcing-OpenRecentItem') {
                return {
                    text: r.get('displayText'),
                    id: r.get('actionData').find(r => r.get('cd') === 'SourcingDeliveryID').get('val'),
                }
            }
        })
    }

    renderRecentSourcings() {
        let sourcings = this.getRecentSourcings()

        return (
            <ul className="sub-menu-box">
                {
                    sourcings.map((sourcing, i) => {
                        return (
                            <li key={i}>
                                <a onClick={evt => this.show(evt, '@sourcing/open/' + sourcing.id)}>
                                    {sourcing.text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    getRecentAssortments() {
        const { state } = this.props

        let subMenuItems =
            state.get('systemMenu')
                .find(r => r.get('itemCode') === 'Assortment').get('subMenuItem')
                .find(r => r.get('itemCode') === 'Assortment-OpenRecent').get('subMenuItem')

        return subMenuItems.map((r, i) => {
            if (r.get('itemCode') === 'Assortment-OpenRecentItem') {
                return {
                    text: r.get('displayText'),
                    id: r.get('actionData').find(r => r.get('cd') === 'AssortmentID').get('val'),
                }
            }
        })
    }

    renderRecentAssortments() {
        let assortments = this.getRecentAssortments()

        return (
            <ul className="sub-menu-box">
                {
                    assortments.map((assortment, i) => {
                        return (
                            <li key={i}>
                                <a onClick={evt => this.show(evt, '@assortment/open/' + assortment.id)}>
                                    {assortment.text}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    renderPlanningMenu() {
        const { state } = this.props

        if (state.get('menu') !== 'planning') {
            return false
        }

        return (
            <div className="menu">
                <img className="nib" src={headerupnib} />
                <ul className="menu-box">
                    <li>
                        <a onClick={evt => this.show(evt, 'line-plan')}>
                            Line Plan
                            <i className="icon fa fa-chevron-right" />
                        </a>
                        {
                            !this.shouldShow('line-plan') ?
                                false :
                                <ul className="sub-menu-box">
                                    <li>
                                        <a onClick={evt => this.show(evt, '@line-plan/create')}>Create</a>
                                    </li>
                                    <li>
                                        <a className="disabled">
                                            Revision History
                                        </a>
                                    </li>
                                </ul>
                        }
                    </li>
                    <li>
                        <a onClick={evt => this.show(evt, 'sourcing')}>
                            Sourcing
                            <i className="icon fa fa-chevron-right" />
                        </a>
                    </li>
                    <li>
                        <a onClick={evt => this.show(evt, 'assortment')}>
                            Allocation
                            <i className="icon fa fa-chevron-right" />
                        </a>

                        {
                            !this.shouldShow('assortment') ?
                                false :
                                <ul className="sub-menu-box">
                                    <li>
                                        <a className="disabled">
                                            Revision History
                                        </a>
                                    </li>
                                </ul>
                        }
                    </li>
                    <li>
                        <a onClick={evt => this.show(evt, 'buying')}>
                            Buying
                            <i className="icon fa fa-chevron-right" />
                        </a>

                        {
                            !this.shouldShow('buying') ?
                                false :
                                this.renderRecentBuyings()
                        }
                    </li>
                </ul>
            </div>
        )
    }

    onLogout() {
        Adal.adalLogOut()
    }

    showSytemInfo() {
        window.open('systemInfo.html')
    }

    componentWillMount() {
        this.props.actions.getSystemMenu()
    }

    componentDidUpdate() {
        const { state } = this.props

        let $window = $(window)

        if (state.get('menu')) {
            $window
                .on('click', () => this.onOtherClick())
                .on('keydown', () => this.onOtherKeydown())
        } else {
            $window
                .off('click')
                .off('keydown')
        }
    }

    componentWillUnmount() {
        $(window)
            .off('click')
            .off('keydown')
    }

    render() {
        const { actions, state } = this.props

        return (
            <div className="ui-pageheader" style={state.get('style')}>

                {
                    this.renderSites()
                }

                <ul className="section-nav">

                    {
                        this.renderNotification()
                    }

                    {
                        state.get('menuItems').map((menuItem, index) => this.renderMenu(menuItem, index))
                    }

                </ul>
                <div className="system-information">
                    {
                        false && <img src="../../../../static/img/profile-unknown.jpg" />
                    }

                    <div className="version">Version: {process.env.VERSION} Build: {process.env.FRONTEND}</div>

                    {' '}

                    <ul className="site-nav">
                        <li>
                            <button onClick={event => this.showSytemInfo(event)}>         </button>
                        </li>
                        <li>
                            <button onClick={event => this.onLogout(event)}>Logout</button>
                        </li>
                    </ul>
                </div>
                <hr />
                <div className="navbar-extension"></div>

                <ul className="breadcrumb">
                    {
                        (state.get('breadcrumb') || []).reduce((output, name, index) => {
                            index && output.push(<li key={index + 's'} className="separator"><i className="ppicon ppicon-arrow-right" /></li>)
                            output.push(<li key={index}><button>{name}</button></li>)

                            return output
                        }, [])
                    }
                </ul>

                {
                    this.props.children
                }

                <div style={{ clear: 'both' }}></div>
            </div>
        )
    }
}

export default PageHeader           
