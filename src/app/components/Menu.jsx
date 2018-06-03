import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { auth } from 'app/base';
import paths from 'app/paths';

const onClickSignOut = (event) => {
  auth.signOut();
  event.preventDefault();
};

const Menu = ({ user }) => {
  const isUserLoaded = (!user.isLoading && !!user.email);

  return (
    <header className="header p-content">
      {isUserLoaded && (
        <ul>
          <li>Welcome, {user.displayName}</li>
          <li><Link to={paths.home()}>Home</Link></li>
          <li><Link to={paths.groups()}>Groups</Link></li>
          <button type="button" className="btn is-outline is-white" onClick={onClickSignOut}>Log out</button>
        </ul>
      )}
    </header>
  );
};

Menu.propTypes = {
  user: PropTypes.object.isRequired,
};

export default connect(state => ({
  user: state.user,
}))(Menu);
