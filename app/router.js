import EmberRouter from '@ember/routing/router';
import config from 'site-cv/config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('home', { path: '/' }, function() {
    this.route('apps', function() {
      this.route('app', { path: ':id' });
    });
    this.route('games', function() {
      this.route('game', { path: ':id' });
    });
    this.route('art', function() {
      this.route('collection', { path: ':id' });
    });
    this.route('cv');
  });
})

export default Router
