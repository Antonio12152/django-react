import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import App from './components/App'
import store from './store/store'
import ScrollToTop from './ScrollToTop';

const container = document.getElementById("app")
const root = createRoot(container)
root.render(
    <HashRouter>
        <Provider store={store}>
            <ScrollToTop />
            <App />
        </Provider>
    </HashRouter>
)
