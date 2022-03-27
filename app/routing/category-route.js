import Route from '@ember/routing/route';
import config from 'site-cv/config/environment';

export default class CategoryRoute extends Route {
  keyRoute = '';
  transitionRoute = '';

  model() {
    return this.store.peekAll('category').filter((category) => {
      return category.get('keyroute') === this.keyRoute;
    });
  }

  afterModel(_, transition) {
    if (transition.targetName.includes(`${this.keyRoute}.index`)) {
      this.transitionTo(
        this.transitionRoute,
        config.APP.defaultProjectId[this.keyRoute]
      );
    }
  }
}
