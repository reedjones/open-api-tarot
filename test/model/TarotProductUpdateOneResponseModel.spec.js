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
    describe('TarotProductUpdateOneResponseModel', function() {
      beforeEach(function() {
        instance = new FastApi.TarotProductUpdateOneResponseModel();
      });

      it('should create an instance of TarotProductUpdateOneResponseModel', function() {
        // TODO: update the code to test TarotProductUpdateOneResponseModel
        expect(instance).to.be.a(FastApi.TarotProductUpdateOneResponseModel);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property stripeProduct (base name: "stripe_product")', function() {
        // TODO: update the code to test the property stripeProduct
        expect(instance).to.have.property('stripeProduct');
        // expect(instance.stripeProduct).to.be(expectedValueLiteral);
      });

      it('should have the property stripePrice (base name: "stripe_price")', function() {
        // TODO: update the code to test the property stripePrice
        expect(instance).to.have.property('stripePrice');
        // expect(instance.stripePrice).to.be(expectedValueLiteral);
      });

      it('should have the property displayPrice (base name: "display_price")', function() {
        // TODO: update the code to test the property displayPrice
        expect(instance).to.have.property('displayPrice');
        // expect(instance.displayPrice).to.be(expectedValueLiteral);
      });

      it('should have the property deckId (base name: "deck_id")', function() {
        // TODO: update the code to test the property deckId
        expect(instance).to.have.property('deckId');
        // expect(instance.deckId).to.be(expectedValueLiteral);
      });

    });
  });

}));
