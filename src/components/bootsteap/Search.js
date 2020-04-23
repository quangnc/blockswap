// @flow
import React, { Component } from 'react';

import Icon from '../../asserts/icon-search.svg';

type Props = {
  value: string,
  placeholder: string
};

class Search extends Component<Props> {
  static defaultProps = {
    value: '',
    placeholder: 'Search'
  };

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { placeholder } = this.props;
    const { value } = this.state;
    return (
      <div className="input-group input-search">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <img src={Icon} alt="Search Icon" />
          </div>
        </div>
        <input
          value={value}
          type="text"
          className="form-control"
          placeholder={placeholder}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Search;
