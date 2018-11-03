// Tested lib
import Home from '../../../../src/views/pages/Home.js';

describe('Home', function () {
  it('should export properly', function () {
    expect(Home).toBeDefined();
    expect(Home.name).toBe('home');
    expect(Home.path).toBe('/home/');
    expect(Home.template).toBeDefined();
  });
});
