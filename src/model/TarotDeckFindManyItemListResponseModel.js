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
import {TarotDeckFindManyResponseModel} from './TarotDeckFindManyResponseModel';

/**
 * The TarotDeckFindManyItemListResponseModel model module.
 * @module model/TarotDeckFindManyItemListResponseModel
 * @version 0.1.0
 */
export class TarotDeckFindManyItemListResponseModel {
  /**
   * Constructs a new <code>TarotDeckFindManyItemListResponseModel</code>.
   * @alias module:model/TarotDeckFindManyItemListResponseModel
   * @class
   * @param total {Number} 
   * @param result {Array.<module:model/TarotDeckFindManyResponseModel>} 
   */
  constructor(total, result) {
    this.total = total;
    this.result = result;
  }

  /**
   * Constructs a <code>TarotDeckFindManyItemListResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TarotDeckFindManyItemListResponseModel} obj Optional instance to populate.
   * @return {module:model/TarotDeckFindManyItemListResponseModel} The populated <code>TarotDeckFindManyItemListResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TarotDeckFindManyItemListResponseModel();
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], [TarotDeckFindManyResponseModel]);
    }
    return obj;
  }
}

/**
 * @member {Number} total
 */
TarotDeckFindManyItemListResponseModel.prototype.total = undefined;

/**
 * @member {Array.<module:model/TarotDeckFindManyResponseModel>} result
 */
TarotDeckFindManyItemListResponseModel.prototype.result = undefined;
