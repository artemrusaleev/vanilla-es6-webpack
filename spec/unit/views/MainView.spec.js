// Internal deps
import App          from '../../../src/services/App.js';
import MainContent  from '../../../src/views/pages/MainContent.js';

// Tested lib
import MainView     from '../../../src/views/MainView.js';
import {view, init} from '../../../src/views/MainView.js';

//Test helpers
import {resetView} from '../testHelpers/viewModule';

describe('MainView', function () {
  it('should export properly', function () {
    expect(MainView).toBeDefined();

    expect(MainView.init).toBeDefined();
    expect(init).toBeDefined();
    expect(MainView.init).toBe(init);

    expect(MainView.view).toBeDefined();
    expect(view).toBeDefined();
    expect(MainView.view).toBe(view);
  });

  describe('init', function () {
    let createSpy;

    beforeEach(function () {
      App.init();
      createSpy = spyOn(App.framework7.views, 'create')
        .and.returnValue({});
    });

    afterEach(function () {
      resetView(MainView);
    });

    it('should init main view', function () {
      expect(view).toBe(null);
      init();
      expect(view).not.toBe(null);
      expect(createSpy).toHaveBeenCalledWith(
        '.view-main',
        {
          routes: [
            MainContent
          ],
          url: '/mainContent/'
        }
      );
    });

  });
});