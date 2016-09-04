import angular from 'angular';
import uiRouter from 'angular-ui-router';
import areasComponent from './areas.component';

let areasModule = angular.module('areas', [
  uiRouter
])

.component('areas', areasComponent)

.name;

export default areasModule;
