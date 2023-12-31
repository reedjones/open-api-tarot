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
import {ApiClient} from '../ApiClient';

/**
 * The TarotProductCreateManyItemResponseModel model module.
 * @module model/TarotProductCreateManyItemResponseModel
 * @version 0.1.0
 */
export class TarotProductCreateManyItemResponseModel {
  /**
   * Constructs a new <code>TarotProductCreateManyItemResponseModel</code>.
   * auto gen by FastApi quick CRUD
   * @alias module:model/TarotProductCreateManyItemResponseModel
   * @class
   * @param id {Number} 
   * @param stripeProduct {String} 
   * @param stripePrice {String} 
   * @param displayPrice {Number} 
   * @param deckId {Number} 
   */
  constructor(id, stripeProduct, stripePrice, displayPrice, deckId) {
    this.id = id;
    this.stripeProduct = stripeProduct;
    this.stripePrice = stripePrice;
    this.displayPrice = displayPrice;
    this.deckId = deckId;
  }

  /**
   * Constructs a <code>TarotProductCreateManyItemResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TarotProductCreateManyItemResponseModel} obj Optional instance to populate.
   * @return {module:model/TarotProductCreateManyItemResponseModel} The populated <code>TarotProductCreateManyItemResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TarotProductCreateManyItemResponseModel();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('stripe_product'))
        obj.stripeProduct = ApiClient.convertToType(data['stripe_product'], 'String');
      if (data.hasOwnProperty('stripe_price'))
        obj.stripePrice = ApiClient.convertToType(data['stripe_price'], 'String');
      if (data.hasOwnProperty('display_price'))
        obj.displayPrice = ApiClient.convertToType(data['display_price'], 'Number');
      if (data.hasOwnProperty('deck_id'))
        obj.deckId = ApiClient.convertToType(data['deck_id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
TarotProductCreateManyItemResponseModel.prototype.id = undefined;

/**
 * @member {String} stripeProduct
 */
TarotProductCreateManyItemResponseModel.prototype.stripeProduct = undefined;

/**
 * @member {String} stripePrice
 */
TarotProductCreateManyItemResponseModel.prototype.stripePrice = undefined;

/**
 * @member {Number} displayPrice
 */
TarotProductCreateManyItemResponseModel.prototype.displayPrice = undefined;

/**
 * @member {Number} deckId
 */
TarotProductCreateManyItemResponseModel.prototype.deckId = undefined;

