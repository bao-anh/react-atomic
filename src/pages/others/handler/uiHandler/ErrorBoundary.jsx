import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ATypography } from '../../../../components/atoms';
import './style.scss';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;
    if (error || errorInfo) {
      return (
        <div className="ui-handler">
          <ATypography variant="title" level={1}>
            Oops
          </ATypography>
          <ATypography variant="title" level={2}>
            Something went wrong
          </ATypography>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any.isRequired
};
