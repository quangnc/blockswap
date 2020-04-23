import React, { Component } from 'react';
import ListGroup from '../../components/bootsteap/ListGroup';
import Search from '../../components/bootsteap/Search';
import DropDown from '../../components/bootsteap/DropDown';

import Avatar from '../../asserts/avatar.svg';
import Card from '../../components/bootsteap/Card';

class PageComponent extends Component {
  render() {
    const groups = [
      { id: '1', image: Avatar, name: 'Home', date: '3:12 PM' },
      { id: '2', image: Avatar, name: 'Decentraland', date: '3:12 PM' },
      { id: '3', image: Avatar, name: 'OmiseGo', date: '3:12 PM' },
      { id: '4', image: Avatar, name: 'Cryptokitties', date: '3:12 PM' }
    ];

    return (
      <div style={{ padding: 20 }}>
        <div className="card mb-5">
          <div className="card-body">
            <h5 className="card-title">List Group</h5>
            <div>
              <ListGroup list={groups} active="1" />
            </div>
          </div>
        </div>

        <div className="card mb-5">
          <div className="card-body">
            <h5 className="card-title">Search</h5>
            <div>
              <Search />
            </div>
          </div>
        </div>

        <div className="card mb-5">
          <div className="card-body">
            <h5 className="card-title">DropDown</h5>
            <div>
              <DropDown title="Drop Down Componrnt" />
              <DropDown
                title={
                  <img className="avatar medium" src={Avatar} alt="Avatar" />
                }
              />
            </div>
          </div>
        </div>

        <Card title="Rooms" small>
          <ListGroup list={groups} active="1" />
        </Card>

        <div className="card mb-5 mt-5">
          <div className="card-body">
            <h5 className="card-title">Avatar</h5>
            <div>
              <img className="avatar small" src={Avatar} alt="Avatar" />
              <img className="avatar medium" src={Avatar} alt="Avatar" />
              <img className="avatar large" src={Avatar} alt="Avatar" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageComponent;
