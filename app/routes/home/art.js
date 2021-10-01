import Route from '@ember/routing/route';

export default class ArtRoute extends Route {
  model() {
    return this.store.peekAll('category').filter(function (category) {
      return category.get('keyroute') === 'art';
    });
  }

  afterModel(_, transition) {
    if (transition.targetName.includes('art.index')) {
      this.transitionTo('home.art.collection', 'renard');
    }
  }
}
