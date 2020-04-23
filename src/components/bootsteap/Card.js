// @flow

import React, { Component } from 'react';
import classNames from 'classnames';
import { Card as CardStrap, CardBody, CardTitle } from 'reactstrap';

type Props = {
  title: string,
  className: string,
  small: boolean,
  bold: boolean
};

export default class Card extends Component<Props> {
  static defaultProps = {
    bold: false,
    small: false
  };

  render() {
    const { title, className, bold, small } = this.props;
    return (
      <CardStrap className={className}>
        <CardBody>
          <CardTitle
            className={classNames('detail', { bold: bold, small: small })}
          >
            {title}
          </CardTitle>
          <div className="children">{this.props.children}</div>
        </CardBody>
      </CardStrap>
    );
  }
}
