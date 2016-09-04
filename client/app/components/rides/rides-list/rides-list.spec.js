import RidesListModule from './index'
import RidesListController from './rides-list.controller';
import RidesListComponent from './rides-list.component';
import RidesListTemplate from './rides-list.html';

describe('RidesList', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RidesListModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RidesListController();
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
      expect(RidesListTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = RidesListComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(RidesListTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(RidesListController);
      });
  });
});
