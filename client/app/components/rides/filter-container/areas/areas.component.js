import template from './areas.html';
import controller from './areas.controller';
import './areas.styl';

let areasComponent = {
  restrict: 'E',
  bindings: {
    options: '<'
  },
  template,
  controller
};

export default areasComponent;
