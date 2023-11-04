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
 * The CardIdListComparisonOperator6 model module.
 * @module model/CardIdListComparisonOperator6
 * @version 0.1.0
 */
export class CardIdListComparisonOperator6 extends ItemComparisonOperators {
  /**
   * Constructs a new <code>CardIdListComparisonOperator6</code>.
   * @alias module:model/CardIdListComparisonOperator6
   * @class
   * @extends module:model/ItemComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>CardIdListComparisonOperator6</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CardIdListComparisonOperator6} obj Optional instance to populate.
   * @return {module:model/CardIdListComparisonOperator6} The populated <code>CardIdListComparisonOperator6</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CardIdListComparisonOperator6();
      ItemComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}