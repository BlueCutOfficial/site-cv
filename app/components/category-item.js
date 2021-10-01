/* eslint-disable ember/no-computed-properties-in-native-classes */
import Component from '@glimmer/component';
import { computed } from '@ember/object';

// les catégories affichent des slots et/ou badges
export default class CategoryItemComponent extends Component {
  model = this.args.model;

  // Vrai s'il y a des badges à afficher pour cette catégorie
  @computed('model.badges.[]')
  get hasBadges() {
    let badges = this.model.badges;
    return badges !== undefined && badges.length > 0;
  }

  // Vrai s'il y a des slots à afficher pour cette catégorie
  @computed('model.slots.[]')
  get hasSlots() {
    let slots = this.model.slots;
    return slots !== undefined && slots.length > 0;
  }

  // On change la classe bootstrap selon les listes existantes, pour faire deux colonnes si besoin
  @computed('hasSlots', 'hasBadges')
  get colClassSlots() {
    return this.hasSlots && this.hasBadges ? 'col-md-5' : '';
  }
  // Dans le cas des badges, on ajoute borderleft en plus de col-md-6, pour faire la séparation
  @computed('hasSlots', 'hasBadges')
  get colClassBadge() {
    return this.hasSlots && this.hasBadges ? 'borderleft col-md-6' : '';
  }
}
