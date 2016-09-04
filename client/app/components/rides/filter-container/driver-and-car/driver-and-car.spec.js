import DriverAndCarModule from './driver-and-car'
import DriverAndCarController from './driver-and-car.controller';
import DriverAndCarComponent from './driver-and-car.component';
import DriverAndCarTemplate from './driver-and-car.html';

describe('DriverAndCar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DriverAndCarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DriverAndCarController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(DriverAndCarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DriverAndCarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DriverAndCarTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DriverAndCarController);
      });
  });
});
