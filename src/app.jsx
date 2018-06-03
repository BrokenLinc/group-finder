/* Connect auth, redux, app router, and css */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import 'less/style.less';

import preventDocumentZoom from 'utilities/preventDocumentZoom';
import { auth } from 'app/base';
import store from 'app/store';
import AppRouter from 'app/AppRouter';
import AuthConnector from 'auth/AuthConnector';

preventDocumentZoom();

ReactDOM.render(
  <Provider store={store}>
    <AuthConnector auth={auth}>
      <AppRouter />
    </AuthConnector>
  </Provider>,
  document.getElementById('react-app')
);
