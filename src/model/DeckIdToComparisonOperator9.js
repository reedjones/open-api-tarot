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
 * The DeckIdToComparisonOperator9 model module.
 * @module model/DeckIdToComparisonOperator9
 * @version 0.1.0
 */
export class DeckIdToComparisonOperator9 extends RangeToComparisonOperators {
  /**
   * Constructs a new <code>DeckIdToComparisonOperator9</code>.
   * @alias module:model/DeckIdToComparisonOperator9
   * @class
   * @extends module:model/RangeToComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>DeckIdToComparisonOperator9</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeckIdToComparisonOperator9} obj Optional instance to populate.
   * @return {module:model/DeckIdToComparisonOperator9} The populated <code>DeckIdToComparisonOperator9</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeckIdToComparisonOperator9();
      RangeToComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}