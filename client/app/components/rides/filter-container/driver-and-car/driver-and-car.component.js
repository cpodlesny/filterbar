import template from './driver-and-car.html';
import controller from './driver-and-car.controller';
import './driver-and-car.styl';

let driverAndCarComponent = {
  restrict: 'E',
  bindings: {
    options: '<'
  },
  template,
  controller
};


export default driverAndCarComponent;
