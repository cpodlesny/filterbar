import DateAndTimeModule from './date-and-time'
import DateAndTimeController from './date-and-time.controller';
import DateAndTimeComponent from './date-and-time.component';
import DateAndTimeTemplate from './date-and-time.html';

describe('DateAndTime', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DateAndTimeModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DateAndTimeController();
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
      expect(DateAndTimeTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DateAndTimeComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DateAndTimeTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DateAndTimeController);
      });
  });
});
