import RidesModule from './rides'
import RidesController from './rides.controller';
import RidesComponent from './rides.component';
import RidesTemplate from './rides.html';

describe('Rides', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RidesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RidesController();
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
      expect(RidesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RidesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RidesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RidesController);
      });
  });
});
