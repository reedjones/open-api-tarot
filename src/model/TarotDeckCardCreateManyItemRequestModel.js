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
 * The TarotDeckCardCreateManyItemRequestModel model module.
 * @module model/TarotDeckCardCreateManyItemRequestModel
 * @version 0.1.0
 */
export class TarotDeckCardCreateManyItemRequestModel {
  /**
   * Constructs a new <code>TarotDeckCardCreateManyItemRequestModel</code>.
   * @alias module:model/TarotDeckCardCreateManyItemRequestModel
   * @class
   * @param id {Number} 
   * @param uid {String} 
   * @param name {String} 
   * @param description {String} 
   * @param created {Date} 
   * @param updated {Date} 
   * @param _number {Number} 
   * @param deckId {Number} 
   */
  constructor(id, uid, name, description, created, updated, _number, deckId) {
    this.id = id;
    this.uid = uid;
    this.name = name;
    this.description = description;
    this.created = created;
    this.updated = updated;
    this._number = _number;
    this.deckId = deckId;
  }

  /**
   * Constructs a <code>TarotDeckCardCreateManyItemRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TarotDeckCardCreateManyItemRequestModel} obj Optional instance to populate.
   * @return {module:model/TarotDeckCardCreateManyItemRequestModel} The populated <code>TarotDeckCardCreateManyItemRequestModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TarotDeckCardCreateManyItemRequestModel();
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
TarotDeckCardCreateManyItemRequestModel.prototype.id = undefined;

/**
 * @member {String} uid
 */
TarotDeckCardCreateManyItemRequestModel.prototype.uid = undefined;

/**
 * @member {String} name
 */
TarotDeckCardCreateManyItemRequestModel.prototype.name = undefined;

/**
 * @member {String} description
 */
TarotDeckCardCreateManyItemRequestModel.prototype.description = undefined;

/**
 * @member {Date} created
 */
TarotDeckCardCreateManyItemRequestModel.prototype.created = undefined;

/**
 * @member {Date} updated
 */
TarotDeckCardCreateManyItemRequestModel.prototype.updated = undefined;

/**
 * @member {Number} _number
 */
TarotDeckCardCreateManyItemRequestModel.prototype._number = undefined;

/**
 * @member {String} jsonData
 */
TarotDeckCardCreateManyItemRequestModel.prototype.jsonData = undefined;

/**
 * @member {Number} cardId
 */
TarotDeckCardCreateManyItemRequestModel.prototype.cardId = undefined;

/**
 * @member {Number} deckId
 */
TarotDeckCardCreateManyItemRequestModel.prototype.deckId = undefined;
