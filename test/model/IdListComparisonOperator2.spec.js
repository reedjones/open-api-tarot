/*
 * FastAPI
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.50
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FastApi);
  }
}(this, function(expect, FastApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('IdListComparisonOperator2', function() {
      beforeEach(function() {
        instance = new FastApi.IdListComparisonOperator2();
      });

      it('should create an instance of IdListComparisonOperator2', function() {
        // TODO: update the code to test IdListComparisonOperator2
        expect(instance).to.be.a(FastApi.IdListComparisonOperator2);
      });

    });
  });

}));
