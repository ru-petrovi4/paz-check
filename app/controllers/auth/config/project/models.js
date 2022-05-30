/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import Controller from '@ember/controller';

export default class AuthConfigProjectModelsController extends Controller {
  tabs = [
    {
      name: 'project.models.tabs.one',
      route: 'auth.config.project.models.actions',
      isActive: false,
    },
    {
      name: 'project.models.tabs.two',
      route: 'auth.config.project.models.safety',
      isActive: false,
    },
    {
      name: 'project.models.tabs.three',
      route: 'auth.config.project.models.failures',
      isActive: false,
    },
    {
      name: 'project.models.tabs.four',
      route: 'auth.config.project.models.actuator',
      isActive: false,
    },
  ];
}
