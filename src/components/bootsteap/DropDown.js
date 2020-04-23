// @flow
import React, { Component } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

type Props = {
  title: any,
  className: string,
  items: array
};

class DropDownCustom extends Component<Props> {
  static defaultProps = {
    title: 'Drop Drown',
    items: []
  };

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const { title, className, items } = this.props;
    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        className={className}
      >
        <DropdownToggle tag="div" caret>
          {title}
        </DropdownToggle>
        <DropdownMenu>
          {items.map(item => (
            <DropdownItem
              onClick={() => this.props.onClickItem(item)}
              key={item.id}
            >
              {item.title}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropDownCustom;
