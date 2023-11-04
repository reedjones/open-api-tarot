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
 * The IdToComparisonOperator12 model module.
 * @module model/IdToComparisonOperator12
 * @version 0.1.0
 */
export class IdToComparisonOperator12 extends RangeToComparisonOperators {
  /**
   * Constructs a new <code>IdToComparisonOperator12</code>.
   * @alias module:model/IdToComparisonOperator12
   * @class
   * @extends module:model/RangeToComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>IdToComparisonOperator12</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdToComparisonOperator12} obj Optional instance to populate.
   * @return {module:model/IdToComparisonOperator12} The populated <code>IdToComparisonOperator12</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IdToComparisonOperator12();
      RangeToComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
