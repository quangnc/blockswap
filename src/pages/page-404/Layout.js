import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return <div className="page-404">{this.props.children}</div>;
  }
}

export default Layout;
