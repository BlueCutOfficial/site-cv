import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import config from 'site-cv/config/environment';
import cases from 'qunit-parameterize';

module('Acceptance | navigation', function (hooks) {
  setupApplicationTest(hooks);

  test('it redirects to /cv when visiting /', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/cv');
    assert.dom('[data-test-menu-item="home.cv"] a').hasClass('active');
  });

  test('it visits /cv', async function (assert) {
    await visit('/cv');
    assert.equal(currentURL(), '/cv');
    assert.dom('[data-test-menu-item="home.cv"] a').hasClass('active');
  });

  cases(['apps', 'games', 'art']).test(
    'it redirects to the default project route when visiting a parent route',
    async function (parentRoute, assert) {
      let defaultProjectId = config.APP.defaultProjectId[parentRoute];
      await visit(`/${parentRoute}`);
      assert.equal(currentURL(), `/${parentRoute}/${defaultProjectId}`);
      assert
        .dom(`[data-test-menu-item="home.${parentRoute}"] a`)
        .hasClass('active');
      assert
        .dom(`[data-test-project-menu-item="${defaultProjectId}"] a`)
        .hasClass('active');
    }
  );

  cases([
    { parentRoute: 'apps', projectId: 'formidable' },
    { parentRoute: 'games', projectId: 'reef' },
    { parentRoute: 'art', projectId: 'travel' },
  ]).test(
    'it visits a project route',
    async function ({ parentRoute, projectId }, assert) {
      await visit(`/${parentRoute}/${projectId}`);
      assert.equal(currentURL(), `/${parentRoute}/${projectId}`);
      assert
        .dom(`[data-test-menu-item="home.${parentRoute}"] a`)
        .hasClass('active');
      assert
        .dom(`[data-test-project-menu-item="${projectId}"] a`)
        .hasClass('active');
    }
  );
});
