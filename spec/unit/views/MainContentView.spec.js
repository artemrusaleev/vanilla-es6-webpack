// Internal deps
import App              from '../../../src/services/App.js';
import Home             from '../../../src/views/pages/Home.js';
import About            from '../../../src/views/pages/About.js';

// Tested lib
import MainContentView  from '../../../src/views/MainContentView.js';
import {view, init}     from '../../../src/views/MainContentView.js';

//Test helpers
import {resetView} from '../testHelpers/viewModule';

describe('MainContentView', function () {
  it('should export properly', function () {
    expect(MainContentView).toBeDefined();

    expect(MainContentView.init).toBeDefined();
    expect(init).toBeDefined();
    expect(MainContentView.init).toBe(init);

    expect(MainContentView.view).toBeDefined();
    expect(view).toBeDefined();
    expect(MainContentView.view).toBe(view);
  });

  describe('init', function () {
    let createSpy;

    beforeEach(function () {
      App.init();
      createSpy = spyOn(App.framework7.views, 'create')
        .and.returnValue({});
    });

    afterEach(function () {
      resetView(MainContentView);
    });

    it('should init main view', function () {
      expect(view).toBe(null);
      init();
      expect(view).not.toBe(null);
      expect(createSpy).toHaveBeenCalledWith(
        '.view-main-content',
        {
          routes: [
            Home,
            About
          ],
          url: '/home/'
        }
      );
    });

  });
});