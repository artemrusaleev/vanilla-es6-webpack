import Framework7 from 'framework7';

export let framework7 = null;

export function init() {
  framework7 = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [],
    // ... other parameters
  });
}

export default {
  get framework7() {
    return framework7;
  },
  init,
};
