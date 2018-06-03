import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { hot } from 'react-hot-loader';

import restrictAccess from 'auth/restrictAccess';
import paths from 'app/paths';
import Menu from 'app/components/Menu';
import Home from 'app/pages/Home';
import Groups from 'app/pages/Groups';
import SignIn from 'app/pages/SignIn';

const AppRouter = () => (
  <Router>
    <div className="perimeter-inner">
      <div className="content">
        <div className="content-inner">
          <Menu />
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="route-wrapper"
          >
            <Route exact path={paths.home()} component={restrictAccess(Home, SignIn)} />
            <Route exact path={paths.groups()} component={restrictAccess(Groups, SignIn)} />
            <Route exact path={paths.group(':groupKey')} component={restrictAccess(Home, SignIn)} />
          </AnimatedSwitch>
        </div>
      </div>
    </div>
  </Router>
);

export default hot(module)(AppRouter);
