import App  from '../services/App.js';

import Home from './pages/Home.js';
import About from './pages/About.js';

var view;

var MainContentView = {
  init: function () {
    if(view) {
      return;
    }

    view = App.views.create(
      '.view-main-content',
      {
        routes: [
          Home,
          About
        ],
        url: '/home/'
      }
    );
  }
}

export default MainContentView;