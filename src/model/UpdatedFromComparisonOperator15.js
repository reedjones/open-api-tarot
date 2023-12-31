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
 * The UpdatedFromComparisonOperator15 model module.
 * @module model/UpdatedFromComparisonOperator15
 * @version 0.1.0
 */
export class UpdatedFromComparisonOperator15 extends RangeFromComparisonOperators {
  /**
   * Constructs a new <code>UpdatedFromComparisonOperator15</code>.
   * @alias module:model/UpdatedFromComparisonOperator15
   * @class
   * @extends module:model/RangeFromComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>UpdatedFromComparisonOperator15</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdatedFromComparisonOperator15} obj Optional instance to populate.
   * @return {module:model/UpdatedFromComparisonOperator15} The populated <code>UpdatedFromComparisonOperator15</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdatedFromComparisonOperator15();
      RangeFromComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
