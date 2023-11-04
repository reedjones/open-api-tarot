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
 * The IdFromComparisonOperator13 model module.
 * @module model/IdFromComparisonOperator13
 * @version 0.1.0
 */
export class IdFromComparisonOperator13 extends RangeFromComparisonOperators {
  /**
   * Constructs a new <code>IdFromComparisonOperator13</code>.
   * @alias module:model/IdFromComparisonOperator13
   * @class
   * @extends module:model/RangeFromComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>IdFromComparisonOperator13</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdFromComparisonOperator13} obj Optional instance to populate.
   * @return {module:model/IdFromComparisonOperator13} The populated <code>IdFromComparisonOperator13</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IdFromComparisonOperator13();
      RangeFromComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
