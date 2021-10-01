import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HomeController extends Controller {
  @service intl;

  get cvSlots() {
    return this.store.peekRecord('category', 1).get('slots');
  }

  @action
  updateLanguage(language) {
    this.intl.setLocale([language]);
  }
}
