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
import {TarotProductFindManyResponseModel} from './TarotProductFindManyResponseModel';

/**
 * The TarotProductFindManyItemListResponseModel model module.
 * @module model/TarotProductFindManyItemListResponseModel
 * @version 0.1.0
 */
export class TarotProductFindManyItemListResponseModel {
  /**
   * Constructs a new <code>TarotProductFindManyItemListResponseModel</code>.
   * @alias module:model/TarotProductFindManyItemListResponseModel
   * @class
   * @param total {Number} 
   * @param result {Array.<module:model/TarotProductFindManyResponseModel>} 
   */
  constructor(total, result) {
    this.total = total;
    this.result = result;
  }

  /**
   * Constructs a <code>TarotProductFindManyItemListResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TarotProductFindManyItemListResponseModel} obj Optional instance to populate.
   * @return {module:model/TarotProductFindManyItemListResponseModel} The populated <code>TarotProductFindManyItemListResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TarotProductFindManyItemListResponseModel();
      if (data.hasOwnProperty('total'))
        obj.total = ApiClient.convertToType(data['total'], 'Number');
      if (data.hasOwnProperty('result'))
        obj.result = ApiClient.convertToType(data['result'], [TarotProductFindManyResponseModel]);
    }
    return obj;
  }
}

/**
 * @member {Number} total
 */
TarotProductFindManyItemListResponseModel.prototype.total = undefined;

/**
 * @member {Array.<module:model/TarotProductFindManyResponseModel>} result
 */
TarotProductFindManyItemListResponseModel.prototype.result = undefined;

