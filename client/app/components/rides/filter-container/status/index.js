import angular from 'angular';
import uiRouter from 'angular-ui-router';
import statusComponent from './status.component';

let statusModule = angular.module('status', [
  uiRouter
])

.component('status', statusComponent)

.name;

export default statusModule;
