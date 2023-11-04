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
import {TarotDeckDeleteManyItemResponseModel} from './TarotDeckDeleteManyItemResponseModel';

/**
 * The TarotDeckDeleteManyItemListResponseModel model module.
 * @module model/TarotDeckDeleteManyItemListResponseModel
 * @version 0.1.0
 */
export class TarotDeckDeleteManyItemListResponseModel extends Array {
  /**
   * Constructs a new <code>TarotDeckDeleteManyItemListResponseModel</code>.
   * @alias module:model/TarotDeckDeleteManyItemListResponseModel
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>TarotDeckDeleteManyItemListResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TarotDeckDeleteManyItemListResponseModel} obj Optional instance to populate.
   * @return {module:model/TarotDeckDeleteManyItemListResponseModel} The populated <code>TarotDeckDeleteManyItemListResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TarotDeckDeleteManyItemListResponseModel();
      ApiClient.constructFromObject(data, obj, 'TarotDeckDeleteManyItemResponseModel');
    }
    return obj;
  }
}
