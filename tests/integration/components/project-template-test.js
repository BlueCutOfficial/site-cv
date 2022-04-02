import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | project-template', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the title and intro for the given @projectId', async function (assert) {
    await render(hbs`<ProjectTemplate @projectId="reef" />`);
    assert.dom('h1').hasText('Reef');
    assert
      .dom('p')
      .exists({ count: 1 })
      .includesText('A relaxing serious game inspired by Biorock technology.');

    await render(hbs`
      <ProjectTemplate @projectId="reef">
        <p class="desc">Project custom description.</p>
      </ProjectTemplate>
    `);
    assert.dom('h1').hasText('Reef');
    assert.dom('p').exists({ count: 2 });
    assert.dom('.desc').hasText('Project custom description.');
  });

  test('it provides a positional param for translation key', async function (assert) {
    await render(hbs`
      <ProjectTemplate @projectId="reef" as |tkey|>
        <p class="key">{{tkey}}</p>
      </ProjectTemplate>
    `);
    assert.dom('.key').hasText('category.slot.reef.');
  });
});
