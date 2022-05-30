/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';
import object from '@ember/object';

export default class AuthConfigProjectTagsRoute extends Route {
  queryParams = {
    filter: {
      refreshModel: true,
    },
  };

  async model(params) {
    let prj = this.modelFor('auth.config.project');
    let prjId = await prj.get('id');
    let tags = object.create({});
    if (params.filter) {
      tags = await this.store.query('tag', params);
    }
    let actuators = this.store.query('actuator', {
      filter: "equals(project.id,'" + prjId + "')",
    });
    return object.create({
      project: prj,
      tags: tags,
      actuators: actuators,
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
