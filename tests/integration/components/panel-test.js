import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | panel', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a default template when no id is provided', async function (assert) {
    await render(hbs`<Panel />`);
    assert
      .dom(this.element)
      .hasText(
        "I haven't written the presentation for this project yet. It should come some day 😄"
      );
  });

  test("it renders a default template when the id doesn't match any project", async function (assert) {
    await render(hbs`<Panel @id="uknown" />`);
    assert
      .dom(this.element)
      .hasText(
        "I haven't written the presentation for this project yet. It should come some day 😄"
      );
  });

  test('it renders the correct template when the id matches a project', async function (assert) {
    await render(hbs`<Panel @id="bewilderhouse" />`);
    assert.dom(this.element).includesText('Bewilder House');
  });
});
