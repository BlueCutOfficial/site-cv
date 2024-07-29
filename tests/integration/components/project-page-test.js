import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-cv/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | project-page', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('categories', [
      {
        "id": "consulting",
        "keyroute": "apps",
        "slotRoute": "home.apps.app",
        "sprite": "/img/icons/icon-diploma.png",
      },
      {
        "id": "projectDevelopment",
        "keyroute": "apps",
        "slotRoute": "home.apps.app",
        "sprite": "/img/icons/icon-cv.png",
      },
    ]);

    await render(hbs`
      <ProjectPage
        @pageTitle="Title"
        @model= {{this.categories}}
      >
        Project template
      </ProjectPage>
    `);

    assert.dom('[data-test-category]').exists({ count: 2 });
    assert.dom('[data-test-category="consulting"]').exists();
    assert.dom('[data-test-category="projectDevelopment"]').exists();
    assert.dom('[data-test-content]').hasText('Project template');
  });
});
