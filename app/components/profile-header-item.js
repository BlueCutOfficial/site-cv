import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ProfileHeaderItemComponent extends Component {
  @service intl;

  @action
  updateLanguage(language) {
    this.intl.setLocale([language]);
  }
}
