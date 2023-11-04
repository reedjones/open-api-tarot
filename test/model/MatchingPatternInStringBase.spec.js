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
    describe('MatchingPatternInStringBase', function() {
      beforeEach(function() {
        instance = FastApi.MatchingPatternInStringBase;
      });

      it('should create an instance of MatchingPatternInStringBase', function() {
        // TODO: update the code to test MatchingPatternInStringBase
        expect(instance).to.be.a('object');
      });

      it('should have the property caseInsensitive', function() {
        expect(instance).to.have.property('caseInsensitive');
        expect(instance.caseInsensitive).to.be("case_insensitive");
      });

      it('should have the property caseSensitive', function() {
        expect(instance).to.have.property('caseSensitive');
        expect(instance.caseSensitive).to.be("case_sensitive");
      });

      it('should have the property notCaseInsensitive', function() {
        expect(instance).to.have.property('notCaseInsensitive');
        expect(instance.notCaseInsensitive).to.be("not_case_insensitive");
      });

      it('should have the property notCaseSensitive', function() {
        expect(instance).to.have.property('notCaseSensitive');
        expect(instance.notCaseSensitive).to.be("not_case_sensitive");
      });

      it('should have the property contains', function() {
        expect(instance).to.have.property('contains');
        expect(instance.contains).to.be("contains");
      });

    });
  });

}));