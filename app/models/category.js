import Model, { attr } from '@ember-data/model';

export default class CategoryModel extends Model {
  @attr('string') keyroute;
  @attr('string') name;
  @attr('string') sprite;
  @attr slots;
  @attr badges;
}
