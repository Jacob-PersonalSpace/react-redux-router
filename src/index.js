// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
// import store, { history } from './store';
// import Router from './router';

// const target = document.querySelector('#root')

// ReactDOM.render(
//     <Provider store={store}>
//         <ConnectedRouter history={history}>
//             <div>
//                 <Router />
//             </div>
//         </ConnectedRouter>
//     </Provider>,
//     target
// )

import React from 'react'
import { render } from 'react-dom'

import Root from './router'
import store from './store'

render(
    <Root store={store} />,
    document.getElementById('root')
)
