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
 * Enum class MatchingPatternInStringBase.
 * @enum {String}
 * @readonly
 */
const MatchingPatternInStringBase = {
  /**
   * value: "case_insensitive"
   * @const
   */
  caseInsensitive: "case_insensitive",

  /**
   * value: "case_sensitive"
   * @const
   */
  caseSensitive: "case_sensitive",

  /**
   * value: "not_case_insensitive"
   * @const
   */
  notCaseInsensitive: "not_case_insensitive",

  /**
   * value: "not_case_sensitive"
   * @const
   */
  notCaseSensitive: "not_case_sensitive",

  /**
   * value: "contains"
   * @const
   */
  contains: "contains",

  /**
   * Returns a <code>MatchingPatternInStringBase</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/MatchingPatternInStringBase} The enum <code>MatchingPatternInStringBase</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {MatchingPatternInStringBase};