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
import {RangeFromComparisonOperators} from './RangeFromComparisonOperators';

/**
 * The ImageWidthFromComparisonOperator model module.
 * @module model/ImageWidthFromComparisonOperator
 * @version 0.1.0
 */
export class ImageWidthFromComparisonOperator extends RangeFromComparisonOperators {
  /**
   * Constructs a new <code>ImageWidthFromComparisonOperator</code>.
   * @alias module:model/ImageWidthFromComparisonOperator
   * @class
   * @extends module:model/RangeFromComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ImageWidthFromComparisonOperator</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImageWidthFromComparisonOperator} obj Optional instance to populate.
   * @return {module:model/ImageWidthFromComparisonOperator} The populated <code>ImageWidthFromComparisonOperator</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ImageWidthFromComparisonOperator();
      RangeFromComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
