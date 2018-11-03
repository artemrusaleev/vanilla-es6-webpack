// Tested lib
import Home from '../../../../src/views/pages/Home';

describe('Home', () => {
  it('should export properly', () => {
    expect(Home).toBeDefined();
    expect(Home.name).toBe('home');
    expect(Home.path).toBe('/home/');
    expect(Home.template).toBeDefined();
  });
});
