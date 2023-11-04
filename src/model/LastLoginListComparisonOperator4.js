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
 * The LastLoginListComparisonOperator4 model module.
 * @module model/LastLoginListComparisonOperator4
 * @version 0.1.0
 */
export class LastLoginListComparisonOperator4 extends ItemComparisonOperators {
  /**
   * Constructs a new <code>LastLoginListComparisonOperator4</code>.
   * @alias module:model/LastLoginListComparisonOperator4
   * @class
   * @extends module:model/ItemComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>LastLoginListComparisonOperator4</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LastLoginListComparisonOperator4} obj Optional instance to populate.
   * @return {module:model/LastLoginListComparisonOperator4} The populated <code>LastLoginListComparisonOperator4</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LastLoginListComparisonOperator4();
      ItemComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
