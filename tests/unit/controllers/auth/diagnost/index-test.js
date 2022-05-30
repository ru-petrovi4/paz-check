/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | auth/diagnost/index', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:auth/diagnost/index');
    assert.ok(controller);
  });
});
