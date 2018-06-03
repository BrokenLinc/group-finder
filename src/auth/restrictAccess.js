import { assign } from 'lodash';
import { connect } from 'react-redux';

import RestrictedComponent from './RestrictedComponent';

const restrictAccess = (ChildComponent, ReplacementComponent) => {
  return connect(
    state => ({
      user: state.user,
    }),
    null,
    (stateProps, dispatchProps, ownProps) => (assign(
      { ChildComponent, ReplacementComponent },
      stateProps,
      dispatchProps,
      ownProps
    ))
  )(RestrictedComponent);
};

export default restrictAccess;
