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
 * The OrderListComparisonOperator model module.
 * @module model/OrderListComparisonOperator
 * @version 0.1.0
 */
export class OrderListComparisonOperator extends ItemComparisonOperators {
  /**
   * Constructs a new <code>OrderListComparisonOperator</code>.
   * @alias module:model/OrderListComparisonOperator
   * @class
   * @extends module:model/ItemComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>OrderListComparisonOperator</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderListComparisonOperator} obj Optional instance to populate.
   * @return {module:model/OrderListComparisonOperator} The populated <code>OrderListComparisonOperator</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderListComparisonOperator();
      ItemComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
