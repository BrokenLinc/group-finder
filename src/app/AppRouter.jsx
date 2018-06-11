import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import createRestrictedRoute from 'auth/createRestrictedRoute';
import ScrollToTop from 'components/ScrollToTop';
import paths from 'app/paths';
import Menu from 'app/components/Menu';
import Home from 'app/pages/Home';
import Groups from 'app/pages/Groups';
import SignIn from 'app/pages/SignIn';

const RestrictedRoute = createRestrictedRoute(SignIn);

const AppRouter = () => (
  <Router>
    <div className="content-inner">
      <ScrollToTop />
      <Menu />
      <RestrictedRoute exact path={paths.home()} component={Home} />
      <RestrictedRoute exact path={paths.groups()} component={Groups} />
      <RestrictedRoute exact path={paths.group(':groupKey')} component={Home} />
    </div>
  </Router>
);

export default hot(module)(AppRouter);
