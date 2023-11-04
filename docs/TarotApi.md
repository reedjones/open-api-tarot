# FastApi.TarotApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteManyByQuerySpreadsDelete**](TarotApi.md#deleteManyByQuerySpreadsDelete) | **DELETE** /spreads | Delete Many By Query
[**deleteOneByPrimaryKeySpreadsIdDelete**](TarotApi.md#deleteOneByPrimaryKeySpreadsIdDelete) | **DELETE** /spreads/{id} | Delete One By Primary Key
[**entireUpdateByPrimaryKeySpreadsIdPut**](TarotApi.md#entireUpdateByPrimaryKeySpreadsIdPut) | **PUT** /spreads/{id} | Entire Update By Primary Key
[**entireUpdateManyByQuerySpreadsPut**](TarotApi.md#entireUpdateManyByQuerySpreadsPut) | **PUT** /spreads | Entire Update Many By Query
[**getManySpreadsGet**](TarotApi.md#getManySpreadsGet) | **GET** /spreads | Get Many
[**getOneByPrimaryKeySpreadsIdGet**](TarotApi.md#getOneByPrimaryKeySpreadsIdGet) | **GET** /spreads/{id} | Get One By Primary Key
[**insertManySpreadsPost**](TarotApi.md#insertManySpreadsPost) | **POST** /spreads | Insert Many
[**partialUpdateManyByQuerySpreadsPatch**](TarotApi.md#partialUpdateManyByQuerySpreadsPatch) | **PATCH** /spreads | Partial Update Many By Query
[**partialUpdateOneByPrimaryKeySpreadsIdPatch**](TarotApi.md#partialUpdateOneByPrimaryKeySpreadsIdPatch) | **PATCH** /spreads/{id} | Partial Update One By Primary Key

<a name="deleteManyByQuerySpreadsDelete"></a>
# **deleteManyByQuerySpreadsDelete**
> TarotSpreadDeleteManyItemListResponseModel deleteManyByQuerySpreadsDelete(opts)

Delete Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.TarotApi();
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator10(), // IdFromComparisonOperator10 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator10(), // IdToComparisonOperator10 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator10(), // IdListComparisonOperator10 | 
  'idList': [3.4], // [Number] | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator18(), // UidListComparisonOperator18 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator18(), // NameListComparisonOperator18 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator18(), // DescriptionListComparisonOperator18 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator18(), // CreatedFromComparisonOperator18 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator18(), // CreatedToComparisonOperator18 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator18(), // CreatedListComparisonOperator18 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator18(), // UpdatedFromComparisonOperator18 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator18(), // UpdatedToComparisonOperator18 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator18(), // UpdatedListComparisonOperator18 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'cardsCountFromComparisonOperator': new FastApi.CardsCountFromComparisonOperator2(), // CardsCountFromComparisonOperator2 | 
  'cardsCountToComparisonOperator': new FastApi.CardsCountToComparisonOperator2(), // CardsCountToComparisonOperator2 | 
  'cardsCountFrom': 56, // Number | 
  'cardsCountTo': 56, // Number | 
  'cardsCountListComparisonOperator': new FastApi.CardsCountListComparisonOperator2(), // CardsCountListComparisonOperator2 | 
  'cardsCountList': [3.4], // [Number] | 
  'isCustomizableListComparisonOperator': new FastApi.IsCustomizableListComparisonOperator2(), // IsCustomizableListComparisonOperator2 | 
  'isCustomizableList': [true], // [Boolean] | 
  'totalCardsFromComparisonOperator': new FastApi.TotalCardsFromComparisonOperator2(), // TotalCardsFromComparisonOperator2 | 
  'totalCardsToComparisonOperator': new FastApi.TotalCardsToComparisonOperator2(), // TotalCardsToComparisonOperator2 | 
  'totalCardsFrom': 56, // Number | 
  'totalCardsTo': 56, // Number | 
  'totalCardsListComparisonOperator': new FastApi.TotalCardsListComparisonOperator2(), // TotalCardsListComparisonOperator2 | 
  'totalCardsList': [3.4], // [Number] | 
  'layoutStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'layoutStr': ["layoutStr_example"], // [String] | 
  'layoutListComparisonOperator': new FastApi.LayoutListComparisonOperator2(), // LayoutListComparisonOperator2 | 
  'layoutList': ["layoutList_example"] // [String] | 
};
apiInstance.deleteManyByQuerySpreadsDelete(opts, (error, data, response) => {
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
 **idFromComparisonOperator** | [**IdFromComparisonOperator10**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator10**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator10**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator18**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator18**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator18**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator18**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator18**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator18**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator18**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator18**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator18**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **cardsCountFromComparisonOperator** | [**CardsCountFromComparisonOperator2**](.md)|  | [optional] 
 **cardsCountToComparisonOperator** | [**CardsCountToComparisonOperator2**](.md)|  | [optional] 
 **cardsCountFrom** | **Number**|  | [optional] 
 **cardsCountTo** | **Number**|  | [optional] 
 **cardsCountListComparisonOperator** | [**CardsCountListComparisonOperator2**](.md)|  | [optional] 
 **cardsCountList** | [**[Number]**](Number.md)|  | [optional] 
 **isCustomizableListComparisonOperator** | [**IsCustomizableListComparisonOperator2**](.md)|  | [optional] 
 **isCustomizableList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **totalCardsFromComparisonOperator** | [**TotalCardsFromComparisonOperator2**](.md)|  | [optional] 
 **totalCardsToComparisonOperator** | [**TotalCardsToComparisonOperator2**](.md)|  | [optional] 
 **totalCardsFrom** | **Number**|  | [optional] 
 **totalCardsTo** | **Number**|  | [optional] 
 **totalCardsListComparisonOperator** | [**TotalCardsListComparisonOperator2**](.md)|  | [optional] 
 **totalCardsList** | [**[Number]**](Number.md)|  | [optional] 
 **layoutStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **layoutStr** | [**[String]**](String.md)|  | [optional] 
 **layoutListComparisonOperator** | [**LayoutListComparisonOperator2**](.md)|  | [optional] 
 **layoutList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotSpreadDeleteManyItemListResponseModel**](TarotSpreadDeleteManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOneByPrimaryKeySpreadsIdDelete"></a>
# **deleteOneByPrimaryKeySpreadsIdDelete**
> TarotSpreadDeleteOneResponseModel deleteOneByPrimaryKeySpreadsIdDelete(id, opts)

Delete One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.TarotApi();
let id = 56; // Number | 
let opts = { 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator22(), // UidListComparisonOperator22 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator22(), // NameListComparisonOperator22 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator22(), // DescriptionListComparisonOperator22 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator22(), // CreatedFromComparisonOperator22 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator22(), // CreatedToComparisonOperator22 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator22(), // CreatedListComparisonOperator22 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator22(), // UpdatedFromComparisonOperator22 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator22(), // UpdatedToComparisonOperator22 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator22(), // UpdatedListComparisonOperator22 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'cardsCountFromComparisonOperator': new FastApi.CardsCountFromComparisonOperator6(), // CardsCountFromComparisonOperator6 | 
  'cardsCountToComparisonOperator': new FastApi.CardsCountToComparisonOperator6(), // CardsCountToComparisonOperator6 | 
  'cardsCountFrom': 56, // Number | 
  'cardsCountTo': 56, // Number | 
  'cardsCountListComparisonOperator': new FastApi.CardsCountListComparisonOperator6(), // CardsCountListComparisonOperator6 | 
  'cardsCountList': [3.4], // [Number] | 
  'isCustomizableListComparisonOperator': new FastApi.IsCustomizableListComparisonOperator6(), // IsCustomizableListComparisonOperator6 | 
  'isCustomizableList': [true], // [Boolean] | 
  'totalCardsFromComparisonOperator': new FastApi.TotalCardsFromComparisonOperator6(), // TotalCardsFromComparisonOperator6 | 
  'totalCardsToComparisonOperator': new FastApi.TotalCardsToComparisonOperator6(), // TotalCardsToComparisonOperator6 | 
  'totalCardsFrom': 56, // Number | 
  'totalCardsTo': 56, // Number | 
  'totalCardsListComparisonOperator': new FastApi.TotalCardsListComparisonOperator6(), // TotalCardsListComparisonOperator6 | 
  'totalCardsList': [3.4], // [Number] | 
  'layoutStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'layoutStr': ["layoutStr_example"], // [String] | 
  'layoutListComparisonOperator': new FastApi.LayoutListComparisonOperator6(), // LayoutListComparisonOperator6 | 
  'layoutList': ["layoutList_example"] // [String] | 
};
apiInstance.deleteOneByPrimaryKeySpreadsIdDelete(id, opts, (error, data, response) => {
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
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator22**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator22**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator22**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator22**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator22**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator22**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator22**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator22**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator22**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **cardsCountFromComparisonOperator** | [**CardsCountFromComparisonOperator6**](.md)|  | [optional] 
 **cardsCountToComparisonOperator** | [**CardsCountToComparisonOperator6**](.md)|  | [optional] 
 **cardsCountFrom** | **Number**|  | [optional] 
 **cardsCountTo** | **Number**|  | [optional] 
 **cardsCountListComparisonOperator** | [**CardsCountListComparisonOperator6**](.md)|  | [optional] 
 **cardsCountList** | [**[Number]**](Number.md)|  | [optional] 
 **isCustomizableListComparisonOperator** | [**IsCustomizableListComparisonOperator6**](.md)|  | [optional] 
 **isCustomizableList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **totalCardsFromComparisonOperator** | [**TotalCardsFromComparisonOperator6**](.md)|  | [optional] 
 **totalCardsToComparisonOperator** | [**TotalCardsToComparisonOperator6**](.md)|  | [optional] 
 **totalCardsFrom** | **Number**|  | [optional] 
 **totalCardsTo** | **Number**|  | [optional] 
 **totalCardsListComparisonOperator** | [**TotalCardsListComparisonOperator6**](.md)|  | [optional] 
 **totalCardsList** | [**[Number]**](Number.md)|  | [optional] 
 **layoutStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **layoutStr** | [**[String]**](String.md)|  | [optional] 
 **layoutListComparisonOperator** | [**LayoutListComparisonOperator6**](.md)|  | [optional] 
 **layoutList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotSpreadDeleteOneResponseModel**](TarotSpreadDeleteOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="entireUpdateByPrimaryKeySpreadsIdPut"></a>
# **entireUpdateByPrimaryKeySpreadsIdPut**
> TarotSpreadUpdateOneResponseModel entireUpdateByPrimaryKeySpreadsIdPut(body, id, opts)

Entire Update By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.TarotApi();
let body = new FastApi.BodyEntireUpdateByPrimaryKeySpreadsIdPut(); // BodyEntireUpdateByPrimaryKeySpreadsIdPut | 
let id = 56; // Number | 
let opts = { 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator21(), // UidListComparisonOperator21 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator21(), // NameListComparisonOperator21 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator21(), // DescriptionListComparisonOperator21 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator21(), // CreatedFromComparisonOperator21 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator21(), // CreatedToComparisonOperator21 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator21(), // CreatedListComparisonOperator21 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator21(), // UpdatedFromComparisonOperator21 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator21(), // UpdatedToComparisonOperator21 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator21(), // UpdatedListComparisonOperator21 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'cardsCountFromComparisonOperator': new FastApi.CardsCountFromComparisonOperator5(), // CardsCountFromComparisonOperator5 | 
  'cardsCountToComparisonOperator': new FastApi.CardsCountToComparisonOperator5(), // CardsCountToComparisonOperator5 | 
  'cardsCountFrom': 56, // Number | 
  'cardsCountTo': 56, // Number | 
  'cardsCountListComparisonOperator': new FastApi.CardsCountListComparisonOperator5(), // CardsCountListComparisonOperator5 | 
  'cardsCountList': [3.4], // [Number] | 
  'isCustomizableListComparisonOperator': new FastApi.IsCustomizableListComparisonOperator5(), // IsCustomizableListComparisonOperator5 | 
  'isCustomizableList': [true], // [Boolean] | 
  'totalCardsFromComparisonOperator': new FastApi.TotalCardsFromComparisonOperator5(), // TotalCardsFromComparisonOperator5 | 
  'totalCardsToComparisonOperator': new FastApi.TotalCardsToComparisonOperator5(), // TotalCardsToComparisonOperator5 | 
  'totalCardsFrom': 56, // Number | 
  'totalCardsTo': 56, // Number | 
  'totalCardsListComparisonOperator': new FastApi.TotalCardsListComparisonOperator5(), // TotalCardsListComparisonOperator5 | 
  'totalCardsList': [3.4], // [Number] | 
  'layoutStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'layoutStr': ["layoutStr_example"], // [String] | 
  'layoutListComparisonOperator': new FastApi.LayoutListComparisonOperator5(), // LayoutListComparisonOperator5 | 
  'layoutList': ["layoutList_example"] // [String] | 
};
apiInstance.entireUpdateByPrimaryKeySpreadsIdPut(body, id, opts, (error, data, response) => {
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
 **body** | [**BodyEntireUpdateByPrimaryKeySpreadsIdPut**](BodyEntireUpdateByPrimaryKeySpreadsIdPut.md)|  | 
 **id** | **Number**|  | 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator21**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator21**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator21**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator21**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator21**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator21**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator21**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator21**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator21**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **cardsCountFromComparisonOperator** | [**CardsCountFromComparisonOperator5**](.md)|  | [optional] 
 **cardsCountToComparisonOperator** | [**CardsCountToComparisonOperator5**](.md)|  | [optional] 
 **cardsCountFrom** | **Number**|  | [optional] 
 **cardsCountTo** | **Number**|  | [optional] 
 **cardsCountListComparisonOperator** | [**CardsCountListComparisonOperator5**](.md)|  | [optional] 
 **cardsCountList** | [**[Number]**](Number.md)|  | [optional] 
 **isCustomizableListComparisonOperator** | [**IsCustomizableListComparisonOperator5**](.md)|  | [optional] 
 **isCustomizableList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **totalCardsFromComparisonOperator** | [**TotalCardsFromComparisonOperator5**](.md)|  | [optional] 
 **totalCardsToComparisonOperator** | [**TotalCardsToComparisonOperator5**](.md)|  | [optional] 
 **totalCardsFrom** | **Number**|  | [optional] 
 **totalCardsTo** | **Number**|  | [optional] 
 **totalCardsListComparisonOperator** | [**TotalCardsListComparisonOperator5**](.md)|  | [optional] 
 **totalCardsList** | [**[Number]**](Number.md)|  | [optional] 
 **layoutStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **layoutStr** | [**[String]**](String.md)|  | [optional] 
 **layoutListComparisonOperator** | [**LayoutListComparisonOperator5**](.md)|  | [optional] 
 **layoutList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotSpreadUpdateOneResponseModel**](TarotSpreadUpdateOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="entireUpdateManyByQuerySpreadsPut"></a>
# **entireUpdateManyByQuerySpreadsPut**
> TarotSpreadUpdateManyItemListResponseModel entireUpdateManyByQuerySpreadsPut(body, opts)

Entire Update Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.TarotApi();
let body = new FastApi.BodyEntireUpdateManyByQuerySpreadsPut(); // BodyEntireUpdateManyByQuerySpreadsPut | 
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator9(), // IdFromComparisonOperator9 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator9(), // IdToComparisonOperator9 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator9(), // IdListComparisonOperator9 | 
  'idList': [3.4], // [Number] | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator17(), // UidListComparisonOperator17 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator17(), // NameListComparisonOperator17 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator17(), // DescriptionListComparisonOperator17 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator17(), // CreatedFromComparisonOperator17 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator17(), // CreatedToComparisonOperator17 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator17(), // CreatedListComparisonOperator17 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator17(), // UpdatedFromComparisonOperator17 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator17(), // UpdatedToComparisonOperator17 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator17(), // UpdatedListComparisonOperator17 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'cardsCountFromComparisonOperator': new FastApi.CardsCountFromComparisonOperator1(), // CardsCountFromComparisonOperator1 | 
  'cardsCountToComparisonOperator': new FastApi.CardsCountToComparisonOperator1(), // CardsCountToComparisonOperator1 | 
  'cardsCountFrom': 56, // Number | 
  'cardsCountTo': 56, // Number | 
  'cardsCountListComparisonOperator': new FastApi.CardsCountListComparisonOperator1(), // CardsCountListComparisonOperator1 | 
  'cardsCountList': [3.4], // [Number] | 
  'isCustomizableListComparisonOperator': new FastApi.IsCustomizableListComparisonOperator1(), // IsCustomizableListComparisonOperator1 | 
  'isCustomizableList': [true], // [Boolean] | 
  'totalCardsFromComparisonOperator': new FastApi.TotalCardsFromComparisonOperator1(), // TotalCardsFromComparisonOperator1 | 
  'totalCardsToComparisonOperator': new FastApi.TotalCardsToComparisonOperator1(), // TotalCardsToComparisonOperator1 | 
  'totalCardsFrom': 56, // Number | 
  'totalCardsTo': 56, // Number | 
  'totalCardsListComparisonOperator': new FastApi.TotalCardsListComparisonOperator1(), // TotalCardsListComparisonOperator1 | 
  'totalCardsList': [3.4], // [Number] | 
  'layoutStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'layoutStr': ["layoutStr_example"], // [String] | 
  'layoutListComparisonOperator': new FastApi.LayoutListComparisonOperator1(), // LayoutListComparisonOperator1 | 
  'layoutList': ["layoutList_example"] // [String] | 
};
apiInstance.entireUpdateManyByQuerySpreadsPut(body, opts, (error, data, response) => {
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
 **body** | [**BodyEntireUpdateManyByQuerySpreadsPut**](BodyEntireUpdateManyByQuerySpreadsPut.md)|  | 
 **idFromComparisonOperator** | [**IdFromComparisonOperator9**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator9**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator9**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator17**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator17**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator17**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator17**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator17**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator17**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator17**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator17**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator17**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **cardsCountFromComparisonOperator** | [**CardsCountFromComparisonOperator1**](.md)|  | [optional] 
 **cardsCountToComparisonOperator** | [**CardsCountToComparisonOperator1**](.md)|  | [optional] 
 **cardsCountFrom** | **Number**|  | [optional] 
 **cardsCountTo** | **Number**|  | [optional] 
 **cardsCountListComparisonOperator** | [**CardsCountListComparisonOperator1**](.md)|  | [optional] 
 **cardsCountList** | [**[Number]**](Number.md)|  | [optional] 
 **isCustomizableListComparisonOperator** | [**IsCustomizableListComparisonOperator1**](.md)|  | [optional] 
 **isCustomizableList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **totalCardsFromComparisonOperator** | [**TotalCardsFromComparisonOperator1**](.md)|  | [optional] 
 **totalCardsToComparisonOperator** | [**TotalCardsToComparisonOperator1**](.md)|  | [optional] 
 **totalCardsFrom** | **Number**|  | [optional] 
 **totalCardsTo** | **Number**|  | [optional] 
 **totalCardsListComparisonOperator** | [**TotalCardsListComparisonOperator1**](.md)|  | [optional] 
 **totalCardsList** | [**[Number]**](Number.md)|  | [optional] 
 **layoutStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **layoutStr** | [**[String]**](String.md)|  | [optional] 
 **layoutListComparisonOperator** | [**LayoutListComparisonOperator1**](.md)|  | [optional] 
 **layoutList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotSpreadUpdateManyItemListResponseModel**](TarotSpreadUpdateManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getManySpreadsGet"></a>
# **getManySpreadsGet**
> TarotSpreadFindManyItemListResponseModel getManySpreadsGet(opts)

Get Many

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.TarotApi();
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator8(), // IdFromComparisonOperator8 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator8(), // IdToComparisonOperator8 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator8(), // IdListComparisonOperator8 | 
  'idList': [3.4], // [Number] | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator16(), // UidListComparisonOperator16 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator16(), // NameListComparisonOperator16 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator16(), // DescriptionListComparisonOperator16 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator16(), // CreatedFromComparisonOperator16 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator16(), // CreatedToComparisonOperator16 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator16(), // CreatedListComparisonOperator16 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator16(), // UpdatedFromComparisonOperator16 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator16(), // UpdatedToComparisonOperator16 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator16(), // UpdatedListComparisonOperator16 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'cardsCountFromComparisonOperator': new FastApi.CardsCountFromComparisonOperator(), // CardsCountFromComparisonOperator | 
  'cardsCountToComparisonOperator': new FastApi.CardsCountToComparisonOperator(), // CardsCountToComparisonOperator | 
  'cardsCountFrom': 56, // Number | 
  'cardsCountTo': 56, // Number | 
  'cardsCountListComparisonOperator': new FastApi.CardsCountListComparisonOperator(), // CardsCountListComparisonOperator | 
  'cardsCountList': [3.4], // [Number] | 
  'isCustomizableListComparisonOperator': new FastApi.IsCustomizableListComparisonOperator(), // IsCustomizableListComparisonOperator | 
  'isCustomizableList': [true], // [Boolean] | 
  'totalCardsFromComparisonOperator': new FastApi.TotalCardsFromComparisonOperator(), // TotalCardsFromComparisonOperator | 
  'totalCardsToComparisonOperator': new FastApi.TotalCardsToComparisonOperator(), // TotalCardsToComparisonOperator | 
  'totalCardsFrom': 56, // Number | 
  'totalCardsTo': 56, // Number | 
  'totalCardsListComparisonOperator': new FastApi.TotalCardsListComparisonOperator(), // TotalCardsListComparisonOperator | 
  'totalCardsList': [3.4], // [Number] | 
  'layoutStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'layoutStr': ["layoutStr_example"], // [String] | 
  'layoutListComparisonOperator': new FastApi.LayoutListComparisonOperator(), // LayoutListComparisonOperator | 
  'layoutList': ["layoutList_example"], // [String] | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'orderByColumns': ["orderByColumns_example"] // [String] | <br> support column:              <br> ['id', 'uid', 'name', 'description', 'created', 'updated', 'cards_count', 'is_customizable', 'total_cards', 'layout'] <hr><br> support ordering:               <br> ['DESC', 'ASC']              <hr>              <br/>example:              <br/>&emsp;&emsp;any name of column:ASC             <br/>&emsp;&emsp;any name of column: DESC              <br/>&emsp;&emsp;any name of column    :    DESC             <br/>&emsp;&emsp;any name of column (default sort by ASC)
};
apiInstance.getManySpreadsGet(opts, (error, data, response) => {
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
 **idFromComparisonOperator** | [**IdFromComparisonOperator8**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator8**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator8**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator16**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator16**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator16**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator16**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator16**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator16**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator16**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator16**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator16**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **cardsCountFromComparisonOperator** | [**CardsCountFromComparisonOperator**](.md)|  | [optional] 
 **cardsCountToComparisonOperator** | [**CardsCountToComparisonOperator**](.md)|  | [optional] 
 **cardsCountFrom** | **Number**|  | [optional] 
 **cardsCountTo** | **Number**|  | [optional] 
 **cardsCountListComparisonOperator** | [**CardsCountListComparisonOperator**](.md)|  | [optional] 
 **cardsCountList** | [**[Number]**](Number.md)|  | [optional] 
 **isCustomizableListComparisonOperator** | [**IsCustomizableListComparisonOperator**](.md)|  | [optional] 
 **isCustomizableList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **totalCardsFromComparisonOperator** | [**TotalCardsFromComparisonOperator**](.md)|  | [optional] 
 **totalCardsToComparisonOperator** | [**TotalCardsToComparisonOperator**](.md)|  | [optional] 
 **totalCardsFrom** | **Number**|  | [optional] 
 **totalCardsTo** | **Number**|  | [optional] 
 **totalCardsListComparisonOperator** | [**TotalCardsListComparisonOperator**](.md)|  | [optional] 
 **totalCardsList** | [**[Number]**](Number.md)|  | [optional] 
 **layoutStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **layoutStr** | [**[String]**](String.md)|  | [optional] 
 **layoutListComparisonOperator** | [**LayoutListComparisonOperator**](.md)|  | [optional] 
 **layoutList** | [**[String]**](String.md)|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **orderByColumns** | [**[String]**](String.md)| &lt;br&gt; support column:              &lt;br&gt; [&#x27;id&#x27;, &#x27;uid&#x27;, &#x27;name&#x27;, &#x27;description&#x27;, &#x27;created&#x27;, &#x27;updated&#x27;, &#x27;cards_count&#x27;, &#x27;is_customizable&#x27;, &#x27;total_cards&#x27;, &#x27;layout&#x27;] &lt;hr&gt;&lt;br&gt; support ordering:               &lt;br&gt; [&#x27;DESC&#x27;, &#x27;ASC&#x27;]              &lt;hr&gt;              &lt;br/&gt;example:              &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column:ASC             &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column: DESC              &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column    :    DESC             &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column (default sort by ASC) | [optional] 

### Return type

[**TarotSpreadFindManyItemListResponseModel**](TarotSpreadFindManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneByPrimaryKeySpreadsIdGet"></a>
# **getOneByPrimaryKeySpreadsIdGet**
> TarotSpreadFindOneResponseModel getOneByPrimaryKeySpreadsIdGet(id, opts)

Get One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.TarotApi();
let id = 56; // Number | 
let opts = { 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator20(), // UidListComparisonOperator20 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator20(), // NameListComparisonOperator20 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator20(), // DescriptionListComparisonOperator20 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator20(), // CreatedFromComparisonOperator20 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator20(), // CreatedToComparisonOperator20 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator20(), // CreatedListComparisonOperator20 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator20(), // UpdatedFromComparisonOperator20 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator20(), // UpdatedToComparisonOperator20 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator20(), // UpdatedListComparisonOperator20 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'cardsCountFromComparisonOperator': new FastApi.CardsCountFromComparisonOperator4(), // CardsCountFromComparisonOperator4 | 
  'cardsCountToComparisonOperator': new FastApi.CardsCountToComparisonOperator4(), // CardsCountToComparisonOperator4 | 
  'cardsCountFrom': 56, // Number | 
  'cardsCountTo': 56, // Number | 
  'cardsCountListComparisonOperator': new FastApi.CardsCountListComparisonOperator4(), // CardsCountListComparisonOperator4 | 
  'cardsCountList': [3.4], // [Number] | 
  'isCustomizableListComparisonOperator': new FastApi.IsCustomizableListComparisonOperator4(), // IsCustomizableListComparisonOperator4 | 
  'isCustomizableList': [true], // [Boolean] | 
  'totalCardsFromComparisonOperator': new FastApi.TotalCardsFromComparisonOperator4(), // TotalCardsFromComparisonOperator4 | 
  'totalCardsToComparisonOperator': new FastApi.TotalCardsToComparisonOperator4(), // TotalCardsToComparisonOperator4 | 
  'totalCardsFrom': 56, // Number | 
  'totalCardsTo': 56, // Number | 
  'totalCardsListComparisonOperator': new FastApi.TotalCardsListComparisonOperator4(), // TotalCardsListComparisonOperator4 | 
  'totalCardsList': [3.4], // [Number] | 
  'layoutStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'layoutStr': ["layoutStr_example"], // [String] | 
  'layoutListComparisonOperator': new FastApi.LayoutListComparisonOperator4(), // LayoutListComparisonOperator4 | 
  'layoutList': ["layoutList_example"] // [String] | 
};
apiInstance.getOneByPrimaryKeySpreadsIdGet(id, opts, (error, data, response) => {
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
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator20**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator20**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator20**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator20**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator20**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator20**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator20**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator20**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator20**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **cardsCountFromComparisonOperator** | [**CardsCountFromComparisonOperator4**](.md)|  | [optional] 
 **cardsCountToComparisonOperator** | [**CardsCountToComparisonOperator4**](.md)|  | [optional] 
 **cardsCountFrom** | **Number**|  | [optional] 
 **cardsCountTo** | **Number**|  | [optional] 
 **cardsCountListComparisonOperator** | [**CardsCountListComparisonOperator4**](.md)|  | [optional] 
 **cardsCountList** | [**[Number]**](Number.md)|  | [optional] 
 **isCustomizableListComparisonOperator** | [**IsCustomizableListComparisonOperator4**](.md)|  | [optional] 
 **isCustomizableList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **totalCardsFromComparisonOperator** | [**TotalCardsFromComparisonOperator4**](.md)|  | [optional] 
 **totalCardsToComparisonOperator** | [**TotalCardsToComparisonOperator4**](.md)|  | [optional] 
 **totalCardsFrom** | **Number**|  | [optional] 
 **totalCardsTo** | **Number**|  | [optional] 
 **totalCardsListComparisonOperator** | [**TotalCardsListComparisonOperator4**](.md)|  | [optional] 
 **totalCardsList** | [**[Number]**](Number.md)|  | [optional] 
 **layoutStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **layoutStr** | [**[String]**](String.md)|  | [optional] 
 **layoutListComparisonOperator** | [**LayoutListComparisonOperator4**](.md)|  | [optional] 
 **layoutList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotSpreadFindOneResponseModel**](TarotSpreadFindOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="insertManySpreadsPost"></a>
# **insertManySpreadsPost**
> TarotSpreadCreateManyItemListResponseModel insertManySpreadsPost(body)

Insert Many

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.TarotApi();
let body = [new FastApi.TarotSpreadCreateManyItemRequestModel()]; // [TarotSpreadCreateManyItemRequestModel] | 

apiInstance.insertManySpreadsPost(body, (error, data, response) => {
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
 **body** | [**[TarotSpreadCreateManyItemRequestModel]**](TarotSpreadCreateManyItemRequestModel.md)|  | 

### Return type

[**TarotSpreadCreateManyItemListResponseModel**](TarotSpreadCreateManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partialUpdateManyByQuerySpreadsPatch"></a>
# **partialUpdateManyByQuerySpreadsPatch**
> TarotSpreadPatchManyItemListResponseModel partialUpdateManyByQuerySpreadsPatch(opts)

Partial Update Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.TarotApi();
let opts = { 
  'body': new FastApi.BodyPartialUpdateManyByQuerySpreadsPatch(), // BodyPartialUpdateManyByQuerySpreadsPatch | 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator11(), // IdFromComparisonOperator11 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator11(), // IdToComparisonOperator11 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator11(), // IdListComparisonOperator11 | 
  'idList': [3.4], // [Number] | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator19(), // UidListComparisonOperator19 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator19(), // NameListComparisonOperator19 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator19(), // DescriptionListComparisonOperator19 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator19(), // CreatedFromComparisonOperator19 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator19(), // CreatedToComparisonOperator19 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator19(), // CreatedListComparisonOperator19 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator19(), // UpdatedFromComparisonOperator19 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator19(), // UpdatedToComparisonOperator19 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator19(), // UpdatedListComparisonOperator19 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'cardsCountFromComparisonOperator': new FastApi.CardsCountFromComparisonOperator3(), // CardsCountFromComparisonOperator3 | 
  'cardsCountToComparisonOperator': new FastApi.CardsCountToComparisonOperator3(), // CardsCountToComparisonOperator3 | 
  'cardsCountFrom': 56, // Number | 
  'cardsCountTo': 56, // Number | 
  'cardsCountListComparisonOperator': new FastApi.CardsCountListComparisonOperator3(), // CardsCountListComparisonOperator3 | 
  'cardsCountList': [3.4], // [Number] | 
  'isCustomizableListComparisonOperator': new FastApi.IsCustomizableListComparisonOperator3(), // IsCustomizableListComparisonOperator3 | 
  'isCustomizableList': [true], // [Boolean] | 
  'totalCardsFromComparisonOperator': new FastApi.TotalCardsFromComparisonOperator3(), // TotalCardsFromComparisonOperator3 | 
  'totalCardsToComparisonOperator': new FastApi.TotalCardsToComparisonOperator3(), // TotalCardsToComparisonOperator3 | 
  'totalCardsFrom': 56, // Number | 
  'totalCardsTo': 56, // Number | 
  'totalCardsListComparisonOperator': new FastApi.TotalCardsListComparisonOperator3(), // TotalCardsListComparisonOperator3 | 
  'totalCardsList': [3.4], // [Number] | 
  'layoutStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'layoutStr': ["layoutStr_example"], // [String] | 
  'layoutListComparisonOperator': new FastApi.LayoutListComparisonOperator3(), // LayoutListComparisonOperator3 | 
  'layoutList': ["layoutList_example"] // [String] | 
};
apiInstance.partialUpdateManyByQuerySpreadsPatch(opts, (error, data, response) => {
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
 **body** | [**BodyPartialUpdateManyByQuerySpreadsPatch**](BodyPartialUpdateManyByQuerySpreadsPatch.md)|  | [optional] 
 **idFromComparisonOperator** | [**IdFromComparisonOperator11**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator11**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator11**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator19**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator19**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator19**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator19**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator19**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator19**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator19**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator19**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator19**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **cardsCountFromComparisonOperator** | [**CardsCountFromComparisonOperator3**](.md)|  | [optional] 
 **cardsCountToComparisonOperator** | [**CardsCountToComparisonOperator3**](.md)|  | [optional] 
 **cardsCountFrom** | **Number**|  | [optional] 
 **cardsCountTo** | **Number**|  | [optional] 
 **cardsCountListComparisonOperator** | [**CardsCountListComparisonOperator3**](.md)|  | [optional] 
 **cardsCountList** | [**[Number]**](Number.md)|  | [optional] 
 **isCustomizableListComparisonOperator** | [**IsCustomizableListComparisonOperator3**](.md)|  | [optional] 
 **isCustomizableList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **totalCardsFromComparisonOperator** | [**TotalCardsFromComparisonOperator3**](.md)|  | [optional] 
 **totalCardsToComparisonOperator** | [**TotalCardsToComparisonOperator3**](.md)|  | [optional] 
 **totalCardsFrom** | **Number**|  | [optional] 
 **totalCardsTo** | **Number**|  | [optional] 
 **totalCardsListComparisonOperator** | [**TotalCardsListComparisonOperator3**](.md)|  | [optional] 
 **totalCardsList** | [**[Number]**](Number.md)|  | [optional] 
 **layoutStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **layoutStr** | [**[String]**](String.md)|  | [optional] 
 **layoutListComparisonOperator** | [**LayoutListComparisonOperator3**](.md)|  | [optional] 
 **layoutList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotSpreadPatchManyItemListResponseModel**](TarotSpreadPatchManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partialUpdateOneByPrimaryKeySpreadsIdPatch"></a>
# **partialUpdateOneByPrimaryKeySpreadsIdPatch**
> TarotSpreadPatchOneResponseModel partialUpdateOneByPrimaryKeySpreadsIdPatch(id, opts)

Partial Update One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.TarotApi();
let id = 56; // Number | 
let opts = { 
  'body': new FastApi.BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch(), // BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator23(), // UidListComparisonOperator23 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator23(), // NameListComparisonOperator23 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator23(), // DescriptionListComparisonOperator23 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator23(), // CreatedFromComparisonOperator23 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator23(), // CreatedToComparisonOperator23 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator23(), // CreatedListComparisonOperator23 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator23(), // UpdatedFromComparisonOperator23 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator23(), // UpdatedToComparisonOperator23 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator23(), // UpdatedListComparisonOperator23 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'cardsCountFromComparisonOperator': new FastApi.CardsCountFromComparisonOperator7(), // CardsCountFromComparisonOperator7 | 
  'cardsCountToComparisonOperator': new FastApi.CardsCountToComparisonOperator7(), // CardsCountToComparisonOperator7 | 
  'cardsCountFrom': 56, // Number | 
  'cardsCountTo': 56, // Number | 
  'cardsCountListComparisonOperator': new FastApi.CardsCountListComparisonOperator7(), // CardsCountListComparisonOperator7 | 
  'cardsCountList': [3.4], // [Number] | 
  'isCustomizableListComparisonOperator': new FastApi.IsCustomizableListComparisonOperator7(), // IsCustomizableListComparisonOperator7 | 
  'isCustomizableList': [true], // [Boolean] | 
  'totalCardsFromComparisonOperator': new FastApi.TotalCardsFromComparisonOperator7(), // TotalCardsFromComparisonOperator7 | 
  'totalCardsToComparisonOperator': new FastApi.TotalCardsToComparisonOperator7(), // TotalCardsToComparisonOperator7 | 
  'totalCardsFrom': 56, // Number | 
  'totalCardsTo': 56, // Number | 
  'totalCardsListComparisonOperator': new FastApi.TotalCardsListComparisonOperator7(), // TotalCardsListComparisonOperator7 | 
  'totalCardsList': [3.4], // [Number] | 
  'layoutStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'layoutStr': ["layoutStr_example"], // [String] | 
  'layoutListComparisonOperator': new FastApi.LayoutListComparisonOperator7(), // LayoutListComparisonOperator7 | 
  'layoutList': ["layoutList_example"] // [String] | 
};
apiInstance.partialUpdateOneByPrimaryKeySpreadsIdPatch(id, opts, (error, data, response) => {
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
 **body** | [**BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch**](BodyPartialUpdateOneByPrimaryKeySpreadsIdPatch.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator23**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator23**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator23**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator23**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator23**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator23**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator23**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator23**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator23**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **cardsCountFromComparisonOperator** | [**CardsCountFromComparisonOperator7**](.md)|  | [optional] 
 **cardsCountToComparisonOperator** | [**CardsCountToComparisonOperator7**](.md)|  | [optional] 
 **cardsCountFrom** | **Number**|  | [optional] 
 **cardsCountTo** | **Number**|  | [optional] 
 **cardsCountListComparisonOperator** | [**CardsCountListComparisonOperator7**](.md)|  | [optional] 
 **cardsCountList** | [**[Number]**](Number.md)|  | [optional] 
 **isCustomizableListComparisonOperator** | [**IsCustomizableListComparisonOperator7**](.md)|  | [optional] 
 **isCustomizableList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **totalCardsFromComparisonOperator** | [**TotalCardsFromComparisonOperator7**](.md)|  | [optional] 
 **totalCardsToComparisonOperator** | [**TotalCardsToComparisonOperator7**](.md)|  | [optional] 
 **totalCardsFrom** | **Number**|  | [optional] 
 **totalCardsTo** | **Number**|  | [optional] 
 **totalCardsListComparisonOperator** | [**TotalCardsListComparisonOperator7**](.md)|  | [optional] 
 **totalCardsList** | [**[Number]**](Number.md)|  | [optional] 
 **layoutStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **layoutStr** | [**[String]**](String.md)|  | [optional] 
 **layoutListComparisonOperator** | [**LayoutListComparisonOperator7**](.md)|  | [optional] 
 **layoutList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotSpreadPatchOneResponseModel**](TarotSpreadPatchOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

