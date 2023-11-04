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
 * The AuthUserUpdateOneResponseModel model module.
 * @module model/AuthUserUpdateOneResponseModel
 * @version 0.1.0
 */
export class AuthUserUpdateOneResponseModel {
  /**
   * Constructs a new <code>AuthUserUpdateOneResponseModel</code>.
   * auto gen by FastApi quick CRUD
   * @alias module:model/AuthUserUpdateOneResponseModel
   * @class
   * @param id {Number} 
   * @param password {String} 
   * @param isSuperuser {Boolean} 
   * @param username {String} 
   * @param lastName {String} 
   * @param email {String} 
   * @param isStaff {Boolean} 
   * @param isActive {Boolean} 
   * @param dateJoined {Date} 
   * @param firstName {String} 
   */
  constructor(id, password, isSuperuser, username, lastName, email, isStaff, isActive, dateJoined, firstName) {
    this.id = id;
    this.password = password;
    this.isSuperuser = isSuperuser;
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.isStaff = isStaff;
    this.isActive = isActive;
    this.dateJoined = dateJoined;
    this.firstName = firstName;
  }

  /**
   * Constructs a <code>AuthUserUpdateOneResponseModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AuthUserUpdateOneResponseModel} obj Optional instance to populate.
   * @return {module:model/AuthUserUpdateOneResponseModel} The populated <code>AuthUserUpdateOneResponseModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AuthUserUpdateOneResponseModel();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('password'))
        obj.password = ApiClient.convertToType(data['password'], 'String');
      if (data.hasOwnProperty('last_login'))
        obj.lastLogin = ApiClient.convertToType(data['last_login'], 'Date');
      if (data.hasOwnProperty('is_superuser'))
        obj.isSuperuser = ApiClient.convertToType(data['is_superuser'], 'Boolean');
      if (data.hasOwnProperty('username'))
        obj.username = ApiClient.convertToType(data['username'], 'String');
      if (data.hasOwnProperty('last_name'))
        obj.lastName = ApiClient.convertToType(data['last_name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('is_staff'))
        obj.isStaff = ApiClient.convertToType(data['is_staff'], 'Boolean');
      if (data.hasOwnProperty('is_active'))
        obj.isActive = ApiClient.convertToType(data['is_active'], 'Boolean');
      if (data.hasOwnProperty('date_joined'))
        obj.dateJoined = ApiClient.convertToType(data['date_joined'], 'Date');
      if (data.hasOwnProperty('first_name'))
        obj.firstName = ApiClient.convertToType(data['first_name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
AuthUserUpdateOneResponseModel.prototype.id = undefined;

/**
 * @member {String} password
 */
AuthUserUpdateOneResponseModel.prototype.password = undefined;

/**
 * @member {Date} lastLogin
 */
AuthUserUpdateOneResponseModel.prototype.lastLogin = undefined;

/**
 * @member {Boolean} isSuperuser
 */
AuthUserUpdateOneResponseModel.prototype.isSuperuser = undefined;

/**
 * @member {String} username
 */
AuthUserUpdateOneResponseModel.prototype.username = undefined;

/**
 * @member {String} lastName
 */
AuthUserUpdateOneResponseModel.prototype.lastName = undefined;

/**
 * @member {String} email
 */
AuthUserUpdateOneResponseModel.prototype.email = undefined;

/**
 * @member {Boolean} isStaff
 */
AuthUserUpdateOneResponseModel.prototype.isStaff = undefined;

/**
 * @member {Boolean} isActive
 */
AuthUserUpdateOneResponseModel.prototype.isActive = undefined;

/**
 * @member {Date} dateJoined
 */
AuthUserUpdateOneResponseModel.prototype.dateJoined = undefined;

/**
 * @member {String} firstName
 */
AuthUserUpdateOneResponseModel.prototype.firstName = undefined;

