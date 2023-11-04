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
 * The CardsCountToComparisonOperator1 model module.
 * @module model/CardsCountToComparisonOperator1
 * @version 0.1.0
 */
export class CardsCountToComparisonOperator1 extends RangeToComparisonOperators {
  /**
   * Constructs a new <code>CardsCountToComparisonOperator1</code>.
   * @alias module:model/CardsCountToComparisonOperator1
   * @class
   * @extends module:model/RangeToComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>CardsCountToComparisonOperator1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CardsCountToComparisonOperator1} obj Optional instance to populate.
   * @return {module:model/CardsCountToComparisonOperator1} The populated <code>CardsCountToComparisonOperator1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CardsCountToComparisonOperator1();
      RangeToComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
