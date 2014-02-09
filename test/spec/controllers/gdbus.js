'use strict';

describe('Controller: GdbusCtrl', function () {

  // load the controller's module
  beforeEach(module('ngappApp'));

  var GdbusCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GdbusCtrl = $controller('GdbusCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
