import template from './comments-and-reference.html';
import controller from './comments-and-reference.controller';
import './comments-and-reference.styl';

let commentsAndReferenceComponent = {
  restrict: 'E',
  bindings: {
    options: '<'
  },
  template,
  controller
};

export default commentsAndReferenceComponent;
