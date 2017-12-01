import React, { Component } from 'react';
import { render } from 'react-dom';

class Tap2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;

        return (
            <div>
                <span>Here is Tap 2</span>
            </div>
        )
    }
}

export default Tap2;
