import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dateAndTimeComponent from './date-and-time.component';

let dateAndTimeModule = angular.module('date-and-time', [
  uiRouter
])

.component('dateAndTime', dateAndTimeComponent)

.name;

export default dateAndTimeModule;
