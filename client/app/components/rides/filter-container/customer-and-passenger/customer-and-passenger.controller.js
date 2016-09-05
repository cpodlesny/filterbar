class CustomerAndPassengerController {
  constructor() {
    this.name = 'customerAndPassenger';
  }

  querySearch (query, who) {
    let filteredQuery = [];
    _.map(this.options[who], driver => {
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

export default CustomerAndPassengerController;
