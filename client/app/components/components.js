import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Rides from './rides';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Rides
])
  
.name;

export default componentModule;
