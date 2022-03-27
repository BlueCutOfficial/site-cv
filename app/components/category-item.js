/* eslint-disable ember/no-computed-properties-in-native-classes */
import Component from '@glimmer/component';
import { computed } from '@ember/object';

// Categoies can show slots and/or badges
export default class CategoryItemComponent extends Component {
  model = this.args.model;

  // True if there are badges to show
  @computed('model.badges.[]')
  get hasBadges() {
    let badges = this.model.badges;
    return badges !== undefined && badges.length > 0;
  }

  //  True if there are slots to show
  @computed('model.slots.[]')
  get hasSlots() {
    let slots = this.model.slots;
    return slots !== undefined && slots.length > 0;
  }

  // Change bootstrap grid according to the case, 2 columns if needed
  @computed('hasSlots', 'hasBadges')
  get colClassSlots() {
    return this.hasSlots && this.hasBadges ? 'col-md-5' : '';
  }

  // For badges case, add borderleft aside with col-md-6 to make the separator
  @computed('hasSlots', 'hasBadges')
  get colClassBadge() {
    return this.hasSlots && this.hasBadges ? 'borderleft col-md-6' : '';
  }
}
