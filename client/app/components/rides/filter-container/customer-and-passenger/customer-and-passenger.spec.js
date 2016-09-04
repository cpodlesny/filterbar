import CustomerAndPassengerModule from './customer-and-passenger'
import CustomerAndPassengerController from './customer-and-passenger.controller';
import CustomerAndPassengerComponent from './customer-and-passenger.component';
import CustomerAndPassengerTemplate from './customer-and-passenger.html';

describe('CustomerAndPassenger', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CustomerAndPassengerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CustomerAndPassengerController();
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
      expect(CustomerAndPassengerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CustomerAndPassengerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CustomerAndPassengerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CustomerAndPassengerController);
      });
  });
});
