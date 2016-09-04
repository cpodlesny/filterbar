import angular from 'angular';
import uiRouter from 'angular-ui-router';
import driverAndCarComponent from './driver-and-car.component';

let driverAndCarModule = angular.module('driver-and-car', [
  uiRouter
])

.component('driverAndCar', driverAndCarComponent)

.name;

export default driverAndCarModule;
