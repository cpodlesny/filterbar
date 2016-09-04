import CommentsAndReferenceModule from './comments-and-reference'
import CommentsAndReferenceController from './comments-and-reference.controller';
import CommentsAndReferenceComponent from './comments-and-reference.component';
import CommentsAndReferenceTemplate from './comments-and-reference.html';

describe('CommentsAndReference', () => {
  let $rootScope, makeController;

  beforeEach(window.module(CommentsAndReferenceModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new CommentsAndReferenceController();
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
      expect(CommentsAndReferenceTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = CommentsAndReferenceComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(CommentsAndReferenceTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(CommentsAndReferenceController);
      });
  });
});
