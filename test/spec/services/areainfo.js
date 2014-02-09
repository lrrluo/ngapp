'use strict';

describe('Service: Areainfo', function () {

  // load the service's module
  beforeEach(module('ngappApp'));

  // instantiate service
  var Areainfo;
  beforeEach(inject(function (_Areainfo_) {
    Areainfo = _Areainfo_;
  }));

  it('should do something', function () {
    expect(!!Areainfo).toBe(true);
  });

});
