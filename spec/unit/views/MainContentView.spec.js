// Internal deps
import App from '../../../src/services/App';
import Home from '../../../src/views/pages/Home';
import About from '../../../src/views/pages/About';

// Tested lib
import MainContentView from '../../../src/views/MainContentView';
import { view, init } from '../../../src/views/MainContentView';

// Test helpers
import { resetView } from '../testHelpers/viewModule';

describe('MainContentView', () => {
  it('should export properly', () => {
    expect(MainContentView).toBeDefined();

    expect(MainContentView.init).toBeDefined();
    expect(init).toBeDefined();
    expect(MainContentView.init).toBe(init);

    expect(MainContentView.view).toBeDefined();
    expect(view).toBeDefined();
    expect(MainContentView.view).toBe(view);
  });

  describe('init', () => {
    let createSpy;

    beforeEach(() => {
      App.init();
      createSpy = spyOn(App.framework7.views, 'create')
        .and.returnValue({});
    });

    afterEach(() => {
      resetView(MainContentView);
    });

    it('should init main view', () => {
      expect(view).toBe(null);
      init();

      expect(view).not.toBe(null);
      expect(createSpy).toHaveBeenCalledWith(
        '.view-main-content',
        {
          routes: [
            Home,
            About,
          ],
          url: '/home/',
        },
      );
    });
  });
});
