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
    describe('TarotDeckPatchManyItemResponseModel', function() {
      beforeEach(function() {
        instance = new FastApi.TarotDeckPatchManyItemResponseModel();
      });

      it('should create an instance of TarotDeckPatchManyItemResponseModel', function() {
        // TODO: update the code to test TarotDeckPatchManyItemResponseModel
        expect(instance).to.be.a(FastApi.TarotDeckPatchManyItemResponseModel);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
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

      it('should have the property createdCards (base name: "created_cards")', function() {
        // TODO: update the code to test the property createdCards
        expect(instance).to.have.property('createdCards');
        // expect(instance.createdCards).to.be(expectedValueLiteral);
      });

      it('should have the property intention (base name: "intention")', function() {
        // TODO: update the code to test the property intention
        expect(instance).to.have.property('intention');
        // expect(instance.intention).to.be(expectedValueLiteral);
      });

      it('should have the property alt (base name: "alt")', function() {
        // TODO: update the code to test the property alt
        expect(instance).to.have.property('alt');
        // expect(instance.alt).to.be(expectedValueLiteral);
      });

      it('should have the property caption (base name: "caption")', function() {
        // TODO: update the code to test the property caption
        expect(instance).to.have.property('caption');
        // expect(instance.caption).to.be(expectedValueLiteral);
      });

      it('should have the property image (base name: "image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

      it('should have the property imageHeight (base name: "image_height")', function() {
        // TODO: update the code to test the property imageHeight
        expect(instance).to.have.property('imageHeight');
        // expect(instance.imageHeight).to.be(expectedValueLiteral);
      });

      it('should have the property imageWidth (base name: "image_width")', function() {
        // TODO: update the code to test the property imageWidth
        expect(instance).to.have.property('imageWidth');
        // expect(instance.imageWidth).to.be(expectedValueLiteral);
      });

      it('should have the property url (base name: "url")', function() {
        // TODO: update the code to test the property url
        expect(instance).to.have.property('url');
        // expect(instance.url).to.be(expectedValueLiteral);
      });

    });
  });

}));