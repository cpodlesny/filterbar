class AreasController {
  constructor() {
    this.name = 'areas';
  }

  addChips (param, index) {
    if(param.selected) {
      this.options.chips.push( { name: param.name} );
    } else {
      this.options.chips.slice(index, 1);
    }
  }
}

export default AreasController;



