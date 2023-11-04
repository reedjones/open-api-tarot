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
 * The DeckIdFromComparisonOperator model module.
 * @module model/DeckIdFromComparisonOperator
 * @version 0.1.0
 */
export class DeckIdFromComparisonOperator extends RangeFromComparisonOperators {
  /**
   * Constructs a new <code>DeckIdFromComparisonOperator</code>.
   * @alias module:model/DeckIdFromComparisonOperator
   * @class
   * @extends module:model/RangeFromComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>DeckIdFromComparisonOperator</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeckIdFromComparisonOperator} obj Optional instance to populate.
   * @return {module:model/DeckIdFromComparisonOperator} The populated <code>DeckIdFromComparisonOperator</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeckIdFromComparisonOperator();
      RangeFromComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}