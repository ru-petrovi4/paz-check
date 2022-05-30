/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';

export default class AuthConfigProjectController extends Controller {
  tabs = [
    {
      name: 'project.tabs.one',
      route: 'auth.config.project.details',
      isActive: false,
    },
    {
      name: 'project.tabs.two',
      route: 'auth.config.project.diagrams',
      isActive: false,
    },
    {
      name: 'project.tabs.three',
      route: 'auth.config.project.tags',
      isActive: false,
    },
    {
      name: 'project.tabs.four',
      route: 'auth.config.project.models',
      isActive: false,
    },
  ];
}
