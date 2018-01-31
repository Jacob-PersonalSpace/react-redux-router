import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer, hot } from 'react-hot-loader'
import { runWithAdal } from 'react-adal'

import Routes from './routes'
import store from './store'

import { authContext, getAdalResourceGuiId, env } from './util/authenticate'
import { getBackendUrl } from './util/getBackendUrl'

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

runWithAdal(authContext, () => {
    let resourceGuiId = getAdalResourceGuiId(authContext)

    window.app = {
        authentication: {
            authContext,
            resourceGuiId,
        },
        backendUrl: getBackendUrl(env),
    }

    renderApp(Routes)
})

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./routes/index', () => {
        renderApp(Routes)
    })
}
