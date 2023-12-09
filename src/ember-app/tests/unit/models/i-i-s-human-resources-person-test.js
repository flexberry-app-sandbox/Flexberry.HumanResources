import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-human-resources-person', 'Unit | Model | i-i-s-human-resources-person', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-human-resources-company',
    'model:i-i-s-human-resources-person-position',
    'model:i-i-s-human-resources-person',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
