import Loadable from 'react-loadable';

export const PageNotFoundLoader = Loadable({
  loader: () => import('./PageNotFound.js'),
  loading: () => null
});
