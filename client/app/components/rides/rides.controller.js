class RidesController {
  /*@ngInject*/
  constructor(
    $log,
    $mdDialog
  ) {
    this._$log = $log;
    this._$mdDialog = $mdDialog;
    this._name = 'RidesController';
  }

  $onInit () {
    this._$log.info(`${this._name} is loaded`);
  }
}

export default RidesController;
