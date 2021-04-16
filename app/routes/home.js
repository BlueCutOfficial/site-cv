import { Promise } from 'rsvp';
import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  beforeModel() {
    return Promise.all([
      this.store.findAll('category'),
      this.store.findAll('project'),
      this.store.findAll('me'),
    ]);
  }

  model() {
    return this.store.peekRecord('me', 1);
  }

  afterModel(_, transition) {
    if (transition.targetName === 'home') {
      this.transitionTo('home.cv');
    }
  }
}
