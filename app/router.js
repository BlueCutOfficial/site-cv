import EmberRouter from '@ember/routing/router';
import config from 'site-cv/config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function() {
  this.route('home', { path: '/' }, function() {
    this.route('projects', function() {
      this.route('project', { path: ':id' });
    });
    this.route('skills');
    this.route('cv');
  });
})

export default Router
