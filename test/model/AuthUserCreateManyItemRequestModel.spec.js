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
    describe('AuthUserCreateManyItemRequestModel', function() {
      beforeEach(function() {
        instance = new FastApi.AuthUserCreateManyItemRequestModel();
      });

      it('should create an instance of AuthUserCreateManyItemRequestModel', function() {
        // TODO: update the code to test AuthUserCreateManyItemRequestModel
        expect(instance).to.be.a(FastApi.AuthUserCreateManyItemRequestModel);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property password (base name: "password")', function() {
        // TODO: update the code to test the property password
        expect(instance).to.have.property('password');
        // expect(instance.password).to.be(expectedValueLiteral);
      });

      it('should have the property lastLogin (base name: "last_login")', function() {
        // TODO: update the code to test the property lastLogin
        expect(instance).to.have.property('lastLogin');
        // expect(instance.lastLogin).to.be(expectedValueLiteral);
      });

      it('should have the property isSuperuser (base name: "is_superuser")', function() {
        // TODO: update the code to test the property isSuperuser
        expect(instance).to.have.property('isSuperuser');
        // expect(instance.isSuperuser).to.be(expectedValueLiteral);
      });

      it('should have the property username (base name: "username")', function() {
        // TODO: update the code to test the property username
        expect(instance).to.have.property('username');
        // expect(instance.username).to.be(expectedValueLiteral);
      });

      it('should have the property lastName (base name: "last_name")', function() {
        // TODO: update the code to test the property lastName
        expect(instance).to.have.property('lastName');
        // expect(instance.lastName).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property isStaff (base name: "is_staff")', function() {
        // TODO: update the code to test the property isStaff
        expect(instance).to.have.property('isStaff');
        // expect(instance.isStaff).to.be(expectedValueLiteral);
      });

      it('should have the property isActive (base name: "is_active")', function() {
        // TODO: update the code to test the property isActive
        expect(instance).to.have.property('isActive');
        // expect(instance.isActive).to.be(expectedValueLiteral);
      });

      it('should have the property dateJoined (base name: "date_joined")', function() {
        // TODO: update the code to test the property dateJoined
        expect(instance).to.have.property('dateJoined');
        // expect(instance.dateJoined).to.be(expectedValueLiteral);
      });

      it('should have the property firstName (base name: "first_name")', function() {
        // TODO: update the code to test the property firstName
        expect(instance).to.have.property('firstName');
        // expect(instance.firstName).to.be(expectedValueLiteral);
      });

    });
  });

}));
