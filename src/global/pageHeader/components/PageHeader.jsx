import React, { Component } from 'react'
import { render } from 'react-dom'

import '../css/pageHeader.less'

class PageHeader extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('PageHeader componentDidMount')
    }

    componentWillMount() {
        console.log('PageHeader componentWillMount')
    }

    componentWillUnmount() {
        console.log('PageHeader componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('PageHeader componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('PageHeader componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props

        return (
            <div>
                <span className="pageheader">Page Header: {state.pageHeaderState}</span>
            </div>
        )
    }
}

export default PageHeader
