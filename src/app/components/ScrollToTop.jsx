import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidUpdate() {
    if (this.props.history.action === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return null;
  }
}

ScrollToTop.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(ScrollToTop);
