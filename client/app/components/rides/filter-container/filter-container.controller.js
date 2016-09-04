class FilterContainerController {
  /*@ngInject*/
  constructor(
    $log,
    $http,
    $mdPanel,
    $mdToast
  ) {
    this._$log = $log;
    this._$http = $http;
    this._$mdPanel = $mdPanel;
    this._$mdToast = $mdToast;
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
      paymentStates: [
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
        { name: 'Austria' },
        { name: 'Belgium' },
        { name: 'Denmark' },
      ],
      drivers:        [],
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
      customers:      [],
      passengers:     [],
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
    this._$mdToast.show(
        this._$mdToast.simple()
            .textContent('Filtering')
            .position('top right')
            .hideDelay(3000)
    );
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

