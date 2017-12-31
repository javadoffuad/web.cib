import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';
import { Provider } from 'react-redux';

import App from 'containers/App/App';
import 'css/reset.css';
import 'css/main.css';
import 'css/card.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);