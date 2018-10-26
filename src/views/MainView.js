import App  from '../services/App.js';

import MainContent from './pages/MainContent.js';

var MainView = {
  _view: null,
  init: function () {
    if (this._view) {
      return;
    }

    this._view = App.views.create(
      '.view-main',
      {
        routes: [
          MainContent
        ],
        url: '/mainContent/'
      }
    );
  }
};

export default MainView;