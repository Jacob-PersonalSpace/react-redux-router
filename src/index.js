import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer, hot } from 'react-hot-loader'

import Routes from './routes'
import store from './store'

const renderApp = Component => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}

renderApp(Routes)

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./routes/index', () => {
        renderApp(Routes)
    })
}
