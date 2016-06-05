'use strict';

describe('Service: getPhotosService', function () {

  // load the service's module
  beforeEach(module('aggieFeedActivitiesApp'));

  // instantiate service
  var getPhotosService;
  beforeEach(inject(function (_getPhotosService_) {
    getPhotosService = _getPhotosService_;
  }));

  it('should do something', function () {
    expect(!!getPhotosService).toBe(true);
  });

});
