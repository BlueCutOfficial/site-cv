import Controller from '@ember/controller';
import { computed } from '@ember/object';

// Contrôleur de home.cv, gère l'action de switch entre le cv Français et Anglais
export default Controller.extend({

  cvs: [
    {
      'id': 0,
      'text': 'Switch to English',
      'file': '/pdf/CV_Marine_Dunstetter.pdf'
    },
    {
      'id': 1,
      'text': 'Passer en Français',
      'file': '/pdf/CV_Marine_Dunstetter_en.pdf'
    }
  ],

  index: 0,

  selected: computed('cvs', 'index', function() {
    return this.get('cvs')[this.get('index')];
  }),

  actions: {

    onSwitch() {
      let nextIndex = (this.get('index') === 0) ? 1 : 0;
      this.set('index', nextIndex);
    }
  }

});
