// Internal deps
import MainContentView from '../../../../src/views/MainContentView';

// Tested lib
import MainContent from '../../../../src/views/pages/MainContent';

// Test helpers
import { resetView, setView } from '../../testHelpers/viewModule';

describe('MainContent', () => {
  it('should export properly', () => {
    expect(MainContent).toBeDefined();
    expect(MainContent.name).toBe('mainContent');
    expect(MainContent.path).toBe('/mainContent/');
    expect(MainContent.template).toBeDefined();
  });

  describe('pageInit', () => {
    beforeEach(() => {
      spyOn(MainContentView, 'init');
    });

    it('should init MainContentView on page init', () => {
      resetView(MainContentView);
      MainContent.on.pageInit();
      expect(MainContentView.init).toHaveBeenCalled();
    });

    it('should not reinit MainContentView when set', () => {
      setView(MainContentView, {});
      MainContent.on.pageInit();
      expect(MainContentView.init).not.toHaveBeenCalled();
    });
  });
});
