/* eslint-disable ember/no-computed-properties-in-native-classes */
import Component from '@glimmer/component';

// Categoies can show slots and/or badges
export default class CategoryComponent extends Component {
  get hasBadges() {
    let badges = this.args.model.badges;
    return badges !== undefined && badges.length > 0;
  }

  get hasSlots() {
    let slots = this.args.model.slots;
    return slots !== undefined && slots.length > 0;
  }

  // Change bootstrap grid according to the case, 2 columns if needed
  get colClassSlots() {
    return this.hasSlots && this.hasBadges ? 'col-md-5' : '';
  }

  // For badges case, add borderleft aside with col-md-6 to make the separator
  get colClassBadge() {
    return this.hasSlots && this.hasBadges ? 'borderleft col-md-6' : '';
  }
}
