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
    describe('BodyPartialUpdateOneByPrimaryKeyCardsIdPatch', function() {
      beforeEach(function() {
        instance = new FastApi.BodyPartialUpdateOneByPrimaryKeyCardsIdPatch();
      });

      it('should create an instance of BodyPartialUpdateOneByPrimaryKeyCardsIdPatch', function() {
        // TODO: update the code to test BodyPartialUpdateOneByPrimaryKeyCardsIdPatch
        expect(instance).to.be.a(FastApi.BodyPartialUpdateOneByPrimaryKeyCardsIdPatch);
      });

      it('should have the property uid (base name: "uid")', function() {
        // TODO: update the code to test the property uid
        expect(instance).to.have.property('uid');
        // expect(instance.uid).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property description (base name: "description")', function() {
        // TODO: update the code to test the property description
        expect(instance).to.have.property('description');
        // expect(instance.description).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property updated (base name: "updated")', function() {
        // TODO: update the code to test the property updated
        expect(instance).to.have.property('updated');
        // expect(instance.updated).to.be(expectedValueLiteral);
      });

      it('should have the property _number (base name: "number")', function() {
        // TODO: update the code to test the property _number
        expect(instance).to.have.property('_number');
        // expect(instance._number).to.be(expectedValueLiteral);
      });

      it('should have the property jsonData (base name: "json_data")', function() {
        // TODO: update the code to test the property jsonData
        expect(instance).to.have.property('jsonData');
        // expect(instance.jsonData).to.be(expectedValueLiteral);
      });

      it('should have the property cardId (base name: "card_id")', function() {
        // TODO: update the code to test the property cardId
        expect(instance).to.have.property('cardId');
        // expect(instance.cardId).to.be(expectedValueLiteral);
      });

      it('should have the property deckId (base name: "deck_id")', function() {
        // TODO: update the code to test the property deckId
        expect(instance).to.have.property('deckId');
        // expect(instance.deckId).to.be(expectedValueLiteral);
      });

      it('should have the property order (base name: "_order")', function() {
        // TODO: update the code to test the property order
        expect(instance).to.have.property('order');
        // expect(instance.order).to.be(expectedValueLiteral);
      });

    });
  });

}));
