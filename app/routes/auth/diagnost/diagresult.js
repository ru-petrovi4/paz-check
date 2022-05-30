/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Route from '@ember/routing/route';

export default class AuthDiagnostDiagresultRoute extends Route {
  model({ dr_id }) {
    return this.store.findRecord('diagresult', dr_id, {
      include:
        'effectresults,causeresults,intersectresults,causeresults.subcauseresults,intersectresults.causeresult,intersectresults.effectresult,result,result.unit',
    });
  }
}
