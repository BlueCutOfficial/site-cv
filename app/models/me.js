import Model, { attr } from '@ember-data/model';

export default class MeModel extends Model {
  @attr('string') name;
  @attr('string') mail;
  @attr networks;
}
