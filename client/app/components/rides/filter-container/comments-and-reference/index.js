import angular from 'angular';
import uiRouter from 'angular-ui-router';
import commentsAndReferenceComponent from './comments-and-reference.component';

let commentsAndReferenceModule = angular.module('comments-and-reference', [
  uiRouter
])

.component('commentsAndReference', commentsAndReferenceComponent)

.name;

export default commentsAndReferenceModule;
