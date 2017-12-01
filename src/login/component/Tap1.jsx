import React, { Component } from 'react';
import { render } from 'react-dom';

class Tap1 extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Tap1 componentDidMount')
    }

    componentWillMount() {
        console.log('Tap1 componentWillMount')
    }

    componentWillUnmount() {
        console.log('Tap1 componentWillUnmount')
    }

    componentWillUpdate() {
        console.log('Tap1 componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('Tap1 componentDidUpdate')
    }

    render() {
        const { state, actions } = this.props;

        return (
            <div>
                <span>Here is Tap 1</span>
            </div>
        )
    }
}

export default Tap1;
