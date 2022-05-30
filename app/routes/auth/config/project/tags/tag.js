import Route from '@ember/routing/route';

export default class AuthConfigProjectTagsTagRoute extends Route {
  async model({ tag_id }) {
    return this.store.findRecord('tag', tag_id, { include: 'identities' });
  }
}
