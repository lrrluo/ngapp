'use strict';

describe('Service: Localstorage', function () {

  // load the service's module
  beforeEach(module('ngappApp'));

  // instantiate service
  var Localstorage;
  beforeEach(inject(function (_Localstorage_) {
    Localstorage = _Localstorage_;
  }));

  it('should do something', function () {
    expect(!!Localstorage).toBe(true);
  });

});
