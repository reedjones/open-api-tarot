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
 * The BodyPartialUpdateManyByQuerySpreadsPatch model module.
 * @module model/BodyPartialUpdateManyByQuerySpreadsPatch
 * @version 0.1.0
 */
export class BodyPartialUpdateManyByQuerySpreadsPatch {
  /**
   * Constructs a new <code>BodyPartialUpdateManyByQuerySpreadsPatch</code>.
   * @alias module:model/BodyPartialUpdateManyByQuerySpreadsPatch
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BodyPartialUpdateManyByQuerySpreadsPatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BodyPartialUpdateManyByQuerySpreadsPatch} obj Optional instance to populate.
   * @return {module:model/BodyPartialUpdateManyByQuerySpreadsPatch} The populated <code>BodyPartialUpdateManyByQuerySpreadsPatch</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BodyPartialUpdateManyByQuerySpreadsPatch();
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
      if (data.hasOwnProperty('cards_count'))
        obj.cardsCount = ApiClient.convertToType(data['cards_count'], 'Number');
      if (data.hasOwnProperty('is_customizable'))
        obj.isCustomizable = ApiClient.convertToType(data['is_customizable'], 'Boolean');
      if (data.hasOwnProperty('total_cards'))
        obj.totalCards = ApiClient.convertToType(data['total_cards'], 'Number');
      if (data.hasOwnProperty('layout'))
        obj.layout = ApiClient.convertToType(data['layout'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} uid
 */
BodyPartialUpdateManyByQuerySpreadsPatch.prototype.uid = undefined;

/**
 * @member {String} name
 */
BodyPartialUpdateManyByQuerySpreadsPatch.prototype.name = undefined;

/**
 * @member {String} description
 */
BodyPartialUpdateManyByQuerySpreadsPatch.prototype.description = undefined;

/**
 * @member {Date} created
 */
BodyPartialUpdateManyByQuerySpreadsPatch.prototype.created = undefined;

/**
 * @member {Date} updated
 */
BodyPartialUpdateManyByQuerySpreadsPatch.prototype.updated = undefined;

/**
 * @member {Number} cardsCount
 */
BodyPartialUpdateManyByQuerySpreadsPatch.prototype.cardsCount = undefined;

/**
 * @member {Boolean} isCustomizable
 */
BodyPartialUpdateManyByQuerySpreadsPatch.prototype.isCustomizable = undefined;

/**
 * @member {Number} totalCards
 */
BodyPartialUpdateManyByQuerySpreadsPatch.prototype.totalCards = undefined;

/**
 * @member {String} layout
 */
BodyPartialUpdateManyByQuerySpreadsPatch.prototype.layout = undefined;

