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
 * The BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch model module.
 * @module model/BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch
 * @version 0.1.0
 */
export class BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch {
  /**
   * Constructs a new <code>BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch</code>.
   * @alias module:model/BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch} obj Optional instance to populate.
   * @return {module:model/BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch} The populated <code>BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch();
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
BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch.prototype.uid = undefined;

/**
 * @member {String} name
 */
BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch.prototype.name = undefined;

/**
 * @member {String} description
 */
BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch.prototype.description = undefined;

/**
 * @member {Date} created
 */
BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch.prototype.created = undefined;

/**
 * @member {Date} updated
 */
BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch.prototype.updated = undefined;

/**
 * @member {Number} cardsCount
 */
BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch.prototype.cardsCount = undefined;

/**
 * @member {Boolean} isCustomizable
 */
BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch.prototype.isCustomizable = undefined;

/**
 * @member {Number} totalCards
 */
BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch.prototype.totalCards = undefined;

/**
 * @member {String} layout
 */
BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch.prototype.layout = undefined;

