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
 * The LastNameListComparisonOperator model module.
 * @module model/LastNameListComparisonOperator
 * @version 0.1.0
 */
export class LastNameListComparisonOperator extends ItemComparisonOperators {
  /**
   * Constructs a new <code>LastNameListComparisonOperator</code>.
   * @alias module:model/LastNameListComparisonOperator
   * @class
   * @extends module:model/ItemComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>LastNameListComparisonOperator</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LastNameListComparisonOperator} obj Optional instance to populate.
   * @return {module:model/LastNameListComparisonOperator} The populated <code>LastNameListComparisonOperator</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LastNameListComparisonOperator();
      ItemComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
