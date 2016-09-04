import template from './date-and-time.html';
import controller from './date-and-time.controller';
import './date-and-time.styl';

let dateAndTimeComponent = {
  restrict: 'E',
  bindings: {
    options: '<'
  },
  template,
  controller
};

export default dateAndTimeComponent;
