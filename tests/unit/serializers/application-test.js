import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Serializer | application', function (hooks) {
  setupTest(hooks);

  test('it serializes me records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('me', {
      id: 1,
      name: 'Marine Dunstetter',
      mail: 'mdunstetter@gmail.com',
      networks: [
        {
          id: 'github',
          link: 'https://github.com/BlueCutOfficial',
          logo: '/img/logos/github.png',
        },
      ],
    });

    let serializedRecord = record.serialize();
    assert.deepEqual(serializedRecord, {
      name: 'Marine Dunstetter',
      mail: 'mdunstetter@gmail.com',
      networks: [
        {
          id: 'github',
          link: 'https://github.com/BlueCutOfficial',
          logo: '/img/logos/github.png',
        },
      ],
    });
  });
});
