import template from './<%= pathName %>.html';
import controller from './<%= pathName %>.controller';
import './<%= pathName %>.styl';

let <%= name %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default <%= name %>Component;
