// Tested lib
import About from '../../../../src/views/pages/About';

describe('About', () => {
  it('should export properly', () => {
    expect(About).toBeDefined();
    expect(About.name).toBe('about');
    expect(About.path).toBe('/about/');
    expect(About.template).toBeDefined();
  });
});
