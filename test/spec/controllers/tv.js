'use strict';

describe('Controller: TvCtrl', function () {

  // load the controller's module
  beforeEach(module('ngappApp'));

  var TvCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TvCtrl = $controller('TvCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
