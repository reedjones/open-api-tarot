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
 * Enum class ItemComparisonOperators.
 * @enum {String}
 * @readonly
 */
const ItemComparisonOperators = {
  /**
   * value: "Equal"
   * @const
   */
  equal: "Equal",

  /**
   * value: "Not_equal"
   * @const
   */
  notEqual: "Not_equal",

  /**
   * value: "In"
   * @const
   */
  _in: "In",

  /**
   * value: "Not_in"
   * @const
   */
  notIn: "Not_in",

  /**
   * Returns a <code>ItemComparisonOperators</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/ItemComparisonOperators} The enum <code>ItemComparisonOperators</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ItemComparisonOperators};