import React, { PureComponent } from 'react';

import { Switch, Route } from 'react-router-dom';

import {
  SwapRoomsIpadLoader,
  SwapRoomsMobileLoader,
  SwapRoomsLoader
} from './page-swaprooms';
import { PageNotFoundLoader } from './page-404';
import { ComponentsLoader } from './page-components';

import { isMobile } from '../utils/detectMobile';

class AppRouter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      screenWidth: null
    };

    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions = window.addEventListener(
      'resize',
      this.resize.bind(this)
    );
    this.resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  resize() {
    this.setState({ screenWidth: window.innerWidth });
  }

  render() {
    const { screenWidth } = this.state;

    console.log(screenWidth);

    let SwapRooms = SwapRoomsLoader;
    if (isMobile.iPad()) {
      SwapRooms = SwapRoomsIpadLoader;
    } else if (isMobile.any()) {
      SwapRooms = SwapRoomsMobileLoader;
    } else if (screenWidth > 420 && screenWidth <= 1024) {
      SwapRooms = SwapRoomsIpadLoader;
    } else if (screenWidth <= 420) {
      SwapRooms = SwapRoomsMobileLoader;
    }

    return (
      <Switch>
        <Route path="/" exact component={SwapRooms} />
        <Route path="/group/:groupId" exact component={SwapRooms} />
        <Route path="/chat/:chatId" exact component={SwapRooms} />
        <Route path="/components" exact component={ComponentsLoader} />
        <Route component={PageNotFoundLoader} />
      </Switch>
    );
  }
}

export default AppRouter;
