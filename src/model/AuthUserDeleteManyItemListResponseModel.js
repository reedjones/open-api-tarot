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
import {AuthUserDeleteManyItemResponseModel} from './AuthUserDeleteManyItemResponseModel';

/**
 * The AuthUserDeleteManyItemListResponseModel model module.
 * @module model/AuthUserDeleteManyItemListResponseModel
 * @version 0.1.0
 */
export class AuthUserDeleteManyItemListResponseModel extends Array {
  /**
   * Constructs a new <code>AuthUserDeleteManyItemListResponseModel</code>.
   * @alias module:model/AuthUserDeleteManyItemListResponseModel
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AuthUserDeleteManyItemListResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthUserDeleteManyItemListResponseModel} obj Optional instance to populate.
   * @return {module:model/AuthUserDeleteManyItemListResponseModel} The populated <code>AuthUserDeleteManyItemListResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AuthUserDeleteManyItemListResponseModel();
      ApiClient.constructFromObject(data, obj, 'AuthUserDeleteManyItemResponseModel');
    }
    return obj;
  }
}
