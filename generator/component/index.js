import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= pathName %>.component';

let <%= name %>Module = angular.module('<%= pathName %>', [
  uiRouter
])

.component('<%= name %>', <%= name %>Component)

.name;

export default <%= name %>Module;
