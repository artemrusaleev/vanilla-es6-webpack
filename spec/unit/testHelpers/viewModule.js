import App from '../../../src/services/App';

export function setView(viewModule, value) {
  let noSpy = false;

  if (!App.framework7) {
    App.init();
  }

  if (!App.framework7.views.create.and) {
    noSpy = !!spyOn(App.framework7.views, 'create');
  }
  App.framework7.views.create.and.returnValue(value);

  if (viewModule.init.and) {
    viewModule.init.and.callThrough();
  }

  viewModule.init();

  if (noSpy) {
    App.framework7.views.create.and.callThrough();
  }

  if (viewModule.init.and) {
    viewModule.init.and.stub();
    viewModule.init.calls.reset();
  }
}

export function resetView(viewModule) {
  setView(viewModule, null);
}

export default {
  resetView,
  setView,
};
