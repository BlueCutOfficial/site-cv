import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').peekAll('category').filter(function(category) {
      return (category.get('keyroute') === 'projects');
    });
  }
});
