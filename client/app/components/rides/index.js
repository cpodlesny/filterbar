import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ridesComponent from './rides.component';
import filterContainerModule from './filter-container';
import ridesListModule from './rides-list';

let ridesModule = angular.module('rides', [
  uiRouter,
  filterContainerModule,
    ridesListModule
])
  .config(($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('rides', {
        url: '/rides',
        component: 'rides'
      });
  })

  .component('rides', ridesComponent)

  .name;

export default ridesModule;
