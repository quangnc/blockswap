import React, { Component } from 'react';
import classNames from 'classnames';

class Layout extends Component {
  render() {
    const { children, header, className } = this.props;
    return (
      <div
        className={classNames(
          'layout d-flex flex-column fullHeight lightBackground',
          { [className]: className }
        )}
      >
        {/*Layout Header*/}
        <div className="d-flex layout-header">{header}</div>
        {/*Layout Body*/}
        <div className="layout-body d-flex flexItem border-top">{children}</div>
      </div>
    );
  }
}

export default Layout;
