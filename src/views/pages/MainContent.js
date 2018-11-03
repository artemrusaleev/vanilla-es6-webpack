import MainContentView from '../MainContentView.js';

export default {
  name: 'mainContent',
  path: '/mainContent/',
  template: `
    <div data-name="mainContent" class="page">
      <div class="navbar">
        <div class="navbar-inner">
          <div class="title">Awesome App</div>
        </div>
      </div>

      <div class="toolbar">
        <div class="toolbar-inner">
          <!-- Toolbar links -->
          <a href="/home/" class="link" data-view=".view-main-content">Home</a>
          <a href="/about/" class="link" data-view=".view-main-content">About</a>
        </div>
      </div>

      <div class="view view-main-content">
      </div>
    </div>
  `,
  on: {
    pageInit: function (e, page) {
      // console.log(MainContentView.view);
      if(MainContentView.view !== null) {
        return;
      }
      MainContentView.init();
    },
  }
};
