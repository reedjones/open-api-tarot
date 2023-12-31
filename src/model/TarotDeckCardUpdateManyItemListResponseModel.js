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
import {TarotDeckCardUpdateManyResponseItemModel} from './TarotDeckCardUpdateManyResponseItemModel';

/**
 * The TarotDeckCardUpdateManyItemListResponseModel model module.
 * @module model/TarotDeckCardUpdateManyItemListResponseModel
 * @version 0.1.0
 */
export class TarotDeckCardUpdateManyItemListResponseModel extends Array {
  /**
   * Constructs a new <code>TarotDeckCardUpdateManyItemListResponseModel</code>.
   * @alias module:model/TarotDeckCardUpdateManyItemListResponseModel
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>TarotDeckCardUpdateManyItemListResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TarotDeckCardUpdateManyItemListResponseModel} obj Optional instance to populate.
   * @return {module:model/TarotDeckCardUpdateManyItemListResponseModel} The populated <code>TarotDeckCardUpdateManyItemListResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TarotDeckCardUpdateManyItemListResponseModel();
      ApiClient.constructFromObject(data, obj, 'TarotDeckCardUpdateManyResponseItemModel');
    }
    return obj;
  }
}
