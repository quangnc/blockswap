import Loadable from 'react-loadable';

export const ComponentsLoader = Loadable({
  loader: () => import('./Components.js'),
  loading: () => null
});
