import Route from '@ember/routing/route';
import object from '@ember/object';

export default class AuthConfigProjectDiagramsRoute extends Route {
  queryParams = {
    filter: {
      refreshModel: true,
    },
  };

  async model(params) {
    let prj = this.modelFor('auth.config.project');
    let diagrams = object.create({});
    if (params.filter) {
      diagrams = await this.store.query('diagram', params);
    } else {
      diagrams = await prj.diagrams;
    }
    return object.create({
      project: prj,
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
