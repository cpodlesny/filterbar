import angular from 'angular';
import filterContainerComponent from './filter-container.component';
import statusModule from './status';
import customerAndPassengerModule from './customer-and-passenger';
import driverAndCarModule from './driver-and-car';
import dateAndTimeModule from './date-and-time';
import areasModule from './areas';
import commentsAndReferenceModule from './comments-and-reference';

let filterContainerModule = angular.module('filter-container', [
    statusModule,
    customerAndPassengerModule,
    driverAndCarModule,
    dateAndTimeModule,
    areasModule,
    commentsAndReferenceModule
])
    .component('filterContainer', filterContainerComponent)

    .name;

export default filterContainerModule;


