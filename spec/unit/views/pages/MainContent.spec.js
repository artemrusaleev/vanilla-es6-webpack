// Internal deps
import MainContentView  from '../../../../src/views/MainContentView.js';

// Tested lib
import MainContent      from '../../../../src/views/pages/MainContent.js';

//Test helpers
import {resetView, setView}      from '../../testHelpers/viewModule';

describe('MainContent', function () {
  it('should export properly', function () {
    expect(MainContent).toBeDefined();
    expect(MainContent.name).toBe('mainContent');
    expect(MainContent.path).toBe('/mainContent/');
    expect(MainContent.template).toBeDefined();
  });

  describe('pageInit', function () {
    beforeEach(function () {
      spyOn(MainContentView, 'init');
    });

    it('should init MainContentView on page init', function () {
      resetView(MainContentView);
      MainContent.on.pageInit();
      expect(MainContentView.init).toHaveBeenCalled();
    });

    it('should not reinit MainContentView when set', function () {
      setView(MainContentView, {});
      MainContent.on.pageInit();
      expect(MainContentView.init).not.toHaveBeenCalled();
    });
  });
});
