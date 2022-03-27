import CategoryRoute from 'site-cv/routing/category-route';

export default class GamesRoute extends CategoryRoute {
  keyRoute = 'games';
  transitionRoute = 'home.games.game';
}
