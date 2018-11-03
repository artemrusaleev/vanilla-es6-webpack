// Tested lib
import App          from '../../../src/services/App.js';
import {framework7, init} from '../../../src/services/App.js';
import Framework7   from 'framework7';

describe('service App', function () {
  it('should export properly', function () {
    expect(App).toBeDefined();
    expect(App.framework7).toBeDefined();
    expect(framework7).toBeDefined();
  });

  describe('init', function () {
    it('should create new Framework7 app', function () {

      init();

      expect(framework7).not.toBe(null);
      expect(framework7.constructor).toBe(Framework7);
      expect(framework7.passedParams).toEqual({
        root: '#app',
        name: 'My App',
        id: 'com.myapp.test',
        panel: { swipe: 'left' },
        routes: []
      });
    });
  });
});
