import Route from '@ember/routing/route';
import config from 'site-cv/config/environment';

export default class AppsRoute extends Route {
  model() {
    return this.store.peekAll('category').filter(function (category) {
      return category.get('keyroute') === 'apps';
    });
  }

  afterModel(_, transition) {
    if (transition.targetName.includes('apps.index')) {
      this.transitionTo('home.apps.app', config.APP.defaultProjectRoute.apps);
    }
  }
}
