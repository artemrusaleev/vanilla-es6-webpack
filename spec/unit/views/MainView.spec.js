// Internal deps
import App from '../../../src/services/App';
import MainContent from '../../../src/views/pages/MainContent';

// Tested lib
import MainView from '../../../src/views/MainView';
import { view, init } from '../../../src/views/MainView';

// Test helpers
import { resetView } from '../testHelpers/viewModule';

describe('MainView', () => {
  it('should export properly', () => {
    expect(MainView).toBeDefined();

    expect(MainView.init).toBeDefined();
    expect(init).toBeDefined();
    expect(MainView.init).toBe(init);

    expect(MainView.view).toBeDefined();
    expect(view).toBeDefined();
    expect(MainView.view).toBe(view);
  });

  describe('init', () => {
    let createSpy;

    beforeEach(() => {
      App.init();
      createSpy = spyOn(App.framework7.views, 'create')
        .and.returnValue({});
    });

    afterEach(() => {
      resetView(MainView);
    });

    it('should init main view', () => {
      expect(view).toBe(null);
      init();

      expect(view).not.toBe(null);
      expect(createSpy).toHaveBeenCalledWith(
        '.view-main',
        {
          routes: [
            MainContent,
          ],
          url: '/mainContent/',
        },
      );
    });
  });
});
