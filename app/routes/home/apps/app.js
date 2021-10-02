import Route from '@ember/routing/route';
import { getOwner } from '@ember/application';

export default class AppsAppRoute extends Route {
  model(params) {
    this.templateName = params.id;
    return this.store.peekRecord('project', params.id);
  }

  renderTemplate() {
    let panelName = `panels.${this.templateName}`;
    if (getOwner(this).lookup(`template:${panelName}`) === undefined) {
      panelName = 'panels.default';
    }
    this.render(panelName);
  }
}
