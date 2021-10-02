import Route from '@ember/routing/route';

export default class GamesRoute extends Route {
  model() {
    return this.store.peekAll('category').filter(function (category) {
      return category.get('keyroute') === 'games';
    });
  }

  afterModel(_, transition) {
    if (transition.targetName.includes('games.index')) {
      this.transitionTo('home.games.game', 'energycat');
    }
  }
}
