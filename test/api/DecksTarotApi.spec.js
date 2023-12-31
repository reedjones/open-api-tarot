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

  beforeEach(function() {
    instance = new FastApi.DecksTarotApi();
  });

  describe('(package)', function() {
    describe('DecksTarotApi', function() {
      describe('deleteManyByQueryDecksDelete', function() {
        it('should call deleteManyByQueryDecksDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteManyByQueryDecksDelete call and complete the assertions
          /*
          var opts = {};

          instance.deleteManyByQueryDecksDelete(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FastApi.TarotDeckDeleteManyItemListResponseModel);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteOneByPrimaryKeyDecksIdDelete', function() {
        it('should call deleteOneByPrimaryKeyDecksIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteOneByPrimaryKeyDecksIdDelete call and complete the assertions
          /*
          var opts = {};

          instance.deleteOneByPrimaryKeyDecksIdDelete(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FastApi.TarotDeckDeleteOneResponseModel);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('entireUpdateByPrimaryKeyDecksIdPut', function() {
        it('should call entireUpdateByPrimaryKeyDecksIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for entireUpdateByPrimaryKeyDecksIdPut call and complete the assertions
          /*
          var opts = {};

          instance.entireUpdateByPrimaryKeyDecksIdPut(body, id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FastApi.TarotDeckUpdateOneResponseModel);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('entireUpdateManyByQueryDecksPut', function() {
        it('should call entireUpdateManyByQueryDecksPut successfully', function(done) {
          // TODO: uncomment, update parameter values for entireUpdateManyByQueryDecksPut call and complete the assertions
          /*
          var opts = {};

          instance.entireUpdateManyByQueryDecksPut(body, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FastApi.TarotDeckUpdateManyItemListResponseModel);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getManyDecksGet', function() {
        it('should call getManyDecksGet successfully', function(done) {
          // TODO: uncomment, update parameter values for getManyDecksGet call and complete the assertions
          /*
          var opts = {};

          instance.getManyDecksGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FastApi.TarotDeckFindManyItemListResponseModel);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getOneByPrimaryKeyDecksIdGet', function() {
        it('should call getOneByPrimaryKeyDecksIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for getOneByPrimaryKeyDecksIdGet call and complete the assertions
          /*
          var opts = {};

          instance.getOneByPrimaryKeyDecksIdGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FastApi.TarotDeckFindOneResponseModel);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('insertManyDecksPost', function() {
        it('should call insertManyDecksPost successfully', function(done) {
          // TODO: uncomment, update parameter values for insertManyDecksPost call and complete the assertions
          /*

          instance.insertManyDecksPost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FastApi.TarotDeckCreateManyItemListResponseModel);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partialUpdateManyByQueryDecksPatch', function() {
        it('should call partialUpdateManyByQueryDecksPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for partialUpdateManyByQueryDecksPatch call and complete the assertions
          /*
          var opts = {};

          instance.partialUpdateManyByQueryDecksPatch(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FastApi.TarotDeckPatchManyItemListResponseModel);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('partialUpdateOneByPrimaryKeyDecksIdPatch', function() {
        it('should call partialUpdateOneByPrimaryKeyDecksIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for partialUpdateOneByPrimaryKeyDecksIdPatch call and complete the assertions
          /*
          var opts = {};

          instance.partialUpdateOneByPrimaryKeyDecksIdPatch(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FastApi.TarotDeckPatchOneResponseModel);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
