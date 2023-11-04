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
import {ItemComparisonOperators} from './ItemComparisonOperators';

/**
 * The ImageListComparisonOperator7 model module.
 * @module model/ImageListComparisonOperator7
 * @version 0.1.0
 */
export class ImageListComparisonOperator7 extends ItemComparisonOperators {
  /**
   * Constructs a new <code>ImageListComparisonOperator7</code>.
   * @alias module:model/ImageListComparisonOperator7
   * @class
   * @extends module:model/ItemComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ImageListComparisonOperator7</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageListComparisonOperator7} obj Optional instance to populate.
   * @return {module:model/ImageListComparisonOperator7} The populated <code>ImageListComparisonOperator7</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ImageListComparisonOperator7();
      ItemComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
