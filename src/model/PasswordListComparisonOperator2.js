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
 * The PasswordListComparisonOperator2 model module.
 * @module model/PasswordListComparisonOperator2
 * @version 0.1.0
 */
export class PasswordListComparisonOperator2 extends ItemComparisonOperators {
  /**
   * Constructs a new <code>PasswordListComparisonOperator2</code>.
   * @alias module:model/PasswordListComparisonOperator2
   * @class
   * @extends module:model/ItemComparisonOperators
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>PasswordListComparisonOperator2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PasswordListComparisonOperator2} obj Optional instance to populate.
   * @return {module:model/PasswordListComparisonOperator2} The populated <code>PasswordListComparisonOperator2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PasswordListComparisonOperator2();
      ItemComparisonOperators.constructFromObject(data, obj);
    }
    return obj;
  }
}
