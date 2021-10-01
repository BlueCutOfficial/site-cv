import { Promise } from 'rsvp';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class HomeRoute extends Route {
  @service intl;

  beforeModel() {
    this.intl.setLocale(['en-us']);
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
    if (transition.targetName === 'home.index') {
      this.transitionTo('home.cv');
    }
  }
}
