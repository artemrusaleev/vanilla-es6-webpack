// Tested lib
import About from '../../../../src/views/pages/About.js';

describe('About', function () {
  it('should export properly', function () {
    expect(About).toBeDefined();
    expect(About.name).toBe('about');
    expect(About.path).toBe('/about/');
    expect(About.template).toBeDefined();
  });
});
