/* eslint-disable ember/no-computed-properties-in-native-classes */
import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

// Contrôleur de home.cv, gère l'action de switch entre le cv Français et Anglais
export default class CvController extends Controller {
  cvs = [
    {
      id: 0,
      text: 'Switch to English',
      file: '/pdf/CV_Marine_Dunstetter.pdf',
    },
    {
      id: 1,
      text: 'Passer en Français',
      file: '/pdf/CV_Marine_Dunstetter_en.pdf',
    },
  ];

  @tracked index = 0;

  @computed('cvs', 'index')
  get selected() {
    return this.cvs[this.index];
  }

  @action
  onSwitch() {
    this.index = this.index === 0 ? 1 : 0;
  }
}
