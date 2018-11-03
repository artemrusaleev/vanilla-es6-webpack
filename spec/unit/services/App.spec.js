// Tested lib
import Framework7 from 'framework7';
import App from '../../../src/services/App';
import { framework7, init } from '../../../src/services/App';

describe('service App', () => {
  it('should export properly', () => {
    expect(App).toBeDefined();
    expect(App.framework7).toBeDefined();
    expect(framework7).toBeDefined();
  });

  describe('init', () => {
    it('should create new Framework7 app', () => {
      init();

      expect(framework7).not.toBe(null);
      expect(framework7.constructor).toBe(Framework7);
      expect(framework7.passedParams).toEqual({
        root: '#app',
        name: 'My App',
        id: 'com.myapp.test',
        panel: { swipe: 'left' },
        routes: [],
      });
    });
  });
});
