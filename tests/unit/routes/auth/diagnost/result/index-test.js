/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | auth/diagnost/result/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:auth/diagnost/result/index');
    assert.ok(route);
  });
});
