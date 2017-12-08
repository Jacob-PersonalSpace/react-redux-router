import React, { Component } from 'react';
import { render } from 'react-dom';
import _ from 'lodash'

// import '../../css/login/fabricItemList.less';

class FabricItemList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { state, actions } = this.props;

        return (
            <div>
                {
                    state.fabricItemList.map(fabricItem => (
                        <div key={fabricItem + 'div'}>
                            <a key={fabricItem} className={state.selectedFabricItem === fabricItem ? 'active' : ''} onClick={() => actions.onSelectFabricItem(fabricItem)}>{fabricItem}</a>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default FabricItemList;
