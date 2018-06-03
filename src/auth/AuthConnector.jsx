/* Connects Rebase auth to Redux store */
import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from './redux';

class AuthConnector extends Component {
  componentWillMount() {
    const { auth, signedIn, signedOut } = this.props;
    auth.onAuthStateChanged((user) => {
      if (user) {
        signedIn(user);
      } else {
        signedOut();
      }
    });
  }
  getChildContext() {
    const { user } = this.props;
    return { user };
  }
  render() {
    return this.props.children;
  }
}

AuthConnector.propTypes = {
  auth: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  signedIn: PropTypes.func.isRequired,
  signedOut: PropTypes.func.isRequired,
  user: PropTypes.object,
};

AuthConnector.childContextTypes = {
  user: PropTypes.object,
};

export default connect(
  state => ({
    user: state.user,
  }),
  dispatch => ({
    signedIn: (user) => { dispatch(actionCreators.signedIn(user)); },
    signedOut: () => { dispatch(actionCreators.signedOut()); },
  })
)(AuthConnector);
