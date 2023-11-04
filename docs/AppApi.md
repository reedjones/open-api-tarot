# FastApi.AppApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteManyByQueryUsersDelete**](AppApi.md#deleteManyByQueryUsersDelete) | **DELETE** /users | Delete Many By Query
[**deleteOneByPrimaryKeyUsersIdDelete**](AppApi.md#deleteOneByPrimaryKeyUsersIdDelete) | **DELETE** /users/{id} | Delete One By Primary Key
[**entireUpdateByPrimaryKeyUsersIdPut**](AppApi.md#entireUpdateByPrimaryKeyUsersIdPut) | **PUT** /users/{id} | Entire Update By Primary Key
[**entireUpdateManyByQueryUsersPut**](AppApi.md#entireUpdateManyByQueryUsersPut) | **PUT** /users | Entire Update Many By Query
[**getManyUsersGet**](AppApi.md#getManyUsersGet) | **GET** /users | Get Many
[**getOneByPrimaryKeyUsersIdGet**](AppApi.md#getOneByPrimaryKeyUsersIdGet) | **GET** /users/{id} | Get One By Primary Key
[**insertManyUsersPost**](AppApi.md#insertManyUsersPost) | **POST** /users | Insert Many
[**partialUpdateManyByQueryUsersPatch**](AppApi.md#partialUpdateManyByQueryUsersPatch) | **PATCH** /users | Partial Update Many By Query
[**partialUpdateOneByPrimaryKeyUsersIdPatch**](AppApi.md#partialUpdateOneByPrimaryKeyUsersIdPatch) | **PATCH** /users/{id} | Partial Update One By Primary Key

<a name="deleteManyByQueryUsersDelete"></a>
# **deleteManyByQueryUsersDelete**
> AuthUserDeleteManyItemListResponseModel deleteManyByQueryUsersDelete(opts)

Delete Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.AppApi();
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator18(), // IdFromComparisonOperator18 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator18(), // IdToComparisonOperator18 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator18(), // IdListComparisonOperator18 | 
  'idList': [3.4], // [Number] | 
  'passwordStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'passwordStr': ["passwordStr_example"], // [String] | 
  'passwordListComparisonOperator': new FastApi.PasswordListComparisonOperator2(), // PasswordListComparisonOperator2 | 
  'passwordList': ["passwordList_example"], // [String] | 
  'lastLoginFromComparisonOperator': new FastApi.LastLoginFromComparisonOperator2(), // LastLoginFromComparisonOperator2 | 
  'lastLoginToComparisonOperator': new FastApi.LastLoginToComparisonOperator2(), // LastLoginToComparisonOperator2 | 
  'lastLoginFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginListComparisonOperator': new FastApi.LastLoginListComparisonOperator2(), // LastLoginListComparisonOperator2 | 
  'lastLoginList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'isSuperuserListComparisonOperator': new FastApi.IsSuperuserListComparisonOperator2(), // IsSuperuserListComparisonOperator2 | 
  'isSuperuserList': [true], // [Boolean] | 
  'usernameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'usernameStr': ["usernameStr_example"], // [String] | 
  'usernameListComparisonOperator': new FastApi.UsernameListComparisonOperator2(), // UsernameListComparisonOperator2 | 
  'usernameList': ["usernameList_example"], // [String] | 
  'lastNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'lastNameStr': ["lastNameStr_example"], // [String] | 
  'lastNameListComparisonOperator': new FastApi.LastNameListComparisonOperator2(), // LastNameListComparisonOperator2 | 
  'lastNameList': ["lastNameList_example"], // [String] | 
  'emailStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'emailStr': ["emailStr_example"], // [String] | 
  'emailListComparisonOperator': new FastApi.EmailListComparisonOperator2(), // EmailListComparisonOperator2 | 
  'emailList': ["emailList_example"], // [String] | 
  'isStaffListComparisonOperator': new FastApi.IsStaffListComparisonOperator2(), // IsStaffListComparisonOperator2 | 
  'isStaffList': [true], // [Boolean] | 
  'isActiveListComparisonOperator': new FastApi.IsActiveListComparisonOperator2(), // IsActiveListComparisonOperator2 | 
  'isActiveList': [true], // [Boolean] | 
  'dateJoinedFromComparisonOperator': new FastApi.DateJoinedFromComparisonOperator2(), // DateJoinedFromComparisonOperator2 | 
  'dateJoinedToComparisonOperator': new FastApi.DateJoinedToComparisonOperator2(), // DateJoinedToComparisonOperator2 | 
  'dateJoinedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedListComparisonOperator': new FastApi.DateJoinedListComparisonOperator2(), // DateJoinedListComparisonOperator2 | 
  'dateJoinedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'firstNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'firstNameStr': ["firstNameStr_example"], // [String] | 
  'firstNameListComparisonOperator': new FastApi.FirstNameListComparisonOperator2(), // FirstNameListComparisonOperator2 | 
  'firstNameList': ["firstNameList_example"] // [String] | 
};
apiInstance.deleteManyByQueryUsersDelete(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idFromComparisonOperator** | [**IdFromComparisonOperator18**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator18**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator18**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **passwordStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **passwordStr** | [**[String]**](String.md)|  | [optional] 
 **passwordListComparisonOperator** | [**PasswordListComparisonOperator2**](.md)|  | [optional] 
 **passwordList** | [**[String]**](String.md)|  | [optional] 
 **lastLoginFromComparisonOperator** | [**LastLoginFromComparisonOperator2**](.md)|  | [optional] 
 **lastLoginToComparisonOperator** | [**LastLoginToComparisonOperator2**](.md)|  | [optional] 
 **lastLoginFrom** | **Date**|  | [optional] 
 **lastLoginTo** | **Date**|  | [optional] 
 **lastLoginListComparisonOperator** | [**LastLoginListComparisonOperator2**](.md)|  | [optional] 
 **lastLoginList** | [**[Date]**](Date.md)|  | [optional] 
 **isSuperuserListComparisonOperator** | [**IsSuperuserListComparisonOperator2**](.md)|  | [optional] 
 **isSuperuserList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **usernameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **usernameStr** | [**[String]**](String.md)|  | [optional] 
 **usernameListComparisonOperator** | [**UsernameListComparisonOperator2**](.md)|  | [optional] 
 **usernameList** | [**[String]**](String.md)|  | [optional] 
 **lastNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **lastNameStr** | [**[String]**](String.md)|  | [optional] 
 **lastNameListComparisonOperator** | [**LastNameListComparisonOperator2**](.md)|  | [optional] 
 **lastNameList** | [**[String]**](String.md)|  | [optional] 
 **emailStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **emailStr** | [**[String]**](String.md)|  | [optional] 
 **emailListComparisonOperator** | [**EmailListComparisonOperator2**](.md)|  | [optional] 
 **emailList** | [**[String]**](String.md)|  | [optional] 
 **isStaffListComparisonOperator** | [**IsStaffListComparisonOperator2**](.md)|  | [optional] 
 **isStaffList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **isActiveListComparisonOperator** | [**IsActiveListComparisonOperator2**](.md)|  | [optional] 
 **isActiveList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **dateJoinedFromComparisonOperator** | [**DateJoinedFromComparisonOperator2**](.md)|  | [optional] 
 **dateJoinedToComparisonOperator** | [**DateJoinedToComparisonOperator2**](.md)|  | [optional] 
 **dateJoinedFrom** | **Date**|  | [optional] 
 **dateJoinedTo** | **Date**|  | [optional] 
 **dateJoinedListComparisonOperator** | [**DateJoinedListComparisonOperator2**](.md)|  | [optional] 
 **dateJoinedList** | [**[Date]**](Date.md)|  | [optional] 
 **firstNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **firstNameStr** | [**[String]**](String.md)|  | [optional] 
 **firstNameListComparisonOperator** | [**FirstNameListComparisonOperator2**](.md)|  | [optional] 
 **firstNameList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**AuthUserDeleteManyItemListResponseModel**](AuthUserDeleteManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOneByPrimaryKeyUsersIdDelete"></a>
# **deleteOneByPrimaryKeyUsersIdDelete**
> AuthUserDeleteOneResponseModel deleteOneByPrimaryKeyUsersIdDelete(id, opts)

Delete One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.AppApi();
let id = 56; // Number | 
let opts = { 
  'passwordStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'passwordStr': ["passwordStr_example"], // [String] | 
  'passwordListComparisonOperator': new FastApi.PasswordListComparisonOperator6(), // PasswordListComparisonOperator6 | 
  'passwordList': ["passwordList_example"], // [String] | 
  'lastLoginFromComparisonOperator': new FastApi.LastLoginFromComparisonOperator6(), // LastLoginFromComparisonOperator6 | 
  'lastLoginToComparisonOperator': new FastApi.LastLoginToComparisonOperator6(), // LastLoginToComparisonOperator6 | 
  'lastLoginFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginListComparisonOperator': new FastApi.LastLoginListComparisonOperator6(), // LastLoginListComparisonOperator6 | 
  'lastLoginList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'isSuperuserListComparisonOperator': new FastApi.IsSuperuserListComparisonOperator6(), // IsSuperuserListComparisonOperator6 | 
  'isSuperuserList': [true], // [Boolean] | 
  'usernameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'usernameStr': ["usernameStr_example"], // [String] | 
  'usernameListComparisonOperator': new FastApi.UsernameListComparisonOperator6(), // UsernameListComparisonOperator6 | 
  'usernameList': ["usernameList_example"], // [String] | 
  'lastNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'lastNameStr': ["lastNameStr_example"], // [String] | 
  'lastNameListComparisonOperator': new FastApi.LastNameListComparisonOperator6(), // LastNameListComparisonOperator6 | 
  'lastNameList': ["lastNameList_example"], // [String] | 
  'emailStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'emailStr': ["emailStr_example"], // [String] | 
  'emailListComparisonOperator': new FastApi.EmailListComparisonOperator6(), // EmailListComparisonOperator6 | 
  'emailList': ["emailList_example"], // [String] | 
  'isStaffListComparisonOperator': new FastApi.IsStaffListComparisonOperator6(), // IsStaffListComparisonOperator6 | 
  'isStaffList': [true], // [Boolean] | 
  'isActiveListComparisonOperator': new FastApi.IsActiveListComparisonOperator6(), // IsActiveListComparisonOperator6 | 
  'isActiveList': [true], // [Boolean] | 
  'dateJoinedFromComparisonOperator': new FastApi.DateJoinedFromComparisonOperator6(), // DateJoinedFromComparisonOperator6 | 
  'dateJoinedToComparisonOperator': new FastApi.DateJoinedToComparisonOperator6(), // DateJoinedToComparisonOperator6 | 
  'dateJoinedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedListComparisonOperator': new FastApi.DateJoinedListComparisonOperator6(), // DateJoinedListComparisonOperator6 | 
  'dateJoinedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'firstNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'firstNameStr': ["firstNameStr_example"], // [String] | 
  'firstNameListComparisonOperator': new FastApi.FirstNameListComparisonOperator6(), // FirstNameListComparisonOperator6 | 
  'firstNameList': ["firstNameList_example"] // [String] | 
};
apiInstance.deleteOneByPrimaryKeyUsersIdDelete(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **passwordStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **passwordStr** | [**[String]**](String.md)|  | [optional] 
 **passwordListComparisonOperator** | [**PasswordListComparisonOperator6**](.md)|  | [optional] 
 **passwordList** | [**[String]**](String.md)|  | [optional] 
 **lastLoginFromComparisonOperator** | [**LastLoginFromComparisonOperator6**](.md)|  | [optional] 
 **lastLoginToComparisonOperator** | [**LastLoginToComparisonOperator6**](.md)|  | [optional] 
 **lastLoginFrom** | **Date**|  | [optional] 
 **lastLoginTo** | **Date**|  | [optional] 
 **lastLoginListComparisonOperator** | [**LastLoginListComparisonOperator6**](.md)|  | [optional] 
 **lastLoginList** | [**[Date]**](Date.md)|  | [optional] 
 **isSuperuserListComparisonOperator** | [**IsSuperuserListComparisonOperator6**](.md)|  | [optional] 
 **isSuperuserList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **usernameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **usernameStr** | [**[String]**](String.md)|  | [optional] 
 **usernameListComparisonOperator** | [**UsernameListComparisonOperator6**](.md)|  | [optional] 
 **usernameList** | [**[String]**](String.md)|  | [optional] 
 **lastNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **lastNameStr** | [**[String]**](String.md)|  | [optional] 
 **lastNameListComparisonOperator** | [**LastNameListComparisonOperator6**](.md)|  | [optional] 
 **lastNameList** | [**[String]**](String.md)|  | [optional] 
 **emailStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **emailStr** | [**[String]**](String.md)|  | [optional] 
 **emailListComparisonOperator** | [**EmailListComparisonOperator6**](.md)|  | [optional] 
 **emailList** | [**[String]**](String.md)|  | [optional] 
 **isStaffListComparisonOperator** | [**IsStaffListComparisonOperator6**](.md)|  | [optional] 
 **isStaffList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **isActiveListComparisonOperator** | [**IsActiveListComparisonOperator6**](.md)|  | [optional] 
 **isActiveList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **dateJoinedFromComparisonOperator** | [**DateJoinedFromComparisonOperator6**](.md)|  | [optional] 
 **dateJoinedToComparisonOperator** | [**DateJoinedToComparisonOperator6**](.md)|  | [optional] 
 **dateJoinedFrom** | **Date**|  | [optional] 
 **dateJoinedTo** | **Date**|  | [optional] 
 **dateJoinedListComparisonOperator** | [**DateJoinedListComparisonOperator6**](.md)|  | [optional] 
 **dateJoinedList** | [**[Date]**](Date.md)|  | [optional] 
 **firstNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **firstNameStr** | [**[String]**](String.md)|  | [optional] 
 **firstNameListComparisonOperator** | [**FirstNameListComparisonOperator6**](.md)|  | [optional] 
 **firstNameList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**AuthUserDeleteOneResponseModel**](AuthUserDeleteOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="entireUpdateByPrimaryKeyUsersIdPut"></a>
# **entireUpdateByPrimaryKeyUsersIdPut**
> AuthUserUpdateOneResponseModel entireUpdateByPrimaryKeyUsersIdPut(body, id, opts)

Entire Update By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.AppApi();
let body = new FastApi.BodyEntireUpdateByPrimaryKeyUsersIdPut(); // BodyEntireUpdateByPrimaryKeyUsersIdPut | 
let id = 56; // Number | 
let opts = { 
  'passwordStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'passwordStr': ["passwordStr_example"], // [String] | 
  'passwordListComparisonOperator': new FastApi.PasswordListComparisonOperator5(), // PasswordListComparisonOperator5 | 
  'passwordList': ["passwordList_example"], // [String] | 
  'lastLoginFromComparisonOperator': new FastApi.LastLoginFromComparisonOperator5(), // LastLoginFromComparisonOperator5 | 
  'lastLoginToComparisonOperator': new FastApi.LastLoginToComparisonOperator5(), // LastLoginToComparisonOperator5 | 
  'lastLoginFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginListComparisonOperator': new FastApi.LastLoginListComparisonOperator5(), // LastLoginListComparisonOperator5 | 
  'lastLoginList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'isSuperuserListComparisonOperator': new FastApi.IsSuperuserListComparisonOperator5(), // IsSuperuserListComparisonOperator5 | 
  'isSuperuserList': [true], // [Boolean] | 
  'usernameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'usernameStr': ["usernameStr_example"], // [String] | 
  'usernameListComparisonOperator': new FastApi.UsernameListComparisonOperator5(), // UsernameListComparisonOperator5 | 
  'usernameList': ["usernameList_example"], // [String] | 
  'lastNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'lastNameStr': ["lastNameStr_example"], // [String] | 
  'lastNameListComparisonOperator': new FastApi.LastNameListComparisonOperator5(), // LastNameListComparisonOperator5 | 
  'lastNameList': ["lastNameList_example"], // [String] | 
  'emailStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'emailStr': ["emailStr_example"], // [String] | 
  'emailListComparisonOperator': new FastApi.EmailListComparisonOperator5(), // EmailListComparisonOperator5 | 
  'emailList': ["emailList_example"], // [String] | 
  'isStaffListComparisonOperator': new FastApi.IsStaffListComparisonOperator5(), // IsStaffListComparisonOperator5 | 
  'isStaffList': [true], // [Boolean] | 
  'isActiveListComparisonOperator': new FastApi.IsActiveListComparisonOperator5(), // IsActiveListComparisonOperator5 | 
  'isActiveList': [true], // [Boolean] | 
  'dateJoinedFromComparisonOperator': new FastApi.DateJoinedFromComparisonOperator5(), // DateJoinedFromComparisonOperator5 | 
  'dateJoinedToComparisonOperator': new FastApi.DateJoinedToComparisonOperator5(), // DateJoinedToComparisonOperator5 | 
  'dateJoinedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedListComparisonOperator': new FastApi.DateJoinedListComparisonOperator5(), // DateJoinedListComparisonOperator5 | 
  'dateJoinedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'firstNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'firstNameStr': ["firstNameStr_example"], // [String] | 
  'firstNameListComparisonOperator': new FastApi.FirstNameListComparisonOperator5(), // FirstNameListComparisonOperator5 | 
  'firstNameList': ["firstNameList_example"] // [String] | 
};
apiInstance.entireUpdateByPrimaryKeyUsersIdPut(body, id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BodyEntireUpdateByPrimaryKeyUsersIdPut**](BodyEntireUpdateByPrimaryKeyUsersIdPut.md)|  | 
 **id** | **Number**|  | 
 **passwordStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **passwordStr** | [**[String]**](String.md)|  | [optional] 
 **passwordListComparisonOperator** | [**PasswordListComparisonOperator5**](.md)|  | [optional] 
 **passwordList** | [**[String]**](String.md)|  | [optional] 
 **lastLoginFromComparisonOperator** | [**LastLoginFromComparisonOperator5**](.md)|  | [optional] 
 **lastLoginToComparisonOperator** | [**LastLoginToComparisonOperator5**](.md)|  | [optional] 
 **lastLoginFrom** | **Date**|  | [optional] 
 **lastLoginTo** | **Date**|  | [optional] 
 **lastLoginListComparisonOperator** | [**LastLoginListComparisonOperator5**](.md)|  | [optional] 
 **lastLoginList** | [**[Date]**](Date.md)|  | [optional] 
 **isSuperuserListComparisonOperator** | [**IsSuperuserListComparisonOperator5**](.md)|  | [optional] 
 **isSuperuserList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **usernameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **usernameStr** | [**[String]**](String.md)|  | [optional] 
 **usernameListComparisonOperator** | [**UsernameListComparisonOperator5**](.md)|  | [optional] 
 **usernameList** | [**[String]**](String.md)|  | [optional] 
 **lastNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **lastNameStr** | [**[String]**](String.md)|  | [optional] 
 **lastNameListComparisonOperator** | [**LastNameListComparisonOperator5**](.md)|  | [optional] 
 **lastNameList** | [**[String]**](String.md)|  | [optional] 
 **emailStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **emailStr** | [**[String]**](String.md)|  | [optional] 
 **emailListComparisonOperator** | [**EmailListComparisonOperator5**](.md)|  | [optional] 
 **emailList** | [**[String]**](String.md)|  | [optional] 
 **isStaffListComparisonOperator** | [**IsStaffListComparisonOperator5**](.md)|  | [optional] 
 **isStaffList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **isActiveListComparisonOperator** | [**IsActiveListComparisonOperator5**](.md)|  | [optional] 
 **isActiveList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **dateJoinedFromComparisonOperator** | [**DateJoinedFromComparisonOperator5**](.md)|  | [optional] 
 **dateJoinedToComparisonOperator** | [**DateJoinedToComparisonOperator5**](.md)|  | [optional] 
 **dateJoinedFrom** | **Date**|  | [optional] 
 **dateJoinedTo** | **Date**|  | [optional] 
 **dateJoinedListComparisonOperator** | [**DateJoinedListComparisonOperator5**](.md)|  | [optional] 
 **dateJoinedList** | [**[Date]**](Date.md)|  | [optional] 
 **firstNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **firstNameStr** | [**[String]**](String.md)|  | [optional] 
 **firstNameListComparisonOperator** | [**FirstNameListComparisonOperator5**](.md)|  | [optional] 
 **firstNameList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**AuthUserUpdateOneResponseModel**](AuthUserUpdateOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="entireUpdateManyByQueryUsersPut"></a>
# **entireUpdateManyByQueryUsersPut**
> AuthUserUpdateManyItemListResponseModel entireUpdateManyByQueryUsersPut(body, opts)

Entire Update Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.AppApi();
let body = new FastApi.BodyEntireUpdateManyByQueryUsersPut(); // BodyEntireUpdateManyByQueryUsersPut | 
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator17(), // IdFromComparisonOperator17 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator17(), // IdToComparisonOperator17 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator17(), // IdListComparisonOperator17 | 
  'idList': [3.4], // [Number] | 
  'passwordStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'passwordStr': ["passwordStr_example"], // [String] | 
  'passwordListComparisonOperator': new FastApi.PasswordListComparisonOperator1(), // PasswordListComparisonOperator1 | 
  'passwordList': ["passwordList_example"], // [String] | 
  'lastLoginFromComparisonOperator': new FastApi.LastLoginFromComparisonOperator1(), // LastLoginFromComparisonOperator1 | 
  'lastLoginToComparisonOperator': new FastApi.LastLoginToComparisonOperator1(), // LastLoginToComparisonOperator1 | 
  'lastLoginFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginListComparisonOperator': new FastApi.LastLoginListComparisonOperator1(), // LastLoginListComparisonOperator1 | 
  'lastLoginList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'isSuperuserListComparisonOperator': new FastApi.IsSuperuserListComparisonOperator1(), // IsSuperuserListComparisonOperator1 | 
  'isSuperuserList': [true], // [Boolean] | 
  'usernameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'usernameStr': ["usernameStr_example"], // [String] | 
  'usernameListComparisonOperator': new FastApi.UsernameListComparisonOperator1(), // UsernameListComparisonOperator1 | 
  'usernameList': ["usernameList_example"], // [String] | 
  'lastNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'lastNameStr': ["lastNameStr_example"], // [String] | 
  'lastNameListComparisonOperator': new FastApi.LastNameListComparisonOperator1(), // LastNameListComparisonOperator1 | 
  'lastNameList': ["lastNameList_example"], // [String] | 
  'emailStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'emailStr': ["emailStr_example"], // [String] | 
  'emailListComparisonOperator': new FastApi.EmailListComparisonOperator1(), // EmailListComparisonOperator1 | 
  'emailList': ["emailList_example"], // [String] | 
  'isStaffListComparisonOperator': new FastApi.IsStaffListComparisonOperator1(), // IsStaffListComparisonOperator1 | 
  'isStaffList': [true], // [Boolean] | 
  'isActiveListComparisonOperator': new FastApi.IsActiveListComparisonOperator1(), // IsActiveListComparisonOperator1 | 
  'isActiveList': [true], // [Boolean] | 
  'dateJoinedFromComparisonOperator': new FastApi.DateJoinedFromComparisonOperator1(), // DateJoinedFromComparisonOperator1 | 
  'dateJoinedToComparisonOperator': new FastApi.DateJoinedToComparisonOperator1(), // DateJoinedToComparisonOperator1 | 
  'dateJoinedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedListComparisonOperator': new FastApi.DateJoinedListComparisonOperator1(), // DateJoinedListComparisonOperator1 | 
  'dateJoinedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'firstNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'firstNameStr': ["firstNameStr_example"], // [String] | 
  'firstNameListComparisonOperator': new FastApi.FirstNameListComparisonOperator1(), // FirstNameListComparisonOperator1 | 
  'firstNameList': ["firstNameList_example"] // [String] | 
};
apiInstance.entireUpdateManyByQueryUsersPut(body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BodyEntireUpdateManyByQueryUsersPut**](BodyEntireUpdateManyByQueryUsersPut.md)|  | 
 **idFromComparisonOperator** | [**IdFromComparisonOperator17**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator17**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator17**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **passwordStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **passwordStr** | [**[String]**](String.md)|  | [optional] 
 **passwordListComparisonOperator** | [**PasswordListComparisonOperator1**](.md)|  | [optional] 
 **passwordList** | [**[String]**](String.md)|  | [optional] 
 **lastLoginFromComparisonOperator** | [**LastLoginFromComparisonOperator1**](.md)|  | [optional] 
 **lastLoginToComparisonOperator** | [**LastLoginToComparisonOperator1**](.md)|  | [optional] 
 **lastLoginFrom** | **Date**|  | [optional] 
 **lastLoginTo** | **Date**|  | [optional] 
 **lastLoginListComparisonOperator** | [**LastLoginListComparisonOperator1**](.md)|  | [optional] 
 **lastLoginList** | [**[Date]**](Date.md)|  | [optional] 
 **isSuperuserListComparisonOperator** | [**IsSuperuserListComparisonOperator1**](.md)|  | [optional] 
 **isSuperuserList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **usernameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **usernameStr** | [**[String]**](String.md)|  | [optional] 
 **usernameListComparisonOperator** | [**UsernameListComparisonOperator1**](.md)|  | [optional] 
 **usernameList** | [**[String]**](String.md)|  | [optional] 
 **lastNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **lastNameStr** | [**[String]**](String.md)|  | [optional] 
 **lastNameListComparisonOperator** | [**LastNameListComparisonOperator1**](.md)|  | [optional] 
 **lastNameList** | [**[String]**](String.md)|  | [optional] 
 **emailStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **emailStr** | [**[String]**](String.md)|  | [optional] 
 **emailListComparisonOperator** | [**EmailListComparisonOperator1**](.md)|  | [optional] 
 **emailList** | [**[String]**](String.md)|  | [optional] 
 **isStaffListComparisonOperator** | [**IsStaffListComparisonOperator1**](.md)|  | [optional] 
 **isStaffList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **isActiveListComparisonOperator** | [**IsActiveListComparisonOperator1**](.md)|  | [optional] 
 **isActiveList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **dateJoinedFromComparisonOperator** | [**DateJoinedFromComparisonOperator1**](.md)|  | [optional] 
 **dateJoinedToComparisonOperator** | [**DateJoinedToComparisonOperator1**](.md)|  | [optional] 
 **dateJoinedFrom** | **Date**|  | [optional] 
 **dateJoinedTo** | **Date**|  | [optional] 
 **dateJoinedListComparisonOperator** | [**DateJoinedListComparisonOperator1**](.md)|  | [optional] 
 **dateJoinedList** | [**[Date]**](Date.md)|  | [optional] 
 **firstNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **firstNameStr** | [**[String]**](String.md)|  | [optional] 
 **firstNameListComparisonOperator** | [**FirstNameListComparisonOperator1**](.md)|  | [optional] 
 **firstNameList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**AuthUserUpdateManyItemListResponseModel**](AuthUserUpdateManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getManyUsersGet"></a>
# **getManyUsersGet**
> AuthUserFindManyItemListResponseModel getManyUsersGet(opts)

Get Many

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.AppApi();
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator16(), // IdFromComparisonOperator16 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator16(), // IdToComparisonOperator16 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator16(), // IdListComparisonOperator16 | 
  'idList': [3.4], // [Number] | 
  'passwordStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'passwordStr': ["passwordStr_example"], // [String] | 
  'passwordListComparisonOperator': new FastApi.PasswordListComparisonOperator(), // PasswordListComparisonOperator | 
  'passwordList': ["passwordList_example"], // [String] | 
  'lastLoginFromComparisonOperator': new FastApi.LastLoginFromComparisonOperator(), // LastLoginFromComparisonOperator | 
  'lastLoginToComparisonOperator': new FastApi.LastLoginToComparisonOperator(), // LastLoginToComparisonOperator | 
  'lastLoginFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginListComparisonOperator': new FastApi.LastLoginListComparisonOperator(), // LastLoginListComparisonOperator | 
  'lastLoginList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'isSuperuserListComparisonOperator': new FastApi.IsSuperuserListComparisonOperator(), // IsSuperuserListComparisonOperator | 
  'isSuperuserList': [true], // [Boolean] | 
  'usernameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'usernameStr': ["usernameStr_example"], // [String] | 
  'usernameListComparisonOperator': new FastApi.UsernameListComparisonOperator(), // UsernameListComparisonOperator | 
  'usernameList': ["usernameList_example"], // [String] | 
  'lastNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'lastNameStr': ["lastNameStr_example"], // [String] | 
  'lastNameListComparisonOperator': new FastApi.LastNameListComparisonOperator(), // LastNameListComparisonOperator | 
  'lastNameList': ["lastNameList_example"], // [String] | 
  'emailStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'emailStr': ["emailStr_example"], // [String] | 
  'emailListComparisonOperator': new FastApi.EmailListComparisonOperator(), // EmailListComparisonOperator | 
  'emailList': ["emailList_example"], // [String] | 
  'isStaffListComparisonOperator': new FastApi.IsStaffListComparisonOperator(), // IsStaffListComparisonOperator | 
  'isStaffList': [true], // [Boolean] | 
  'isActiveListComparisonOperator': new FastApi.IsActiveListComparisonOperator(), // IsActiveListComparisonOperator | 
  'isActiveList': [true], // [Boolean] | 
  'dateJoinedFromComparisonOperator': new FastApi.DateJoinedFromComparisonOperator(), // DateJoinedFromComparisonOperator | 
  'dateJoinedToComparisonOperator': new FastApi.DateJoinedToComparisonOperator(), // DateJoinedToComparisonOperator | 
  'dateJoinedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedListComparisonOperator': new FastApi.DateJoinedListComparisonOperator(), // DateJoinedListComparisonOperator | 
  'dateJoinedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'firstNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'firstNameStr': ["firstNameStr_example"], // [String] | 
  'firstNameListComparisonOperator': new FastApi.FirstNameListComparisonOperator(), // FirstNameListComparisonOperator | 
  'firstNameList': ["firstNameList_example"], // [String] | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'orderByColumns': ["orderByColumns_example"] // [String] | <br> support column:              <br> ['id', 'password', 'last_login', 'is_superuser', 'username', 'last_name', 'email', 'is_staff', 'is_active', 'date_joined', 'first_name'] <hr><br> support ordering:               <br> ['DESC', 'ASC']              <hr>              <br/>example:              <br/>&emsp;&emsp;any name of column:ASC             <br/>&emsp;&emsp;any name of column: DESC              <br/>&emsp;&emsp;any name of column    :    DESC             <br/>&emsp;&emsp;any name of column (default sort by ASC)
};
apiInstance.getManyUsersGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idFromComparisonOperator** | [**IdFromComparisonOperator16**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator16**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator16**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **passwordStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **passwordStr** | [**[String]**](String.md)|  | [optional] 
 **passwordListComparisonOperator** | [**PasswordListComparisonOperator**](.md)|  | [optional] 
 **passwordList** | [**[String]**](String.md)|  | [optional] 
 **lastLoginFromComparisonOperator** | [**LastLoginFromComparisonOperator**](.md)|  | [optional] 
 **lastLoginToComparisonOperator** | [**LastLoginToComparisonOperator**](.md)|  | [optional] 
 **lastLoginFrom** | **Date**|  | [optional] 
 **lastLoginTo** | **Date**|  | [optional] 
 **lastLoginListComparisonOperator** | [**LastLoginListComparisonOperator**](.md)|  | [optional] 
 **lastLoginList** | [**[Date]**](Date.md)|  | [optional] 
 **isSuperuserListComparisonOperator** | [**IsSuperuserListComparisonOperator**](.md)|  | [optional] 
 **isSuperuserList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **usernameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **usernameStr** | [**[String]**](String.md)|  | [optional] 
 **usernameListComparisonOperator** | [**UsernameListComparisonOperator**](.md)|  | [optional] 
 **usernameList** | [**[String]**](String.md)|  | [optional] 
 **lastNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **lastNameStr** | [**[String]**](String.md)|  | [optional] 
 **lastNameListComparisonOperator** | [**LastNameListComparisonOperator**](.md)|  | [optional] 
 **lastNameList** | [**[String]**](String.md)|  | [optional] 
 **emailStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **emailStr** | [**[String]**](String.md)|  | [optional] 
 **emailListComparisonOperator** | [**EmailListComparisonOperator**](.md)|  | [optional] 
 **emailList** | [**[String]**](String.md)|  | [optional] 
 **isStaffListComparisonOperator** | [**IsStaffListComparisonOperator**](.md)|  | [optional] 
 **isStaffList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **isActiveListComparisonOperator** | [**IsActiveListComparisonOperator**](.md)|  | [optional] 
 **isActiveList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **dateJoinedFromComparisonOperator** | [**DateJoinedFromComparisonOperator**](.md)|  | [optional] 
 **dateJoinedToComparisonOperator** | [**DateJoinedToComparisonOperator**](.md)|  | [optional] 
 **dateJoinedFrom** | **Date**|  | [optional] 
 **dateJoinedTo** | **Date**|  | [optional] 
 **dateJoinedListComparisonOperator** | [**DateJoinedListComparisonOperator**](.md)|  | [optional] 
 **dateJoinedList** | [**[Date]**](Date.md)|  | [optional] 
 **firstNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **firstNameStr** | [**[String]**](String.md)|  | [optional] 
 **firstNameListComparisonOperator** | [**FirstNameListComparisonOperator**](.md)|  | [optional] 
 **firstNameList** | [**[String]**](String.md)|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **orderByColumns** | [**[String]**](String.md)| &lt;br&gt; support column:              &lt;br&gt; [&#x27;id&#x27;, &#x27;password&#x27;, &#x27;last_login&#x27;, &#x27;is_superuser&#x27;, &#x27;username&#x27;, &#x27;last_name&#x27;, &#x27;email&#x27;, &#x27;is_staff&#x27;, &#x27;is_active&#x27;, &#x27;date_joined&#x27;, &#x27;first_name&#x27;] &lt;hr&gt;&lt;br&gt; support ordering:               &lt;br&gt; [&#x27;DESC&#x27;, &#x27;ASC&#x27;]              &lt;hr&gt;              &lt;br/&gt;example:              &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column:ASC             &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column: DESC              &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column    :    DESC             &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column (default sort by ASC) | [optional] 

### Return type

[**AuthUserFindManyItemListResponseModel**](AuthUserFindManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneByPrimaryKeyUsersIdGet"></a>
# **getOneByPrimaryKeyUsersIdGet**
> AuthUserFindOneResponseModel getOneByPrimaryKeyUsersIdGet(id, opts)

Get One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.AppApi();
let id = 56; // Number | 
let opts = { 
  'passwordStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'passwordStr': ["passwordStr_example"], // [String] | 
  'passwordListComparisonOperator': new FastApi.PasswordListComparisonOperator4(), // PasswordListComparisonOperator4 | 
  'passwordList': ["passwordList_example"], // [String] | 
  'lastLoginFromComparisonOperator': new FastApi.LastLoginFromComparisonOperator4(), // LastLoginFromComparisonOperator4 | 
  'lastLoginToComparisonOperator': new FastApi.LastLoginToComparisonOperator4(), // LastLoginToComparisonOperator4 | 
  'lastLoginFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginListComparisonOperator': new FastApi.LastLoginListComparisonOperator4(), // LastLoginListComparisonOperator4 | 
  'lastLoginList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'isSuperuserListComparisonOperator': new FastApi.IsSuperuserListComparisonOperator4(), // IsSuperuserListComparisonOperator4 | 
  'isSuperuserList': [true], // [Boolean] | 
  'usernameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'usernameStr': ["usernameStr_example"], // [String] | 
  'usernameListComparisonOperator': new FastApi.UsernameListComparisonOperator4(), // UsernameListComparisonOperator4 | 
  'usernameList': ["usernameList_example"], // [String] | 
  'lastNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'lastNameStr': ["lastNameStr_example"], // [String] | 
  'lastNameListComparisonOperator': new FastApi.LastNameListComparisonOperator4(), // LastNameListComparisonOperator4 | 
  'lastNameList': ["lastNameList_example"], // [String] | 
  'emailStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'emailStr': ["emailStr_example"], // [String] | 
  'emailListComparisonOperator': new FastApi.EmailListComparisonOperator4(), // EmailListComparisonOperator4 | 
  'emailList': ["emailList_example"], // [String] | 
  'isStaffListComparisonOperator': new FastApi.IsStaffListComparisonOperator4(), // IsStaffListComparisonOperator4 | 
  'isStaffList': [true], // [Boolean] | 
  'isActiveListComparisonOperator': new FastApi.IsActiveListComparisonOperator4(), // IsActiveListComparisonOperator4 | 
  'isActiveList': [true], // [Boolean] | 
  'dateJoinedFromComparisonOperator': new FastApi.DateJoinedFromComparisonOperator4(), // DateJoinedFromComparisonOperator4 | 
  'dateJoinedToComparisonOperator': new FastApi.DateJoinedToComparisonOperator4(), // DateJoinedToComparisonOperator4 | 
  'dateJoinedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedListComparisonOperator': new FastApi.DateJoinedListComparisonOperator4(), // DateJoinedListComparisonOperator4 | 
  'dateJoinedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'firstNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'firstNameStr': ["firstNameStr_example"], // [String] | 
  'firstNameListComparisonOperator': new FastApi.FirstNameListComparisonOperator4(), // FirstNameListComparisonOperator4 | 
  'firstNameList': ["firstNameList_example"] // [String] | 
};
apiInstance.getOneByPrimaryKeyUsersIdGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **passwordStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **passwordStr** | [**[String]**](String.md)|  | [optional] 
 **passwordListComparisonOperator** | [**PasswordListComparisonOperator4**](.md)|  | [optional] 
 **passwordList** | [**[String]**](String.md)|  | [optional] 
 **lastLoginFromComparisonOperator** | [**LastLoginFromComparisonOperator4**](.md)|  | [optional] 
 **lastLoginToComparisonOperator** | [**LastLoginToComparisonOperator4**](.md)|  | [optional] 
 **lastLoginFrom** | **Date**|  | [optional] 
 **lastLoginTo** | **Date**|  | [optional] 
 **lastLoginListComparisonOperator** | [**LastLoginListComparisonOperator4**](.md)|  | [optional] 
 **lastLoginList** | [**[Date]**](Date.md)|  | [optional] 
 **isSuperuserListComparisonOperator** | [**IsSuperuserListComparisonOperator4**](.md)|  | [optional] 
 **isSuperuserList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **usernameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **usernameStr** | [**[String]**](String.md)|  | [optional] 
 **usernameListComparisonOperator** | [**UsernameListComparisonOperator4**](.md)|  | [optional] 
 **usernameList** | [**[String]**](String.md)|  | [optional] 
 **lastNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **lastNameStr** | [**[String]**](String.md)|  | [optional] 
 **lastNameListComparisonOperator** | [**LastNameListComparisonOperator4**](.md)|  | [optional] 
 **lastNameList** | [**[String]**](String.md)|  | [optional] 
 **emailStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **emailStr** | [**[String]**](String.md)|  | [optional] 
 **emailListComparisonOperator** | [**EmailListComparisonOperator4**](.md)|  | [optional] 
 **emailList** | [**[String]**](String.md)|  | [optional] 
 **isStaffListComparisonOperator** | [**IsStaffListComparisonOperator4**](.md)|  | [optional] 
 **isStaffList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **isActiveListComparisonOperator** | [**IsActiveListComparisonOperator4**](.md)|  | [optional] 
 **isActiveList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **dateJoinedFromComparisonOperator** | [**DateJoinedFromComparisonOperator4**](.md)|  | [optional] 
 **dateJoinedToComparisonOperator** | [**DateJoinedToComparisonOperator4**](.md)|  | [optional] 
 **dateJoinedFrom** | **Date**|  | [optional] 
 **dateJoinedTo** | **Date**|  | [optional] 
 **dateJoinedListComparisonOperator** | [**DateJoinedListComparisonOperator4**](.md)|  | [optional] 
 **dateJoinedList** | [**[Date]**](Date.md)|  | [optional] 
 **firstNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **firstNameStr** | [**[String]**](String.md)|  | [optional] 
 **firstNameListComparisonOperator** | [**FirstNameListComparisonOperator4**](.md)|  | [optional] 
 **firstNameList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**AuthUserFindOneResponseModel**](AuthUserFindOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="insertManyUsersPost"></a>
# **insertManyUsersPost**
> AuthUserCreateManyItemListResponseModel insertManyUsersPost(body)

Insert Many

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.AppApi();
let body = [new FastApi.AuthUserCreateManyItemRequestModel()]; // [AuthUserCreateManyItemRequestModel] | 

apiInstance.insertManyUsersPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[AuthUserCreateManyItemRequestModel]**](AuthUserCreateManyItemRequestModel.md)|  | 

### Return type

[**AuthUserCreateManyItemListResponseModel**](AuthUserCreateManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partialUpdateManyByQueryUsersPatch"></a>
# **partialUpdateManyByQueryUsersPatch**
> AuthUserPatchManyItemListResponseModel partialUpdateManyByQueryUsersPatch(opts)

Partial Update Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.AppApi();
let opts = { 
  'body': new FastApi.BodyPartialUpdateManyByQueryUsersPatch(), // BodyPartialUpdateManyByQueryUsersPatch | 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator19(), // IdFromComparisonOperator19 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator19(), // IdToComparisonOperator19 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator19(), // IdListComparisonOperator19 | 
  'idList': [3.4], // [Number] | 
  'passwordStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'passwordStr': ["passwordStr_example"], // [String] | 
  'passwordListComparisonOperator': new FastApi.PasswordListComparisonOperator3(), // PasswordListComparisonOperator3 | 
  'passwordList': ["passwordList_example"], // [String] | 
  'lastLoginFromComparisonOperator': new FastApi.LastLoginFromComparisonOperator3(), // LastLoginFromComparisonOperator3 | 
  'lastLoginToComparisonOperator': new FastApi.LastLoginToComparisonOperator3(), // LastLoginToComparisonOperator3 | 
  'lastLoginFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginListComparisonOperator': new FastApi.LastLoginListComparisonOperator3(), // LastLoginListComparisonOperator3 | 
  'lastLoginList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'isSuperuserListComparisonOperator': new FastApi.IsSuperuserListComparisonOperator3(), // IsSuperuserListComparisonOperator3 | 
  'isSuperuserList': [true], // [Boolean] | 
  'usernameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'usernameStr': ["usernameStr_example"], // [String] | 
  'usernameListComparisonOperator': new FastApi.UsernameListComparisonOperator3(), // UsernameListComparisonOperator3 | 
  'usernameList': ["usernameList_example"], // [String] | 
  'lastNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'lastNameStr': ["lastNameStr_example"], // [String] | 
  'lastNameListComparisonOperator': new FastApi.LastNameListComparisonOperator3(), // LastNameListComparisonOperator3 | 
  'lastNameList': ["lastNameList_example"], // [String] | 
  'emailStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'emailStr': ["emailStr_example"], // [String] | 
  'emailListComparisonOperator': new FastApi.EmailListComparisonOperator3(), // EmailListComparisonOperator3 | 
  'emailList': ["emailList_example"], // [String] | 
  'isStaffListComparisonOperator': new FastApi.IsStaffListComparisonOperator3(), // IsStaffListComparisonOperator3 | 
  'isStaffList': [true], // [Boolean] | 
  'isActiveListComparisonOperator': new FastApi.IsActiveListComparisonOperator3(), // IsActiveListComparisonOperator3 | 
  'isActiveList': [true], // [Boolean] | 
  'dateJoinedFromComparisonOperator': new FastApi.DateJoinedFromComparisonOperator3(), // DateJoinedFromComparisonOperator3 | 
  'dateJoinedToComparisonOperator': new FastApi.DateJoinedToComparisonOperator3(), // DateJoinedToComparisonOperator3 | 
  'dateJoinedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedListComparisonOperator': new FastApi.DateJoinedListComparisonOperator3(), // DateJoinedListComparisonOperator3 | 
  'dateJoinedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'firstNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'firstNameStr': ["firstNameStr_example"], // [String] | 
  'firstNameListComparisonOperator': new FastApi.FirstNameListComparisonOperator3(), // FirstNameListComparisonOperator3 | 
  'firstNameList': ["firstNameList_example"] // [String] | 
};
apiInstance.partialUpdateManyByQueryUsersPatch(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**BodyPartialUpdateManyByQueryUsersPatch**](BodyPartialUpdateManyByQueryUsersPatch.md)|  | [optional] 
 **idFromComparisonOperator** | [**IdFromComparisonOperator19**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator19**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator19**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **passwordStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **passwordStr** | [**[String]**](String.md)|  | [optional] 
 **passwordListComparisonOperator** | [**PasswordListComparisonOperator3**](.md)|  | [optional] 
 **passwordList** | [**[String]**](String.md)|  | [optional] 
 **lastLoginFromComparisonOperator** | [**LastLoginFromComparisonOperator3**](.md)|  | [optional] 
 **lastLoginToComparisonOperator** | [**LastLoginToComparisonOperator3**](.md)|  | [optional] 
 **lastLoginFrom** | **Date**|  | [optional] 
 **lastLoginTo** | **Date**|  | [optional] 
 **lastLoginListComparisonOperator** | [**LastLoginListComparisonOperator3**](.md)|  | [optional] 
 **lastLoginList** | [**[Date]**](Date.md)|  | [optional] 
 **isSuperuserListComparisonOperator** | [**IsSuperuserListComparisonOperator3**](.md)|  | [optional] 
 **isSuperuserList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **usernameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **usernameStr** | [**[String]**](String.md)|  | [optional] 
 **usernameListComparisonOperator** | [**UsernameListComparisonOperator3**](.md)|  | [optional] 
 **usernameList** | [**[String]**](String.md)|  | [optional] 
 **lastNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **lastNameStr** | [**[String]**](String.md)|  | [optional] 
 **lastNameListComparisonOperator** | [**LastNameListComparisonOperator3**](.md)|  | [optional] 
 **lastNameList** | [**[String]**](String.md)|  | [optional] 
 **emailStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **emailStr** | [**[String]**](String.md)|  | [optional] 
 **emailListComparisonOperator** | [**EmailListComparisonOperator3**](.md)|  | [optional] 
 **emailList** | [**[String]**](String.md)|  | [optional] 
 **isStaffListComparisonOperator** | [**IsStaffListComparisonOperator3**](.md)|  | [optional] 
 **isStaffList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **isActiveListComparisonOperator** | [**IsActiveListComparisonOperator3**](.md)|  | [optional] 
 **isActiveList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **dateJoinedFromComparisonOperator** | [**DateJoinedFromComparisonOperator3**](.md)|  | [optional] 
 **dateJoinedToComparisonOperator** | [**DateJoinedToComparisonOperator3**](.md)|  | [optional] 
 **dateJoinedFrom** | **Date**|  | [optional] 
 **dateJoinedTo** | **Date**|  | [optional] 
 **dateJoinedListComparisonOperator** | [**DateJoinedListComparisonOperator3**](.md)|  | [optional] 
 **dateJoinedList** | [**[Date]**](Date.md)|  | [optional] 
 **firstNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **firstNameStr** | [**[String]**](String.md)|  | [optional] 
 **firstNameListComparisonOperator** | [**FirstNameListComparisonOperator3**](.md)|  | [optional] 
 **firstNameList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**AuthUserPatchManyItemListResponseModel**](AuthUserPatchManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partialUpdateOneByPrimaryKeyUsersIdPatch"></a>
# **partialUpdateOneByPrimaryKeyUsersIdPatch**
> AuthUserPatchOneResponseModel partialUpdateOneByPrimaryKeyUsersIdPatch(id, opts)

Partial Update One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.AppApi();
let id = 56; // Number | 
let opts = { 
  'body': new FastApi.BodyPartialUpdateOneByPrimaryKeyUsersIdPatch(), // BodyPartialUpdateOneByPrimaryKeyUsersIdPatch | 
  'passwordStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'passwordStr': ["passwordStr_example"], // [String] | 
  'passwordListComparisonOperator': new FastApi.PasswordListComparisonOperator7(), // PasswordListComparisonOperator7 | 
  'passwordList': ["passwordList_example"], // [String] | 
  'lastLoginFromComparisonOperator': new FastApi.LastLoginFromComparisonOperator7(), // LastLoginFromComparisonOperator7 | 
  'lastLoginToComparisonOperator': new FastApi.LastLoginToComparisonOperator7(), // LastLoginToComparisonOperator7 | 
  'lastLoginFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'lastLoginListComparisonOperator': new FastApi.LastLoginListComparisonOperator7(), // LastLoginListComparisonOperator7 | 
  'lastLoginList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'isSuperuserListComparisonOperator': new FastApi.IsSuperuserListComparisonOperator7(), // IsSuperuserListComparisonOperator7 | 
  'isSuperuserList': [true], // [Boolean] | 
  'usernameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'usernameStr': ["usernameStr_example"], // [String] | 
  'usernameListComparisonOperator': new FastApi.UsernameListComparisonOperator7(), // UsernameListComparisonOperator7 | 
  'usernameList': ["usernameList_example"], // [String] | 
  'lastNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'lastNameStr': ["lastNameStr_example"], // [String] | 
  'lastNameListComparisonOperator': new FastApi.LastNameListComparisonOperator7(), // LastNameListComparisonOperator7 | 
  'lastNameList': ["lastNameList_example"], // [String] | 
  'emailStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'emailStr': ["emailStr_example"], // [String] | 
  'emailListComparisonOperator': new FastApi.EmailListComparisonOperator7(), // EmailListComparisonOperator7 | 
  'emailList': ["emailList_example"], // [String] | 
  'isStaffListComparisonOperator': new FastApi.IsStaffListComparisonOperator7(), // IsStaffListComparisonOperator7 | 
  'isStaffList': [true], // [Boolean] | 
  'isActiveListComparisonOperator': new FastApi.IsActiveListComparisonOperator7(), // IsActiveListComparisonOperator7 | 
  'isActiveList': [true], // [Boolean] | 
  'dateJoinedFromComparisonOperator': new FastApi.DateJoinedFromComparisonOperator7(), // DateJoinedFromComparisonOperator7 | 
  'dateJoinedToComparisonOperator': new FastApi.DateJoinedToComparisonOperator7(), // DateJoinedToComparisonOperator7 | 
  'dateJoinedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'dateJoinedListComparisonOperator': new FastApi.DateJoinedListComparisonOperator7(), // DateJoinedListComparisonOperator7 | 
  'dateJoinedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'firstNameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'firstNameStr': ["firstNameStr_example"], // [String] | 
  'firstNameListComparisonOperator': new FastApi.FirstNameListComparisonOperator7(), // FirstNameListComparisonOperator7 | 
  'firstNameList': ["firstNameList_example"] // [String] | 
};
apiInstance.partialUpdateOneByPrimaryKeyUsersIdPatch(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 
 **body** | [**BodyPartialUpdateOneByPrimaryKeyUsersIdPatch**](BodyPartialUpdateOneByPrimaryKeyUsersIdPatch.md)|  | [optional] 
 **passwordStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **passwordStr** | [**[String]**](String.md)|  | [optional] 
 **passwordListComparisonOperator** | [**PasswordListComparisonOperator7**](.md)|  | [optional] 
 **passwordList** | [**[String]**](String.md)|  | [optional] 
 **lastLoginFromComparisonOperator** | [**LastLoginFromComparisonOperator7**](.md)|  | [optional] 
 **lastLoginToComparisonOperator** | [**LastLoginToComparisonOperator7**](.md)|  | [optional] 
 **lastLoginFrom** | **Date**|  | [optional] 
 **lastLoginTo** | **Date**|  | [optional] 
 **lastLoginListComparisonOperator** | [**LastLoginListComparisonOperator7**](.md)|  | [optional] 
 **lastLoginList** | [**[Date]**](Date.md)|  | [optional] 
 **isSuperuserListComparisonOperator** | [**IsSuperuserListComparisonOperator7**](.md)|  | [optional] 
 **isSuperuserList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **usernameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **usernameStr** | [**[String]**](String.md)|  | [optional] 
 **usernameListComparisonOperator** | [**UsernameListComparisonOperator7**](.md)|  | [optional] 
 **usernameList** | [**[String]**](String.md)|  | [optional] 
 **lastNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **lastNameStr** | [**[String]**](String.md)|  | [optional] 
 **lastNameListComparisonOperator** | [**LastNameListComparisonOperator7**](.md)|  | [optional] 
 **lastNameList** | [**[String]**](String.md)|  | [optional] 
 **emailStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **emailStr** | [**[String]**](String.md)|  | [optional] 
 **emailListComparisonOperator** | [**EmailListComparisonOperator7**](.md)|  | [optional] 
 **emailList** | [**[String]**](String.md)|  | [optional] 
 **isStaffListComparisonOperator** | [**IsStaffListComparisonOperator7**](.md)|  | [optional] 
 **isStaffList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **isActiveListComparisonOperator** | [**IsActiveListComparisonOperator7**](.md)|  | [optional] 
 **isActiveList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **dateJoinedFromComparisonOperator** | [**DateJoinedFromComparisonOperator7**](.md)|  | [optional] 
 **dateJoinedToComparisonOperator** | [**DateJoinedToComparisonOperator7**](.md)|  | [optional] 
 **dateJoinedFrom** | **Date**|  | [optional] 
 **dateJoinedTo** | **Date**|  | [optional] 
 **dateJoinedListComparisonOperator** | [**DateJoinedListComparisonOperator7**](.md)|  | [optional] 
 **dateJoinedList** | [**[Date]**](Date.md)|  | [optional] 
 **firstNameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **firstNameStr** | [**[String]**](String.md)|  | [optional] 
 **firstNameListComparisonOperator** | [**FirstNameListComparisonOperator7**](.md)|  | [optional] 
 **firstNameList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**AuthUserPatchOneResponseModel**](AuthUserPatchOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

