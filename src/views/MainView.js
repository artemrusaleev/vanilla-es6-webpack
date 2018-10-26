import App  from '../services/App.js';

import Home from './pages/Home.js';
import About from './pages/About.js';

var mainView = App.views.create(
  '.view-main',
  {
    routes: [
      About,
      Home
    ]
  }
);

export default mainView;