// @flow
import React, { Component } from 'react';
import classNames from 'classnames';

type Props = {
  list: array,
  active: string,
  className: string
};

class ListGroup extends Component<Props> {
  static defaultProps = {
    list: [],
    active: '',
    className: false
  };

  onClick = item => {
    const { onClickItem } = this.props;
    if (onClickItem) {
      onClickItem(item);
    }
  };

  render() {
    const { list, active, className } = this.props;
    return (
      <ul className={classNames('list-group', { [className]: className })}>
        {list.map(item => (
          <li
            key={item.id}
            className={classNames('list-group-item d-flex', {
              active: item.id === active
            })}
            onClick={() => this.onClick(item)}
          >
            <div className="image">
              <img className="avatar small" src={item.image} alt={item.name} />
            </div>
            <span className="name">{item.name}</span>
            <span className="badge badge-pill ml-auto">
              {item.date ? item.date : ''}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;
