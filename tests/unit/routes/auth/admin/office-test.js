import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | auth/admin/office', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:auth/admin/office');
    assert.ok(route);
  });
});
