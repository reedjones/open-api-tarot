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

/**
 * Enum class RangeFromComparisonOperators.
 * @enum {String}
 * @readonly
 */
const RangeFromComparisonOperators = {
  /**
   * value: "Greater_than"
   * @const
   */
  than: "Greater_than",

  /**
   * value: "Greater_than_or_equal_to"
   * @const
   */
  thanOrEqualTo: "Greater_than_or_equal_to",

  /**
   * Returns a <code>RangeFromComparisonOperators</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/RangeFromComparisonOperators} The enum <code>RangeFromComparisonOperators</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {RangeFromComparisonOperators};