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
 * The TarotDeckCardFindManyResponseModel model module.
 * @module model/TarotDeckCardFindManyResponseModel
 * @version 0.1.0
 */
export class TarotDeckCardFindManyResponseModel {
  /**
   * Constructs a new <code>TarotDeckCardFindManyResponseModel</code>.
   * auto gen by FastApi quick CRUD
   * @alias module:model/TarotDeckCardFindManyResponseModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TarotDeckCardFindManyResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TarotDeckCardFindManyResponseModel} obj Optional instance to populate.
   * @return {module:model/TarotDeckCardFindManyResponseModel} The populated <code>TarotDeckCardFindManyResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TarotDeckCardFindManyResponseModel();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('uid'))
        obj.uid = ApiClient.convertToType(data['uid'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
      if (data.hasOwnProperty('number'))
        obj._number = ApiClient.convertToType(data['number'], 'Number');
      if (data.hasOwnProperty('json_data'))
        obj.jsonData = ApiClient.convertToType(data['json_data'], 'String');
      if (data.hasOwnProperty('card_id'))
        obj.cardId = ApiClient.convertToType(data['card_id'], 'Number');
      if (data.hasOwnProperty('deck_id'))
        obj.deckId = ApiClient.convertToType(data['deck_id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
TarotDeckCardFindManyResponseModel.prototype.id = undefined;

/**
 * @member {String} uid
 */
TarotDeckCardFindManyResponseModel.prototype.uid = undefined;

/**
 * @member {String} name
 */
TarotDeckCardFindManyResponseModel.prototype.name = undefined;

/**
 * @member {String} description
 */
TarotDeckCardFindManyResponseModel.prototype.description = undefined;

/**
 * @member {Date} created
 */
TarotDeckCardFindManyResponseModel.prototype.created = undefined;

/**
 * @member {Date} updated
 */
TarotDeckCardFindManyResponseModel.prototype.updated = undefined;

/**
 * @member {Number} _number
 */
TarotDeckCardFindManyResponseModel.prototype._number = undefined;

/**
 * @member {String} jsonData
 */
TarotDeckCardFindManyResponseModel.prototype.jsonData = undefined;

/**
 * @member {Number} cardId
 */
TarotDeckCardFindManyResponseModel.prototype.cardId = undefined;

/**
 * @member {Number} deckId
 */
TarotDeckCardFindManyResponseModel.prototype.deckId = undefined;

