/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';

export default class AuthDiagnostResultController extends Controller {
  tabs = [
    {
      name: 'diagnost.tabs.diagrams',
      route: 'auth.diagnost.result.diagrams',
      isActive: true,
    },
    {
      name: 'diagnost.tabs.timeline',
      route: 'auth.diagnost.result.timeline',
      isActive: false,
    },
  ];
}
