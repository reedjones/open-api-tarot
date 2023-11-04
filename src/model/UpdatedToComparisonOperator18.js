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
import {RangeToComparisonOperators} from './RangeToComparisonOperators';

/**
 * The UpdatedToComparisonOperator18 model module.
 * @module model/UpdatedToComparisonOperator18
 * @version 0.1.0
 */
export class UpdatedToComparisonOperator18 extends RangeToComparisonOperators {
  /**
   * Constructs a new <code>UpdatedToComparisonOperator18</code>.
   * @alias module:model/UpdatedToComparisonOperator18
   * @class
   * @extends module:model/RangeToComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>UpdatedToComparisonOperator18</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdatedToComparisonOperator18} obj Optional instance to populate.
   * @return {module:model/UpdatedToComparisonOperator18} The populated <code>UpdatedToComparisonOperator18</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdatedToComparisonOperator18();
      RangeToComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
