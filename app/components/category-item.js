import Component from '@ember/component';
import { computed } from '@ember/object';

// les catégories affichent des slots et/ou badges
export default Component.extend({
  classNames: ['category-item', 'custombox--large'],
  // Vrai s'il y a des badges à afficher pour cette catégorie
  hasBadges: computed('model', function() {
    let badges = this.get('model.badges');
    return (badges !== undefined && badges.length > 0);
  }),
  // Vrai s'il y a des slots à afficher pour cette catégorie
  hasSlots: computed('model', function() {
    let slots = this.get('model.slots');
    return (slots !== undefined && slots.length > 0);
  }),
  // On change la classe bootstrap selon les listes existantes, pour faire deux colonnes si besoin
  colClassSlots: computed('hasSlots', 'hasBadges', function() {
    return (this.get('hasSlots') && this.get('hasBadges')) ? 'col-md-5' : '';
  }),
  // Dans le cas des badges, on ajoute borderleft en plus de col-md-6, pour faire la séparation
  colClassBadge: computed('hasSlots', 'hasBadges', function() {
    return (this.get('hasSlots') && this.get('hasBadges')) ? 'borderleft col-md-6' : '';
  })
});
