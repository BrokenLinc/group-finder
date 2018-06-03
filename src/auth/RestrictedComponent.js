import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RestrictedComponent extends Component {
  render() {
    const { ChildComponent, ReplacementComponent, user } = this.props;

    if (user.isLoading) return null;

    return user.email ? <ChildComponent {...this.props} /> : <ReplacementComponent />;
  }
}
RestrictedComponent.propTypes = {
  ChildComponent: PropTypes.func.isRequired,
  ReplacementComponent: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default RestrictedComponent;
