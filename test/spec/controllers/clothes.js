'use strict';

describe('Controller: ClothesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngappApp'));

  var ClothesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClothesCtrl = $controller('ClothesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
