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
 * The TarotSpreadCreateManyItemResponseModel model module.
 * @module model/TarotSpreadCreateManyItemResponseModel
 * @version 0.1.0
 */
export class TarotSpreadCreateManyItemResponseModel {
  /**
   * Constructs a new <code>TarotSpreadCreateManyItemResponseModel</code>.
   * auto gen by FastApi quick CRUD
   * @alias module:model/TarotSpreadCreateManyItemResponseModel
   * @class
   * @param id {Number} 
   * @param uid {String} 
   * @param name {String} 
   * @param description {String} 
   * @param created {Date} 
   * @param updated {Date} 
   * @param cardsCount {Number} 
   * @param isCustomizable {Boolean} 
   * @param totalCards {Number} 
   */
  constructor(id, uid, name, description, created, updated, cardsCount, isCustomizable, totalCards) {
    this.id = id;
    this.uid = uid;
    this.name = name;
    this.description = description;
    this.created = created;
    this.updated = updated;
    this.cardsCount = cardsCount;
    this.isCustomizable = isCustomizable;
    this.totalCards = totalCards;
  }

  /**
   * Constructs a <code>TarotSpreadCreateManyItemResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TarotSpreadCreateManyItemResponseModel} obj Optional instance to populate.
   * @return {module:model/TarotSpreadCreateManyItemResponseModel} The populated <code>TarotSpreadCreateManyItemResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TarotSpreadCreateManyItemResponseModel();
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
TarotSpreadCreateManyItemResponseModel.prototype.id = undefined;

/**
 * @member {String} uid
 */
TarotSpreadCreateManyItemResponseModel.prototype.uid = undefined;

/**
 * @member {String} name
 */
TarotSpreadCreateManyItemResponseModel.prototype.name = undefined;

/**
 * @member {String} description
 */
TarotSpreadCreateManyItemResponseModel.prototype.description = undefined;

/**
 * @member {Date} created
 */
TarotSpreadCreateManyItemResponseModel.prototype.created = undefined;

/**
 * @member {Date} updated
 */
TarotSpreadCreateManyItemResponseModel.prototype.updated = undefined;

/**
 * @member {Number} cardsCount
 */
TarotSpreadCreateManyItemResponseModel.prototype.cardsCount = undefined;

/**
 * @member {Boolean} isCustomizable
 */
TarotSpreadCreateManyItemResponseModel.prototype.isCustomizable = undefined;

/**
 * @member {Number} totalCards
 */
TarotSpreadCreateManyItemResponseModel.prototype.totalCards = undefined;

/**
 * @member {String} layout
 */
TarotSpreadCreateManyItemResponseModel.prototype.layout = undefined;

