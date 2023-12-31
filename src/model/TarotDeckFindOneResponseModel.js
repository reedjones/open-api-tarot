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
 * The TarotDeckFindOneResponseModel model module.
 * @module model/TarotDeckFindOneResponseModel
 * @version 0.1.0
 */
export class TarotDeckFindOneResponseModel {
  /**
   * Constructs a new <code>TarotDeckFindOneResponseModel</code>.
   * auto gen by FastApi quick CRUD
   * @alias module:model/TarotDeckFindOneResponseModel
   * @class
   * @param id {Number} 
   * @param uid {String} 
   * @param name {String} 
   * @param description {String} 
   * @param created {Date} 
   * @param updated {Date} 
   * @param createdCards {Boolean} 
   * @param intention {String} 
   * @param alt {String} 
   * @param caption {String} 
   * @param url {String} 
   */
  constructor(id, uid, name, description, created, updated, createdCards, intention, alt, caption, url) {
    this.id = id;
    this.uid = uid;
    this.name = name;
    this.description = description;
    this.created = created;
    this.updated = updated;
    this.createdCards = createdCards;
    this.intention = intention;
    this.alt = alt;
    this.caption = caption;
    this.url = url;
  }

  /**
   * Constructs a <code>TarotDeckFindOneResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TarotDeckFindOneResponseModel} obj Optional instance to populate.
   * @return {module:model/TarotDeckFindOneResponseModel} The populated <code>TarotDeckFindOneResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TarotDeckFindOneResponseModel();
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
      if (data.hasOwnProperty('created_cards'))
        obj.createdCards = ApiClient.convertToType(data['created_cards'], 'Boolean');
      if (data.hasOwnProperty('intention'))
        obj.intention = ApiClient.convertToType(data['intention'], 'String');
      if (data.hasOwnProperty('alt'))
        obj.alt = ApiClient.convertToType(data['alt'], 'String');
      if (data.hasOwnProperty('caption'))
        obj.caption = ApiClient.convertToType(data['caption'], 'String');
      if (data.hasOwnProperty('image'))
        obj.image = ApiClient.convertToType(data['image'], 'String');
      if (data.hasOwnProperty('image_height'))
        obj.imageHeight = ApiClient.convertToType(data['image_height'], 'Number');
      if (data.hasOwnProperty('image_width'))
        obj.imageWidth = ApiClient.convertToType(data['image_width'], 'Number');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
TarotDeckFindOneResponseModel.prototype.id = undefined;

/**
 * @member {String} uid
 */
TarotDeckFindOneResponseModel.prototype.uid = undefined;

/**
 * @member {String} name
 */
TarotDeckFindOneResponseModel.prototype.name = undefined;

/**
 * @member {String} description
 */
TarotDeckFindOneResponseModel.prototype.description = undefined;

/**
 * @member {Date} created
 */
TarotDeckFindOneResponseModel.prototype.created = undefined;

/**
 * @member {Date} updated
 */
TarotDeckFindOneResponseModel.prototype.updated = undefined;

/**
 * @member {Boolean} createdCards
 */
TarotDeckFindOneResponseModel.prototype.createdCards = undefined;

/**
 * @member {String} intention
 */
TarotDeckFindOneResponseModel.prototype.intention = undefined;

/**
 * @member {String} alt
 */
TarotDeckFindOneResponseModel.prototype.alt = undefined;

/**
 * @member {String} caption
 */
TarotDeckFindOneResponseModel.prototype.caption = undefined;

/**
 * @member {String} image
 */
TarotDeckFindOneResponseModel.prototype.image = undefined;

/**
 * @member {Number} imageHeight
 */
TarotDeckFindOneResponseModel.prototype.imageHeight = undefined;

/**
 * @member {Number} imageWidth
 */
TarotDeckFindOneResponseModel.prototype.imageWidth = undefined;

/**
 * @member {String} url
 */
TarotDeckFindOneResponseModel.prototype.url = undefined;

