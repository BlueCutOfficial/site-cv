import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  keyroute: attr('string'),
  name: attr('string'),
  sprite: attr('string'),
  slots: attr(),
  badges: attr()
});
