import React, { Component } from 'react';

import Layout from './Layout';

import DropDownCustom from '../../components/bootsteap/DropDown';
// import Add from '../../asserts/add.svg';
import Add from '../../asserts/add.svg';
import MenuButton from '../../asserts/menu-button.svg';
import Notifications from '../../asserts/notifications-button.svg';
import Avatar from '../../asserts/avatar.svg';
import TypeMessage from './components/TypeMessage';
import HistoryMessage from './components/HistoryMessage';
import Market from './components/Market';

export default class SwapRoomsIpad extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      status: false,
      item: null
    };
  }

  toggle() {
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
    return (
      <Layout>
        <div className="layout d-flex flex-column fullHeight lightBackground">
          {/*Layout Header*/}
          <div className="d-flex layout-header">
            <main className="layout-header_main flexItem lightBackground">
              <div className="ipad-menu float-left">
                <img src={MenuButton} alt="menu-button" />
              </div>
              <div className="room-selected ipad-selected float-left ">
                <img className="avatar medium" src={Avatar} alt="Avatar" />
                <DropDownCustom title="Cryptokitties" />
              </div>
              <div className="float-right sign-in">
                <span>Sign in</span>
              </div>
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
                </ul>
              </div>
            </main>
          </div>

          {/*Layout Body*/}
          <div className="layout-body d-flex flexItem border-top">
            <main className="layout-body_middle flexItem whiteBackground main order-2">
              <div className="mesgs">
                <HistoryMessage />
                <TypeMessage />
              </div>
            </main>
            <aside className=" sidebar sidebarLeft darkBackground order-ipad group-enabled-content">
              <div className="rectangle-item">
                <Market />
              </div>
              <div className="rectangle-item">
                <Market />
              </div>
              <div className="rectangle-item">
                <Market />
              </div>
            </aside>
          </div>
        </div>
      </Layout>
    );
  }
}
