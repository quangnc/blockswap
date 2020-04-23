import Loadable from 'react-loadable';

export const SwapRoomsLoader = Loadable({
  loader: () => import('./SwapRooms.js'),
  loading: () => null
});

export const SwapRoomsMobileLoader = Loadable({
  loader: () => import('./SwapRoomsMobile.js'),
  loading: () => null
});

export const SwapRoomsIpadLoader = Loadable({
  loader: () => import('./SwapRoomsIpad.js'),
  loading: () => null
});
