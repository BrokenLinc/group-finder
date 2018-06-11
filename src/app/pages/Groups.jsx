import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FirestoreCollection } from 'react-firestore';

const renderGroupsList = ({ isLoading, data }) => {
  return isLoading ? (
    <div>loading...</div>
  ) : (
    <ul>
      {data.map(group => (
        <li key={group.id}>
          {group.name}
        </li>
      ))}
    </ul>
  );
};

renderGroupsList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array,
};

class Groups extends Component {
  render() {
    return (
      <div className="p-content">
        <h1>Groups</h1>
        <FirestoreCollection
          path="groups"
          sort="name"
          render={renderGroupsList}
        />
      </div>
    );
  }
}

export default Groups;
