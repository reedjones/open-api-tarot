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
import {TarotDeckUpdateManyResponseItemModel} from './TarotDeckUpdateManyResponseItemModel';

/**
 * The TarotDeckUpdateManyItemListResponseModel model module.
 * @module model/TarotDeckUpdateManyItemListResponseModel
 * @version 0.1.0
 */
export class TarotDeckUpdateManyItemListResponseModel extends Array {
  /**
   * Constructs a new <code>TarotDeckUpdateManyItemListResponseModel</code>.
   * @alias module:model/TarotDeckUpdateManyItemListResponseModel
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>TarotDeckUpdateManyItemListResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TarotDeckUpdateManyItemListResponseModel} obj Optional instance to populate.
   * @return {module:model/TarotDeckUpdateManyItemListResponseModel} The populated <code>TarotDeckUpdateManyItemListResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TarotDeckUpdateManyItemListResponseModel();
      ApiClient.constructFromObject(data, obj, 'TarotDeckUpdateManyResponseItemModel');
    }
    return obj;
  }
}
