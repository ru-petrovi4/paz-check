/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class AuthConfigDiagramRoute extends Route {
  model({ d_id }) {
    return this.store.findRecord('diagram', d_id, {
      include:
        'causes,effects,intersections,intersections.cause,intersections.effect,intersections.effect.identity,effects.identity.tag,causes.identities.tag',
    });
  }

  @action
  loading(transition) {
    let start = new Date();
    transition.promise.finally(() => {
      debugger;
      alert(`Took ${new Date() - start}ms to load`);
    });

    return true;
  }
}
