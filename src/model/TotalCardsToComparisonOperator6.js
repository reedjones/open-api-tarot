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
 * The TotalCardsToComparisonOperator6 model module.
 * @module model/TotalCardsToComparisonOperator6
 * @version 0.1.0
 */
export class TotalCardsToComparisonOperator6 extends RangeToComparisonOperators {
  /**
   * Constructs a new <code>TotalCardsToComparisonOperator6</code>.
   * @alias module:model/TotalCardsToComparisonOperator6
   * @class
   * @extends module:model/RangeToComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>TotalCardsToComparisonOperator6</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TotalCardsToComparisonOperator6} obj Optional instance to populate.
   * @return {module:model/TotalCardsToComparisonOperator6} The populated <code>TotalCardsToComparisonOperator6</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TotalCardsToComparisonOperator6();
      RangeToComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
