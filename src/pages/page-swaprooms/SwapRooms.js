import React from 'react';

import classNames from 'classnames';

import Layout from './Layout';

import TypeMessage from './components/TypeMessage';
import Market from './components/Market';
import HistoryMessage from './components/HistoryMessage';
import Search from '../../components/bootsteap/Search';
import Card from '../../components/bootsteap/Card';
import ListGroup from '../../components/bootsteap/ListGroup';
import DropDownCustom from '../../components/bootsteap/DropDown';

import Add from '../../asserts/add.svg';
import Notifications from '../../asserts/notifications-button.svg';
import Avatar from '../../asserts/avatar.svg';
import DirectDetail from './components/DirectDetail';

import { groups, direct, offline, online, dropDown } from '../../mock/data';

export class SwapRooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupActive: '1',
      directActive: ''
    };
    this.handleClickGroup = this.handleClickGroup.bind(this);
    this.handleClickDirect = this.handleClickDirect.bind(this);
  }

  handleClickGroup({ id }) {
    this.setState({
      groupActive: id,
      directActive: ''
    });
  }

  handleClickDirect({ id }) {
    this.setState({
      groupActive: '',
      directActive: id
    });
  }

  renderHeader() {
    const group = groups.find(g => g.id === this.state.groupActive);

    return (
      <React.Fragment>
        <div className="layout-header_left darkBackground">
          <div className="room-selected">
            <img className="avatar large" src={Avatar} alt="Avatar" />
            <DropDownCustom
              onClickItem={this.handleClickGroup}
              items={dropDown}
              className="dropdown-style1"
              title={group ? group.name : 'Select Group'}
            />
          </div>
        </div>

        <main className="layout-header_main flexItem lightBackground border-left">
          <Search />

          <div className="float-right right-menu right-menu_ipad">
            <ul className="list-inline list-action">
              <li className="list-inline-item">
                <div className="oval">
                  <img src={Add} alt="incoming-msg" />
                </div>
              </li>
              <li className="list-inline-item">
                <div className="shape">
                  <img src={Notifications} alt="incoming-msg" />
                </div>
              </li>
              <li className="list-inline-item">
                <div className="shape">
                  <img src={Add} alt="incoming-msg" />
                </div>
              </li>
            </ul>
            <DropDownCustom
              className="dropdown-style2"
              title={
                <img className="avatar medium" src={Avatar} alt="Avatar" />
              }
            />
          </div>
        </main>
      </React.Fragment>
    );
  }

  render() {
    const { groupActive, directActive } = this.state;

    return (
      <Layout
        className={classNames({
          'layout-marker': groupActive && groupActive !== '1' && !directActive
        })}
        header={this.renderHeader()}
      >
        <main className="layout-body_middle flexItem whiteBackground main order-2 border-left">
          <div className="mesgs">
            <HistoryMessage />
            <TypeMessage send />
          </div>
        </main>
        <aside className="layout-body_left darkBackground order-1 group-enabled-content">
          <Card title="Rooms">
            <ListGroup
              className="list-group-style1"
              list={groups}
              active={groupActive}
              onClickItem={this.handleClickGroup}
            />
          </Card>

          <Card title="Direct">
            <ListGroup
              className="list-group-style1"
              list={direct}
              active={directActive}
              onClickItem={this.handleClickDirect}
            />
          </Card>
        </aside>

        {groupActive !== '1' && !directActive ? (
          <aside
            className={classNames(
              'layout-body_right darkBackground order-3 border-left',
              { 'direct-detail': directActive }
            )}
          >
            <div className="wrap-market">
              <Market />
              <Market />
            </div>
          </aside>
        ) : (
          <aside
            className={classNames(
              'layout-body_right darkBackground order-3 border-left',
              { 'direct-detail': directActive }
            )}
          >
            {!directActive ? (
              <React.Fragment>
                <Card title="Online" className="card-style1">
                  <ListGroup
                    className="list-group-style2 light"
                    list={online}
                  />
                </Card>

                <Card title="Offline" className="card-style1">
                  <ListGroup className="list-group-style2" list={offline} />
                </Card>
              </React.Fragment>
            ) : (
              <DirectDetail />
            )}
          </aside>
        )}
      </Layout>
    );
  }
}

export default SwapRooms;
