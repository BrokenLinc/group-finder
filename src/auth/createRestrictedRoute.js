import React from 'react';
import { Route } from 'react-router-dom';

import restrictAccess from './restrictAccess';

const createRestrictedRoute = (ReplacementComponent) => {
  const RestrictedRoute = (props) => {
    const routeProps = Object.assign({}, props, {
      component: restrictAccess(props.component, ReplacementComponent),
    });
    return <Route {...routeProps} />;
  };
  RestrictedRoute.propTypes = { ...Route.propTypes };
  return RestrictedRoute;
};

export default createRestrictedRoute;
