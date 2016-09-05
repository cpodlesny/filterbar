import template from './customer-and-passenger.html';
import controller from './customer-and-passenger.controller';
import './customer-and-passenger.styl';

let customerAndPassengerComponent = {
  restrict: 'E',
  bindings: {
    options: '<'
  },
  template,
  controller
};

export default customerAndPassengerComponent;
