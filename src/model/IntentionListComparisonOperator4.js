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
 * The IntentionListComparisonOperator4 model module.
 * @module model/IntentionListComparisonOperator4
 * @version 0.1.0
 */
export class IntentionListComparisonOperator4 extends ItemComparisonOperators {
  /**
   * Constructs a new <code>IntentionListComparisonOperator4</code>.
   * @alias module:model/IntentionListComparisonOperator4
   * @class
   * @extends module:model/ItemComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>IntentionListComparisonOperator4</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntentionListComparisonOperator4} obj Optional instance to populate.
   * @return {module:model/IntentionListComparisonOperator4} The populated <code>IntentionListComparisonOperator4</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IntentionListComparisonOperator4();
      ItemComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}