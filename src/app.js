"use strict";

//import internal
import MainView           from './views/MainView.js';
import App       from './services/App.js';

//import framework7 styles
import framework7Styles   from '../node_modules/framework7/framework7.less';

//TODO: this should be injected via framework7
import MainContentStyle from './views/pages/MainContent.css';

App.init();
MainView.init();