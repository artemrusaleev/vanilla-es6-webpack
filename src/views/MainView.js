import {framework7}  from '../services/App.js';

import MainContent   from './pages/MainContent.js';

export let view = null;

export function init () {
  view = framework7.views.create(
    '.view-main',
    {
      routes: [
        MainContent
      ],
      url: '/mainContent/'
    }
  );
};

export default {
  get view () {
    return view;
  },
  init
};