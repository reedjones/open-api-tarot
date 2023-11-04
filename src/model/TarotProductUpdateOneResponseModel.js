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
 * The TarotProductUpdateOneResponseModel model module.
 * @module model/TarotProductUpdateOneResponseModel
 * @version 0.1.0
 */
export class TarotProductUpdateOneResponseModel {
  /**
   * Constructs a new <code>TarotProductUpdateOneResponseModel</code>.
   * auto gen by FastApi quick CRUD
   * @alias module:model/TarotProductUpdateOneResponseModel
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
   * Constructs a <code>TarotProductUpdateOneResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TarotProductUpdateOneResponseModel} obj Optional instance to populate.
   * @return {module:model/TarotProductUpdateOneResponseModel} The populated <code>TarotProductUpdateOneResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TarotProductUpdateOneResponseModel();
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
TarotProductUpdateOneResponseModel.prototype.id = undefined;

/**
 * @member {String} stripeProduct
 */
TarotProductUpdateOneResponseModel.prototype.stripeProduct = undefined;

/**
 * @member {String} stripePrice
 */
TarotProductUpdateOneResponseModel.prototype.stripePrice = undefined;

/**
 * @member {Number} displayPrice
 */
TarotProductUpdateOneResponseModel.prototype.displayPrice = undefined;

/**
 * @member {Number} deckId
 */
TarotProductUpdateOneResponseModel.prototype.deckId = undefined;

