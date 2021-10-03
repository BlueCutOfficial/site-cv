import RESTAdapter from '@ember-data/adapter/rest';

export default class ApplicationAdapter extends RESTAdapter {
  namespace = '/api';

  buildURL() {
    let url = super.buildURL(...arguments);
    return `${url}.json`;
  }
}
