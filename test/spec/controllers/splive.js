'use strict';

describe('Controller: SpliveCtrl', function () {

  // load the controller's module
  beforeEach(module('ngappApp'));

  var SpliveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpliveCtrl = $controller('SpliveCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
