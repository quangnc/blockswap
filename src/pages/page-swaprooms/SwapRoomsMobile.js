import React, { Component } from 'react';

import Layout from './Layout';

import DropDownCustom from '../../components/bootsteap/DropDown';
import Add from '../../asserts/add.svg';
import MenuButton from '../../asserts/menu-button.svg';
import Avatar from '../../asserts/avatar.svg';
import MenuTabs from './components/MenuTab';
import Chat from './components/Chat';

export default class SwaproomsMarketIpad extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      status: false,
      item: null,
      activeTab: 2
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleClick = item => {
    this.setState({
      status: true,
      item
    });
  };

  render() {
    const menu = [
      {
        key: 1,
        name: 'Market'
      },
      {
        key: 2,
        name: 'Chat'
      }
    ];
    const { activeTab } = this.state;

    return (
      <Layout>
        <div className="layout layout-mobile d-flex flex-column fullHeight lightBackground">
          {/*Layout Header*/}
          <div className="d-flex layout-header">
            <main className="layout-header_main flexItem lightBackground">
              <div className="ipad-menu float-left">
                <img src={MenuButton} alt="menu-button" />
              </div>
              <div className="room-selected mobile-selected float-left ">
                <DropDownCustom
                  title={
                    <img className="avatar medium" src={Avatar} alt="Avatar" />
                  }
                />
              </div>
              <div className="float-right sign-in">
                <span>Sign in</span>
              </div>
              <div className="float-right right-menu right-menu_mobile">
                <ul className="list-inline list-action">
                  <li className="list-inline-item">
                    <div className="oval">
                      <img src={Add} alt="incoming-msg" />
                    </div>
                  </li>
                </ul>
              </div>
            </main>
          </div>
          <div className="tabs-custom border-top">
            <ul className="list-inline list-action">
              <MenuTabs
                toggle={this.toggle}
                activeTab={activeTab}
                data={menu}
              />
            </ul>
          </div>
          {/*Layout Body*/}
          {activeTab === 2 && <Chat />}
        </div>
      </Layout>
    );
  }
}
