import _ from 'lodash';

class FilterContainerController {
  /*@ngInject*/
  constructor(
    $log,
    $http,
    $mdPanel,
    $mdToast,
    $mdDialog
  ) {
    this._$log = $log;
    this._$http = $http;
    this._$mdPanel = $mdPanel;
    this._$mdToast = $mdToast;
    this._$mdDialog = $mdDialog;
    this._name = 'FilterContainerController';
  }
  
  $onInit () {
    this.options = {
      chips: [],
      reservationStates: [
        {
          name: 'Accepted',
          selected: false
        },
        {
          name: 'Requested',
          selected: false
        },
        {
          name: 'Started',
          selected: false
        },
        {
          name: 'Completed',
          selected: false
        },
        {
          name: 'Canceled by admin',
          selected: false
        },
        {
          name: 'Canceled by customer',
          selected: false
        },
      ],
      paymentStates:  [
        {
          name: 'Pending',
          selected: false
        },
        {
          name: 'Authorized',
          selected: false
        },
        {
          name: 'Captured',
          selected: false
        },
        {
          name: 'Canceled',
          selected: false
        }
      ],
      countries:      [
        {
          name: 'Austria',
          selected: false
        },
        {
          name: 'Belgium',
          selected: false
        },
        {
          name: 'Denmark',
          selected: false
        },
        {
          name: 'Germany',
          selected: false
        },
        {
          name: 'Spain',
          selected: false
        },
        {
          name: 'Sweden',
          selected: false
        },
      ],
      areas:          [
        {
          name: 'Austria',
          selected: false
        },
        {
          name: 'Belgium',
          selected: false
        },
        {
          name: 'Denmark',
          selected: false
        },
      ],
      drivers:        [
        {
          name: 'John Connor',
          selected: false
        },
        {
          name: 'Jason Born',
          selected: false
        },
        {
          name: 'Chuck Norris',
          selected: false
        },
      ],
      carClasses:     [
        {
          name: 'Economy',
          selected: false
        },
        {
          name: 'Business',
          selected: false
        },
        {
          name: 'Business Van',
          selected: false
        },
        {
          name: 'First Class',
          selected: false
        },
      ],
      customers:      [
        {
          name: 'Barack Obama',
          selected: false
        },
        {
          name: 'Bruce Wayne',
          selected: false
        },
        {
          name: 'Harvey Dent',
          selected: false
        },
      ],
      passengers:     [
        {
          name: 'Alfred Pennyworth',
          selected: false
        },
        {
          name: 'Joker',
          selected: false
        },
        {
          name: 'Alicia Hunt',
          selected: false
        },
      ],
      companies:      [],
      referenceCodes: [],
      commentKeyword: []
    };

    // this.getAll('countries');
    this._$log.info(`${this._name} is loaded`);
  };

  refreshFilter () {
    this.$onInit();
    this._$mdToast.show(
        this._$mdToast.simple()
            .textContent('Filter cleaned')
            .position('top right')
            .hideDelay(3000)
    );
  };

  filtering () {

    let filteredOptions = [];

    _.map(this.options, arr => {
      _.map(arr, item => {
        if(item.selected) {
          filteredOptions.push(item);
        }
      })
    });

    this._$mdToast.show(
        this._$mdToast.simple()
            .textContent('Filtering')
            .position('top right')
            .hideDelay(3000)
    );
    this._$log.debug(filteredOptions);
  }

  getAll (param) {
    return this._$http.get(`api/v2/${param}`)
        .then(res => {
          this.options[param] = res.data;
          this._$log.info(`Data ${param} fetched successfully`);
        },
        err => {
          this._$log.error(err);
        })
  };

  showMenu (event, component) {
    let position = this._$mdPanel.newPanelPosition()
        .relativeTo(`.${component}`)
        .addPanelPosition(this._$mdPanel.xPosition.ALIGN_START, this._$mdPanel.yPosition.BELOW);
    let config = {
      locals: {
        'options': this.options,
      },
      controller: ['$scope', 'options', ($scope, options) => {
        $scope.options = options;
      }],
      template:            `<${component} options="options"></${component}>`,
      position:            position,
      openFrom:            event,
      clickOutsideToClose: true,
      escapeToClose:       true,
      focusOnOpen:         false,

    };
    this._$mdPanel.open(config);
  };
}

export default FilterContainerController;

