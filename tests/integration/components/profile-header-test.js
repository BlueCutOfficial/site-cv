import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | profile-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<ProfileHeader @me={{hash name="My name"}} />`);
    assert.dom('.profile-header img').hasAttribute('alt', 'My name');
    assert.dom('.profile-header h1').hasText('My name');
    assert.dom('.profile-header h2').exists({ count: 1 });
  });
});
