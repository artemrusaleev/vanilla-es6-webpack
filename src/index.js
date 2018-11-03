

// import internal
import MainView from './views/MainView';
import App from './services/App';

// import framework7 styles
import framework7Styles from '../node_modules/framework7/framework7.less'; // eslint-disable-line no-unused-vars

// TODO: this should be injected via framework7
import MainContentStyle from './views/pages/MainContent.css'; // eslint-disable-line no-unused-vars

App.init();
MainView.init();
