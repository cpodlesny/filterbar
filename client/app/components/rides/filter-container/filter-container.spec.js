import FilterContainerModule from './filter-container'
import FilterContainerController from './filter-container.controller';
import FilterContainerComponent from './filter-container.component';
import FilterContainerTemplate from './filter-container.html';

describe('FilterContainer', () => {
  let $rootScope, makeController;

  beforeEach(window.module(FilterContainerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new FilterContainerController();
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
      expect(FilterContainerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = FilterContainerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(FilterContainerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(FilterContainerController);
      });
  });
});
