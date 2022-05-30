/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';
import object from '@ember/object';

export default class AuthDiagnostResultDiagramsRoute extends Route {
  queryParams = {
    filter: {
      refreshModel: true,
    },
  };

  async model(params) {
    let result = this.modelFor('auth.diagnost.result');
    let diagrams = object.create({});
    if (params.filter) {
      diagrams = await this.store.query('diagresult', params);
    } else {
      diagrams = await result.diagresults;
    }
    return object.create({
      result: result,
      diagrams: diagrams,
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    if (controller.filter) {
      let sresult = controller.filter.match(/name,'(\w+)'/);
      if (sresult) {
        controller.searchString = sresult[1];
      }
    }
  }
}
