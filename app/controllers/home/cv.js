/* eslint-disable ember/no-computed-properties-in-native-classes */
import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

// Contrôleur de home.cv, gère l'action de switch entre le cv Français et Anglais
export default class CvController extends Controller {
  cvs = [
    {
      id: 1,
      file: '/pdf/CV_Marine_Dunstetter_en.pdf',
    },
  ];

  @tracked index = 0;

  @computed('cvs', 'index')
  get selected() {
    return this.cvs[this.index];
  }

}
