import _ from 'lodash';

class DriverAndCarController {
  constructor() {
    this.name = 'driverAndCar';
  }

  querySearch (query) {
    let filteredQuery = [];
    _.map(this.options.drivers, driver => {
      if(driver.name.toLowerCase().includes(query.toLowerCase())) {
        filteredQuery.push({ name: driver.name });
      }
    });
    return filteredQuery;
  };

  addChips (param, index, boolean) {
    if(param === undefined) {
      return false;
    }
    if(param.selected || boolean) {
      this.options.chips.push( { name: param.name} );
    } else {
      this.options.chips.splice(index, 1);
    }
  }
}

export default DriverAndCarController;


