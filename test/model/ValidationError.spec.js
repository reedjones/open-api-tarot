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
    describe('ValidationError', function() {
      beforeEach(function() {
        instance = new FastApi.ValidationError();
      });

      it('should create an instance of ValidationError', function() {
        // TODO: update the code to test ValidationError
        expect(instance).to.be.a(FastApi.ValidationError);
      });

      it('should have the property loc (base name: "loc")', function() {
        // TODO: update the code to test the property loc
        expect(instance).to.have.property('loc');
        // expect(instance.loc).to.be(expectedValueLiteral);
      });

      it('should have the property msg (base name: "msg")', function() {
        // TODO: update the code to test the property msg
        expect(instance).to.have.property('msg');
        // expect(instance.msg).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

    });
  });

}));