import React, { Component } from 'react';
import { render } from 'react-dom';

class Tap1 extends Component {
    constructor(props) {
        super(props);
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
