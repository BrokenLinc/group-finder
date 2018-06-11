import React, { Component } from 'react';
import { map } from 'lodash';

import { base } from 'app/base';

class Groups extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    base.bindToState('groups', {
      context: this,
      state: 'groups',
      asArray: true,
    });
  }
  render() {
    const { groups } = this.state;

    return (
      <div className="p-content">
        <h1>Groups</h1>
        {groups && map(groups, ({ name }) => <p key={name}>{ name }</p>)}
      </div>
    );
  }
}

export default Groups;
