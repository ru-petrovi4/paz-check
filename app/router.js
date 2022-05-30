/*
 * Copyright (c) 2021.
 * All rights reserved by Simcode
 */

import EmberRouter from '@ember/routing/router';
import config from 'pazcheckwebapp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('logout');
  this.route('auth', { path: '' }, function () {
    this.route('admin', function () {
      this.route('users');
      this.route('office');
      this.route('licence');
    });
    this.route('inspector', { path: 'inspector/:id' });
    this.route('diagnost', { path: 'diagnost/:u_id' }, function () {
      this.route('addanalyse');
      this.route('calculate', { path: 'calculate/:log_id' });
      this.route('result', { path: 'result/:r_id' }, function () {
        this.route('diagrams');
        this.route('timeline');
      });
      this.route('diagresult', { path: 'diagresult/:dr_id' });
    });
    this.route('tester', { path: 'tester/:id' });
    this.route('safety', { path: 'safety/:unit_id' });
    this.route('helper', { path: 'helper/:id' });
    this.route('config', { path: 'config/:unit_id' }, function () {
      this.route('projects');
      this.route('project', { path: 'project/:prj_id' }, function () {
        this.route('details');
        this.route('models', function () {
          this.route('actions');
          this.route('safety');
          this.route('failures');
          this.route('actuator', function () {
            this.route('details', { path: ':a_id' });
          });
        });
        this.route('diagrams');
        this.route('tags', function () {
          this.route('tag', { path: ':tag_id' });
        });
      });
      this.route('diagram', { path: 'diagram/:d_id' });
    });
  });
});
