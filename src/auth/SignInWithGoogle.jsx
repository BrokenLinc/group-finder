import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }
  onClick(event) {
    this.props.auth.signInWithPopup(googleAuthProvider);
    event.preventDefault();
  }
  render() {
    const { className, style } = this.props;
    return <button className={className} style={style} onClick={this.onClick}>Sign In with Google</button>;
  }
}

SignIn.propTypes = {
  auth: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default SignIn;
