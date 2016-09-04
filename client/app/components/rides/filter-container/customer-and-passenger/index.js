import angular from 'angular';
import uiRouter from 'angular-ui-router';
import customerAndPassengerComponent from './customer-and-passenger.component';

let customerAndPassengerModule = angular.module('customer-and-passenger', [
  uiRouter
])

.component('customerAndPassenger', customerAndPassengerComponent)

.name;

export default customerAndPassengerModule;
