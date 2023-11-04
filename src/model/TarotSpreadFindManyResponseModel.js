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
 * The TarotSpreadFindManyResponseModel model module.
 * @module model/TarotSpreadFindManyResponseModel
 * @version 0.1.0
 */
export class TarotSpreadFindManyResponseModel {
  /**
   * Constructs a new <code>TarotSpreadFindManyResponseModel</code>.
   * auto gen by FastApi quick CRUD
   * @alias module:model/TarotSpreadFindManyResponseModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TarotSpreadFindManyResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TarotSpreadFindManyResponseModel} obj Optional instance to populate.
   * @return {module:model/TarotSpreadFindManyResponseModel} The populated <code>TarotSpreadFindManyResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TarotSpreadFindManyResponseModel();
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
 * @member {Number} id
 */
TarotSpreadFindManyResponseModel.prototype.id = undefined;

/**
 * @member {String} uid
 */
TarotSpreadFindManyResponseModel.prototype.uid = undefined;

/**
 * @member {String} name
 */
TarotSpreadFindManyResponseModel.prototype.name = undefined;

/**
 * @member {String} description
 */
TarotSpreadFindManyResponseModel.prototype.description = undefined;

/**
 * @member {Date} created
 */
TarotSpreadFindManyResponseModel.prototype.created = undefined;

/**
 * @member {Date} updated
 */
TarotSpreadFindManyResponseModel.prototype.updated = undefined;

/**
 * @member {Number} cardsCount
 */
TarotSpreadFindManyResponseModel.prototype.cardsCount = undefined;

/**
 * @member {Boolean} isCustomizable
 */
TarotSpreadFindManyResponseModel.prototype.isCustomizable = undefined;

/**
 * @member {Number} totalCards
 */
TarotSpreadFindManyResponseModel.prototype.totalCards = undefined;

/**
 * @member {String} layout
 */
TarotSpreadFindManyResponseModel.prototype.layout = undefined;
