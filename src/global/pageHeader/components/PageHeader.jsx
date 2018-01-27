import React, { Component } from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router-dom'

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
                <span>Page Header: {state.pageHeaderState}</span>
            </div>
        )
    }
}

export default PageHeader
