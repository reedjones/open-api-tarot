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
 * The LastNameListComparisonOperator1 model module.
 * @module model/LastNameListComparisonOperator1
 * @version 0.1.0
 */
export class LastNameListComparisonOperator1 extends ItemComparisonOperators {
  /**
   * Constructs a new <code>LastNameListComparisonOperator1</code>.
   * @alias module:model/LastNameListComparisonOperator1
   * @class
   * @extends module:model/ItemComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>LastNameListComparisonOperator1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LastNameListComparisonOperator1} obj Optional instance to populate.
   * @return {module:model/LastNameListComparisonOperator1} The populated <code>LastNameListComparisonOperator1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LastNameListComparisonOperator1();
      ItemComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
