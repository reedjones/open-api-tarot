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
 * The LastLoginToComparisonOperator3 model module.
 * @module model/LastLoginToComparisonOperator3
 * @version 0.1.0
 */
export class LastLoginToComparisonOperator3 extends RangeToComparisonOperators {
  /**
   * Constructs a new <code>LastLoginToComparisonOperator3</code>.
   * @alias module:model/LastLoginToComparisonOperator3
   * @class
   * @extends module:model/RangeToComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>LastLoginToComparisonOperator3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LastLoginToComparisonOperator3} obj Optional instance to populate.
   * @return {module:model/LastLoginToComparisonOperator3} The populated <code>LastLoginToComparisonOperator3</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LastLoginToComparisonOperator3();
      RangeToComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
