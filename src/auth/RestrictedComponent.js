import React from 'react';
import PropTypes from 'prop-types';

const RestrictedComponent = (props) => {
  const { ChildComponent, ReplacementComponent, user } = props;

  if (user.isLoading) return null;

  return user.email ? <ChildComponent {...this.props} /> : <ReplacementComponent />;
};

RestrictedComponent.propTypes = {
  ChildComponent: PropTypes.func.isRequired,
  ReplacementComponent: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default RestrictedComponent;
