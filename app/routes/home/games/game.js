import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';

export default Route.extend({
  model(params) {
    this.set('templateName', params.id);
    return this.get('store').peekRecord('project', params.id);
  },
  renderTemplate() {
    let panelName = `panels.${this.get('templateName')}`;
    if (getOwner(this).lookup(`template:${panelName}`) === undefined) {
      panelName = 'panels.default';
    }
    this.render(panelName);
  }
});
