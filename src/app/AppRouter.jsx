import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';
import { hot } from 'react-hot-loader';

import restrictAccess from 'auth/restrictAccess';
import paths from 'app/paths';
import Menu from 'app/components/Menu';
import ScrollToTop from 'app/components/ScrollToTop';
import Home from 'app/pages/Home';
import Groups from 'app/pages/Groups';
import SignIn from 'app/pages/SignIn';

// wrap the `spring` helper to use a bouncy config
function quick(val) {
  return spring(val, {
    stiffness: 300,
    damping: 30,
  });
}

const AppRouter = () => (
  <Router>
    <ScrollToTop>
      <div className="perimeter-inner">
        <div className="content">
          <div className="content-inner">
            <Menu />
            <AnimatedSwitch
              atEnter={{ opacity: -1 }}
              atLeave={{ opacity: quick(-1) }}
              atActive={{ opacity: quick(1) }}
              className="route-wrapper"
            >
              <Route exact path={paths.home()} component={restrictAccess(Home, SignIn)} />
              <Route exact path={paths.groups()} component={restrictAccess(Groups, SignIn)} />
              <Route exact path={paths.group(':groupKey')} component={restrictAccess(Home, SignIn)} />
            </AnimatedSwitch>
          </div>
        </div>
      </div>
    </ScrollToTop>
  </Router>
);

export default hot(module)(AppRouter);
