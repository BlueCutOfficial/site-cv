import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  cvSlots: computed(function() {
    return this.get('store').peekRecord('category', 1).get('slots');
  })
});
