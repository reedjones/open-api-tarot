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
 * The UpdatedToComparisonOperator20 model module.
 * @module model/UpdatedToComparisonOperator20
 * @version 0.1.0
 */
export class UpdatedToComparisonOperator20 extends RangeToComparisonOperators {
  /**
   * Constructs a new <code>UpdatedToComparisonOperator20</code>.
   * @alias module:model/UpdatedToComparisonOperator20
   * @class
   * @extends module:model/RangeToComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>UpdatedToComparisonOperator20</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdatedToComparisonOperator20} obj Optional instance to populate.
   * @return {module:model/UpdatedToComparisonOperator20} The populated <code>UpdatedToComparisonOperator20</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdatedToComparisonOperator20();
      RangeToComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
