import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

angular.module('app', [
    ngAria,
    ngAnimate,
    ngMaterial,
    uiRouter,
    Common,
    Components
])

    .config(
        (
            $locationProvider,
            $mdIconProvider,
            $mdThemingProvider
        ) => {
            'ngInject';

            $mdThemingProvider.theme('default')
                .primaryPalette('grey')
                .accentPalette('blue-grey');

            $mdThemingProvider.theme('altTheme')
                .primaryPalette('green');

            $mdThemingProvider.theme('checkBox')
                .primaryPalette('blue')
                .accentPalette('blue');

            $locationProvider.html5Mode(true).hashPrefix('!');

            $mdIconProvider
                .icon('close', 'assets/img/ic_close_black_24px.svg', 24)
                .icon('menu', 'assets/img/ic_menu_black_24px.svg', 24)
                .icon('arrow drop down', 'assets/img/ic_arrow_drop_down_black_24px.svg', 24)
                .icon('filter_list', 'assets/img/ic_filter_list_black_24px.svg', 24)
                .icon('access_time', 'assets/img/ic_access_time_black_24px.svg', 24)

        })

    .component('app', AppComponent);



