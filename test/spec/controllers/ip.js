'use strict';

describe('Controller: IpCtrl', function () {

  // load the controller's module
  beforeEach(module('ngappApp'));

  var IpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IpCtrl = $controller('IpCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
