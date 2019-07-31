import { Promise } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    return Promise.all([
      this.get('store').findAll('category'),
      this.get('store').findAll('project'),
      this.get('store').findAll('me')
    ]);
  },
  model() {
    return this.get('store').peekRecord('me', 1);
  },
  afterModel(model, transition) {
    this.transitionTo('home.cv');
  }
});
