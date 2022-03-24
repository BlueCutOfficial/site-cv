import Route from '@ember/routing/route';
import config from 'site-cv/config/environment';

export default class ArtRoute extends Route {
  model() {
    return this.store.peekAll('category').filter(function (category) {
      return category.get('keyroute') === 'art';
    });
  }

  afterModel(_, transition) {
    if (transition.targetName.includes('art.index')) {
      this.transitionTo(
        'home.art.collection',
        config.APP.defaultProjectRoute.art
      );
    }
  }
}
