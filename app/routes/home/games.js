import Route from '@ember/routing/route';
import config from 'site-cv/config/environment';

export default class GamesRoute extends Route {
  model() {
    return this.store.peekAll('category').filter(function (category) {
      return category.get('keyroute') === 'games';
    });
  }

  afterModel(_, transition) {
    if (transition.targetName.includes('games.index')) {
      this.transitionTo('home.games.game', config.APP.defaultProjectId.games);
    }
  }
}
