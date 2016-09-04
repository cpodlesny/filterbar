import template from './status.html';
import controller from './status.controller';
import './status.styl';

let statusComponent = {
  restrict: 'E',
  bindings: {
    options: '<'
  },
  template,
  controller
};

export default statusComponent;
