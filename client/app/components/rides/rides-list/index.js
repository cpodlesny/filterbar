import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ridesListComponent from './rides-list.component';

let ridesListModule = angular.module('rides-list', [
  uiRouter
])

.component('ridesList', ridesListComponent)

.name;

export default ridesListModule;
