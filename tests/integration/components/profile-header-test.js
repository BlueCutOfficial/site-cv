import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Integration | Component | profile-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<ProfileHeader @me={{hash name="My name"}} />`);
    assert.dom('.profile-header img').hasAttribute('alt', 'My name');
    assert.dom('.profile-header h1').hasText('My name');
    assert.dom('.profile-header h2').exists({ count: 1 });
  });

  test('it passes a11yAudit', async function (assert) {
    await render(hbs`<ProfileHeader @me={{hash name="My name"}} />`);
    await a11yAudit(this.element);
    assert.ok(true, 'no a11y errors found');
  });
});
