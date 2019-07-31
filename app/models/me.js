import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({
  name: attr('string'),
  title: attr('string'),
  mail: attr('string'),
  twitter: attr('string'),
  linkTwitter: attr('string'),
  linkLinkedin: attr('string'),
  linkViadeo: attr('string')
});
