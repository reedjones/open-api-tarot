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
 * The BodyPartialUpdateManyByQueryCardsPatch model module.
 * @module model/BodyPartialUpdateManyByQueryCardsPatch
 * @version 0.1.0
 */
export class BodyPartialUpdateManyByQueryCardsPatch {
  /**
   * Constructs a new <code>BodyPartialUpdateManyByQueryCardsPatch</code>.
   * @alias module:model/BodyPartialUpdateManyByQueryCardsPatch
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BodyPartialUpdateManyByQueryCardsPatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BodyPartialUpdateManyByQueryCardsPatch} obj Optional instance to populate.
   * @return {module:model/BodyPartialUpdateManyByQueryCardsPatch} The populated <code>BodyPartialUpdateManyByQueryCardsPatch</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BodyPartialUpdateManyByQueryCardsPatch();
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
      if (data.hasOwnProperty('_order'))
        obj.order = ApiClient.convertToType(data['_order'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} uid
 */
BodyPartialUpdateManyByQueryCardsPatch.prototype.uid = undefined;

/**
 * @member {String} name
 */
BodyPartialUpdateManyByQueryCardsPatch.prototype.name = undefined;

/**
 * @member {String} description
 */
BodyPartialUpdateManyByQueryCardsPatch.prototype.description = undefined;

/**
 * @member {Date} created
 */
BodyPartialUpdateManyByQueryCardsPatch.prototype.created = undefined;

/**
 * @member {Date} updated
 */
BodyPartialUpdateManyByQueryCardsPatch.prototype.updated = undefined;

/**
 * @member {Number} _number
 */
BodyPartialUpdateManyByQueryCardsPatch.prototype._number = undefined;

/**
 * @member {String} jsonData
 */
BodyPartialUpdateManyByQueryCardsPatch.prototype.jsonData = undefined;

/**
 * @member {Number} cardId
 */
BodyPartialUpdateManyByQueryCardsPatch.prototype.cardId = undefined;

/**
 * @member {Number} deckId
 */
BodyPartialUpdateManyByQueryCardsPatch.prototype.deckId = undefined;

/**
 * @member {Number} order
 */
BodyPartialUpdateManyByQueryCardsPatch.prototype.order = undefined;

