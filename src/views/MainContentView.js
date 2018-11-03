import { framework7 } from '../services/App';

import Home from './pages/Home';
import About from './pages/About';

export let view = null;

export function init() {
  view = framework7.views.create(
    '.view-main-content',
    {
      routes: [
        Home,
        About,
      ],
      url: '/home/',
    },
  );
}

export default {
  get view() {
    return view;
  },
  init,
};
