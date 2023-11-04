# FastApi.DecksCardsTarotApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteManyByQueryCardsDelete**](DecksCardsTarotApi.md#deleteManyByQueryCardsDelete) | **DELETE** /cards | Delete Many By Query
[**deleteOneByPrimaryKeyCardsIdDelete**](DecksCardsTarotApi.md#deleteOneByPrimaryKeyCardsIdDelete) | **DELETE** /cards/{id} | Delete One By Primary Key
[**entireUpdateByPrimaryKeyCardsIdPut**](DecksCardsTarotApi.md#entireUpdateByPrimaryKeyCardsIdPut) | **PUT** /cards/{id} | Entire Update By Primary Key
[**entireUpdateManyByQueryCardsPut**](DecksCardsTarotApi.md#entireUpdateManyByQueryCardsPut) | **PUT** /cards | Entire Update Many By Query
[**getManyCardsGet**](DecksCardsTarotApi.md#getManyCardsGet) | **GET** /cards | Get Many
[**getOneByPrimaryKeyCardsIdGet**](DecksCardsTarotApi.md#getOneByPrimaryKeyCardsIdGet) | **GET** /cards/{id} | Get One By Primary Key
[**insertManyCardsPost**](DecksCardsTarotApi.md#insertManyCardsPost) | **POST** /cards | Insert Many
[**partialUpdateManyByQueryCardsPatch**](DecksCardsTarotApi.md#partialUpdateManyByQueryCardsPatch) | **PATCH** /cards | Partial Update Many By Query
[**partialUpdateOneByPrimaryKeyCardsIdPatch**](DecksCardsTarotApi.md#partialUpdateOneByPrimaryKeyCardsIdPatch) | **PATCH** /cards/{id} | Partial Update One By Primary Key

<a name="deleteManyByQueryCardsDelete"></a>
# **deleteManyByQueryCardsDelete**
> TarotDeckCardDeleteManyItemListResponseModel deleteManyByQueryCardsDelete(opts)

Delete Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksCardsTarotApi();
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator6(), // IdFromComparisonOperator6 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator6(), // IdToComparisonOperator6 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator6(), // IdListComparisonOperator6 | 
  'idList': [3.4], // [Number] | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator10(), // UidListComparisonOperator10 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator10(), // NameListComparisonOperator10 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator10(), // DescriptionListComparisonOperator10 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator10(), // CreatedFromComparisonOperator10 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator10(), // CreatedToComparisonOperator10 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator10(), // CreatedListComparisonOperator10 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator10(), // UpdatedFromComparisonOperator10 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator10(), // UpdatedToComparisonOperator10 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator10(), // UpdatedListComparisonOperator10 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'numberFromComparisonOperator': new FastApi.NumberFromComparisonOperator2(), // NumberFromComparisonOperator2 | 
  'numberToComparisonOperator': new FastApi.NumberToComparisonOperator2(), // NumberToComparisonOperator2 | 
  'numberFrom': 56, // Number | 
  'numberTo': 56, // Number | 
  'numberListComparisonOperator': new FastApi.NumberListComparisonOperator2(), // NumberListComparisonOperator2 | 
  'numberList': [3.4], // [Number] | 
  'jsonDataStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'jsonDataStr': ["jsonDataStr_example"], // [String] | 
  'jsonDataListComparisonOperator': new FastApi.JsonDataListComparisonOperator2(), // JsonDataListComparisonOperator2 | 
  'jsonDataList': ["jsonDataList_example"], // [String] | 
  'cardIdFromComparisonOperator': new FastApi.CardIdFromComparisonOperator2(), // CardIdFromComparisonOperator2 | 
  'cardIdToComparisonOperator': new FastApi.CardIdToComparisonOperator2(), // CardIdToComparisonOperator2 | 
  'cardIdFrom': 56, // Number | 
  'cardIdTo': 56, // Number | 
  'cardIdListComparisonOperator': new FastApi.CardIdListComparisonOperator2(), // CardIdListComparisonOperator2 | 
  'cardIdList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator2(), // DeckIdFromComparisonOperator2 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator2(), // DeckIdToComparisonOperator2 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator2(), // DeckIdListComparisonOperator2 | 
  'deckIdList': [3.4], // [Number] | 
  'orderFromComparisonOperator': new FastApi.OrderFromComparisonOperator2(), // OrderFromComparisonOperator2 | 
  'orderToComparisonOperator': new FastApi.OrderToComparisonOperator2(), // OrderToComparisonOperator2 | 
  'orderFrom': 56, // Number | 
  'orderTo': 56, // Number | 
  'orderListComparisonOperator': new FastApi.OrderListComparisonOperator2(), // OrderListComparisonOperator2 | 
  'orderList': [3.4] // [Number] | 
};
apiInstance.deleteManyByQueryCardsDelete(opts, (error, data, response) => {
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
 **idFromComparisonOperator** | [**IdFromComparisonOperator6**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator6**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator6**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator10**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator10**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator10**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator10**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator10**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator10**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator10**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator10**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator10**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **numberFromComparisonOperator** | [**NumberFromComparisonOperator2**](.md)|  | [optional] 
 **numberToComparisonOperator** | [**NumberToComparisonOperator2**](.md)|  | [optional] 
 **numberFrom** | **Number**|  | [optional] 
 **numberTo** | **Number**|  | [optional] 
 **numberListComparisonOperator** | [**NumberListComparisonOperator2**](.md)|  | [optional] 
 **numberList** | [**[Number]**](Number.md)|  | [optional] 
 **jsonDataStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **jsonDataStr** | [**[String]**](String.md)|  | [optional] 
 **jsonDataListComparisonOperator** | [**JsonDataListComparisonOperator2**](.md)|  | [optional] 
 **jsonDataList** | [**[String]**](String.md)|  | [optional] 
 **cardIdFromComparisonOperator** | [**CardIdFromComparisonOperator2**](.md)|  | [optional] 
 **cardIdToComparisonOperator** | [**CardIdToComparisonOperator2**](.md)|  | [optional] 
 **cardIdFrom** | **Number**|  | [optional] 
 **cardIdTo** | **Number**|  | [optional] 
 **cardIdListComparisonOperator** | [**CardIdListComparisonOperator2**](.md)|  | [optional] 
 **cardIdList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator2**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator2**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator2**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 
 **orderFromComparisonOperator** | [**OrderFromComparisonOperator2**](.md)|  | [optional] 
 **orderToComparisonOperator** | [**OrderToComparisonOperator2**](.md)|  | [optional] 
 **orderFrom** | **Number**|  | [optional] 
 **orderTo** | **Number**|  | [optional] 
 **orderListComparisonOperator** | [**OrderListComparisonOperator2**](.md)|  | [optional] 
 **orderList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotDeckCardDeleteManyItemListResponseModel**](TarotDeckCardDeleteManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOneByPrimaryKeyCardsIdDelete"></a>
# **deleteOneByPrimaryKeyCardsIdDelete**
> TarotDeckCardDeleteOneResponseModel deleteOneByPrimaryKeyCardsIdDelete(id, opts)

Delete One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksCardsTarotApi();
let id = 56; // Number | 
let opts = { 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator14(), // UidListComparisonOperator14 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator14(), // NameListComparisonOperator14 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator14(), // DescriptionListComparisonOperator14 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator14(), // CreatedFromComparisonOperator14 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator14(), // CreatedToComparisonOperator14 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator14(), // CreatedListComparisonOperator14 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator14(), // UpdatedFromComparisonOperator14 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator14(), // UpdatedToComparisonOperator14 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator14(), // UpdatedListComparisonOperator14 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'numberFromComparisonOperator': new FastApi.NumberFromComparisonOperator6(), // NumberFromComparisonOperator6 | 
  'numberToComparisonOperator': new FastApi.NumberToComparisonOperator6(), // NumberToComparisonOperator6 | 
  'numberFrom': 56, // Number | 
  'numberTo': 56, // Number | 
  'numberListComparisonOperator': new FastApi.NumberListComparisonOperator6(), // NumberListComparisonOperator6 | 
  'numberList': [3.4], // [Number] | 
  'jsonDataStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'jsonDataStr': ["jsonDataStr_example"], // [String] | 
  'jsonDataListComparisonOperator': new FastApi.JsonDataListComparisonOperator6(), // JsonDataListComparisonOperator6 | 
  'jsonDataList': ["jsonDataList_example"], // [String] | 
  'cardIdFromComparisonOperator': new FastApi.CardIdFromComparisonOperator6(), // CardIdFromComparisonOperator6 | 
  'cardIdToComparisonOperator': new FastApi.CardIdToComparisonOperator6(), // CardIdToComparisonOperator6 | 
  'cardIdFrom': 56, // Number | 
  'cardIdTo': 56, // Number | 
  'cardIdListComparisonOperator': new FastApi.CardIdListComparisonOperator6(), // CardIdListComparisonOperator6 | 
  'cardIdList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator6(), // DeckIdFromComparisonOperator6 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator6(), // DeckIdToComparisonOperator6 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator6(), // DeckIdListComparisonOperator6 | 
  'deckIdList': [3.4], // [Number] | 
  'orderFromComparisonOperator': new FastApi.OrderFromComparisonOperator6(), // OrderFromComparisonOperator6 | 
  'orderToComparisonOperator': new FastApi.OrderToComparisonOperator6(), // OrderToComparisonOperator6 | 
  'orderFrom': 56, // Number | 
  'orderTo': 56, // Number | 
  'orderListComparisonOperator': new FastApi.OrderListComparisonOperator6(), // OrderListComparisonOperator6 | 
  'orderList': [3.4] // [Number] | 
};
apiInstance.deleteOneByPrimaryKeyCardsIdDelete(id, opts, (error, data, response) => {
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
 **uidListComparisonOperator** | [**UidListComparisonOperator14**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator14**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator14**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator14**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator14**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator14**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator14**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator14**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator14**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **numberFromComparisonOperator** | [**NumberFromComparisonOperator6**](.md)|  | [optional] 
 **numberToComparisonOperator** | [**NumberToComparisonOperator6**](.md)|  | [optional] 
 **numberFrom** | **Number**|  | [optional] 
 **numberTo** | **Number**|  | [optional] 
 **numberListComparisonOperator** | [**NumberListComparisonOperator6**](.md)|  | [optional] 
 **numberList** | [**[Number]**](Number.md)|  | [optional] 
 **jsonDataStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **jsonDataStr** | [**[String]**](String.md)|  | [optional] 
 **jsonDataListComparisonOperator** | [**JsonDataListComparisonOperator6**](.md)|  | [optional] 
 **jsonDataList** | [**[String]**](String.md)|  | [optional] 
 **cardIdFromComparisonOperator** | [**CardIdFromComparisonOperator6**](.md)|  | [optional] 
 **cardIdToComparisonOperator** | [**CardIdToComparisonOperator6**](.md)|  | [optional] 
 **cardIdFrom** | **Number**|  | [optional] 
 **cardIdTo** | **Number**|  | [optional] 
 **cardIdListComparisonOperator** | [**CardIdListComparisonOperator6**](.md)|  | [optional] 
 **cardIdList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator6**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator6**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator6**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 
 **orderFromComparisonOperator** | [**OrderFromComparisonOperator6**](.md)|  | [optional] 
 **orderToComparisonOperator** | [**OrderToComparisonOperator6**](.md)|  | [optional] 
 **orderFrom** | **Number**|  | [optional] 
 **orderTo** | **Number**|  | [optional] 
 **orderListComparisonOperator** | [**OrderListComparisonOperator6**](.md)|  | [optional] 
 **orderList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotDeckCardDeleteOneResponseModel**](TarotDeckCardDeleteOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="entireUpdateByPrimaryKeyCardsIdPut"></a>
# **entireUpdateByPrimaryKeyCardsIdPut**
> TarotDeckCardUpdateOneResponseModel entireUpdateByPrimaryKeyCardsIdPut(body, id, opts)

Entire Update By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksCardsTarotApi();
let body = new FastApi.BodyEntireUpdateByPrimaryKeyCardsIdPut(); // BodyEntireUpdateByPrimaryKeyCardsIdPut | 
let id = 56; // Number | 
let opts = { 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator13(), // UidListComparisonOperator13 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator13(), // NameListComparisonOperator13 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator13(), // DescriptionListComparisonOperator13 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator13(), // CreatedFromComparisonOperator13 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator13(), // CreatedToComparisonOperator13 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator13(), // CreatedListComparisonOperator13 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator13(), // UpdatedFromComparisonOperator13 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator13(), // UpdatedToComparisonOperator13 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator13(), // UpdatedListComparisonOperator13 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'numberFromComparisonOperator': new FastApi.NumberFromComparisonOperator5(), // NumberFromComparisonOperator5 | 
  'numberToComparisonOperator': new FastApi.NumberToComparisonOperator5(), // NumberToComparisonOperator5 | 
  'numberFrom': 56, // Number | 
  'numberTo': 56, // Number | 
  'numberListComparisonOperator': new FastApi.NumberListComparisonOperator5(), // NumberListComparisonOperator5 | 
  'numberList': [3.4], // [Number] | 
  'jsonDataStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'jsonDataStr': ["jsonDataStr_example"], // [String] | 
  'jsonDataListComparisonOperator': new FastApi.JsonDataListComparisonOperator5(), // JsonDataListComparisonOperator5 | 
  'jsonDataList': ["jsonDataList_example"], // [String] | 
  'cardIdFromComparisonOperator': new FastApi.CardIdFromComparisonOperator5(), // CardIdFromComparisonOperator5 | 
  'cardIdToComparisonOperator': new FastApi.CardIdToComparisonOperator5(), // CardIdToComparisonOperator5 | 
  'cardIdFrom': 56, // Number | 
  'cardIdTo': 56, // Number | 
  'cardIdListComparisonOperator': new FastApi.CardIdListComparisonOperator5(), // CardIdListComparisonOperator5 | 
  'cardIdList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator5(), // DeckIdFromComparisonOperator5 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator5(), // DeckIdToComparisonOperator5 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator5(), // DeckIdListComparisonOperator5 | 
  'deckIdList': [3.4], // [Number] | 
  'orderFromComparisonOperator': new FastApi.OrderFromComparisonOperator5(), // OrderFromComparisonOperator5 | 
  'orderToComparisonOperator': new FastApi.OrderToComparisonOperator5(), // OrderToComparisonOperator5 | 
  'orderFrom': 56, // Number | 
  'orderTo': 56, // Number | 
  'orderListComparisonOperator': new FastApi.OrderListComparisonOperator5(), // OrderListComparisonOperator5 | 
  'orderList': [3.4] // [Number] | 
};
apiInstance.entireUpdateByPrimaryKeyCardsIdPut(body, id, opts, (error, data, response) => {
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
 **body** | [**BodyEntireUpdateByPrimaryKeyCardsIdPut**](BodyEntireUpdateByPrimaryKeyCardsIdPut.md)|  | 
 **id** | **Number**|  | 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator13**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator13**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator13**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator13**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator13**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator13**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator13**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator13**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator13**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **numberFromComparisonOperator** | [**NumberFromComparisonOperator5**](.md)|  | [optional] 
 **numberToComparisonOperator** | [**NumberToComparisonOperator5**](.md)|  | [optional] 
 **numberFrom** | **Number**|  | [optional] 
 **numberTo** | **Number**|  | [optional] 
 **numberListComparisonOperator** | [**NumberListComparisonOperator5**](.md)|  | [optional] 
 **numberList** | [**[Number]**](Number.md)|  | [optional] 
 **jsonDataStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **jsonDataStr** | [**[String]**](String.md)|  | [optional] 
 **jsonDataListComparisonOperator** | [**JsonDataListComparisonOperator5**](.md)|  | [optional] 
 **jsonDataList** | [**[String]**](String.md)|  | [optional] 
 **cardIdFromComparisonOperator** | [**CardIdFromComparisonOperator5**](.md)|  | [optional] 
 **cardIdToComparisonOperator** | [**CardIdToComparisonOperator5**](.md)|  | [optional] 
 **cardIdFrom** | **Number**|  | [optional] 
 **cardIdTo** | **Number**|  | [optional] 
 **cardIdListComparisonOperator** | [**CardIdListComparisonOperator5**](.md)|  | [optional] 
 **cardIdList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator5**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator5**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator5**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 
 **orderFromComparisonOperator** | [**OrderFromComparisonOperator5**](.md)|  | [optional] 
 **orderToComparisonOperator** | [**OrderToComparisonOperator5**](.md)|  | [optional] 
 **orderFrom** | **Number**|  | [optional] 
 **orderTo** | **Number**|  | [optional] 
 **orderListComparisonOperator** | [**OrderListComparisonOperator5**](.md)|  | [optional] 
 **orderList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotDeckCardUpdateOneResponseModel**](TarotDeckCardUpdateOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="entireUpdateManyByQueryCardsPut"></a>
# **entireUpdateManyByQueryCardsPut**
> TarotDeckCardUpdateManyItemListResponseModel entireUpdateManyByQueryCardsPut(body, opts)

Entire Update Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksCardsTarotApi();
let body = new FastApi.BodyEntireUpdateManyByQueryCardsPut(); // BodyEntireUpdateManyByQueryCardsPut | 
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator5(), // IdFromComparisonOperator5 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator5(), // IdToComparisonOperator5 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator5(), // IdListComparisonOperator5 | 
  'idList': [3.4], // [Number] | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator9(), // UidListComparisonOperator9 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator9(), // NameListComparisonOperator9 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator9(), // DescriptionListComparisonOperator9 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator9(), // CreatedFromComparisonOperator9 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator9(), // CreatedToComparisonOperator9 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator9(), // CreatedListComparisonOperator9 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator9(), // UpdatedFromComparisonOperator9 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator9(), // UpdatedToComparisonOperator9 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator9(), // UpdatedListComparisonOperator9 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'numberFromComparisonOperator': new FastApi.NumberFromComparisonOperator1(), // NumberFromComparisonOperator1 | 
  'numberToComparisonOperator': new FastApi.NumberToComparisonOperator1(), // NumberToComparisonOperator1 | 
  'numberFrom': 56, // Number | 
  'numberTo': 56, // Number | 
  'numberListComparisonOperator': new FastApi.NumberListComparisonOperator1(), // NumberListComparisonOperator1 | 
  'numberList': [3.4], // [Number] | 
  'jsonDataStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'jsonDataStr': ["jsonDataStr_example"], // [String] | 
  'jsonDataListComparisonOperator': new FastApi.JsonDataListComparisonOperator1(), // JsonDataListComparisonOperator1 | 
  'jsonDataList': ["jsonDataList_example"], // [String] | 
  'cardIdFromComparisonOperator': new FastApi.CardIdFromComparisonOperator1(), // CardIdFromComparisonOperator1 | 
  'cardIdToComparisonOperator': new FastApi.CardIdToComparisonOperator1(), // CardIdToComparisonOperator1 | 
  'cardIdFrom': 56, // Number | 
  'cardIdTo': 56, // Number | 
  'cardIdListComparisonOperator': new FastApi.CardIdListComparisonOperator1(), // CardIdListComparisonOperator1 | 
  'cardIdList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator1(), // DeckIdFromComparisonOperator1 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator1(), // DeckIdToComparisonOperator1 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator1(), // DeckIdListComparisonOperator1 | 
  'deckIdList': [3.4], // [Number] | 
  'orderFromComparisonOperator': new FastApi.OrderFromComparisonOperator1(), // OrderFromComparisonOperator1 | 
  'orderToComparisonOperator': new FastApi.OrderToComparisonOperator1(), // OrderToComparisonOperator1 | 
  'orderFrom': 56, // Number | 
  'orderTo': 56, // Number | 
  'orderListComparisonOperator': new FastApi.OrderListComparisonOperator1(), // OrderListComparisonOperator1 | 
  'orderList': [3.4] // [Number] | 
};
apiInstance.entireUpdateManyByQueryCardsPut(body, opts, (error, data, response) => {
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
 **body** | [**BodyEntireUpdateManyByQueryCardsPut**](BodyEntireUpdateManyByQueryCardsPut.md)|  | 
 **idFromComparisonOperator** | [**IdFromComparisonOperator5**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator5**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator5**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator9**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator9**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator9**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator9**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator9**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator9**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator9**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator9**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator9**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **numberFromComparisonOperator** | [**NumberFromComparisonOperator1**](.md)|  | [optional] 
 **numberToComparisonOperator** | [**NumberToComparisonOperator1**](.md)|  | [optional] 
 **numberFrom** | **Number**|  | [optional] 
 **numberTo** | **Number**|  | [optional] 
 **numberListComparisonOperator** | [**NumberListComparisonOperator1**](.md)|  | [optional] 
 **numberList** | [**[Number]**](Number.md)|  | [optional] 
 **jsonDataStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **jsonDataStr** | [**[String]**](String.md)|  | [optional] 
 **jsonDataListComparisonOperator** | [**JsonDataListComparisonOperator1**](.md)|  | [optional] 
 **jsonDataList** | [**[String]**](String.md)|  | [optional] 
 **cardIdFromComparisonOperator** | [**CardIdFromComparisonOperator1**](.md)|  | [optional] 
 **cardIdToComparisonOperator** | [**CardIdToComparisonOperator1**](.md)|  | [optional] 
 **cardIdFrom** | **Number**|  | [optional] 
 **cardIdTo** | **Number**|  | [optional] 
 **cardIdListComparisonOperator** | [**CardIdListComparisonOperator1**](.md)|  | [optional] 
 **cardIdList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator1**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator1**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator1**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 
 **orderFromComparisonOperator** | [**OrderFromComparisonOperator1**](.md)|  | [optional] 
 **orderToComparisonOperator** | [**OrderToComparisonOperator1**](.md)|  | [optional] 
 **orderFrom** | **Number**|  | [optional] 
 **orderTo** | **Number**|  | [optional] 
 **orderListComparisonOperator** | [**OrderListComparisonOperator1**](.md)|  | [optional] 
 **orderList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotDeckCardUpdateManyItemListResponseModel**](TarotDeckCardUpdateManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getManyCardsGet"></a>
# **getManyCardsGet**
> TarotDeckCardFindManyItemListResponseModel getManyCardsGet(opts)

Get Many

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksCardsTarotApi();
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator4(), // IdFromComparisonOperator4 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator4(), // IdToComparisonOperator4 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator4(), // IdListComparisonOperator4 | 
  'idList': [3.4], // [Number] | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator8(), // UidListComparisonOperator8 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator8(), // NameListComparisonOperator8 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator8(), // DescriptionListComparisonOperator8 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator8(), // CreatedFromComparisonOperator8 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator8(), // CreatedToComparisonOperator8 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator8(), // CreatedListComparisonOperator8 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator8(), // UpdatedFromComparisonOperator8 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator8(), // UpdatedToComparisonOperator8 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator8(), // UpdatedListComparisonOperator8 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'numberFromComparisonOperator': new FastApi.NumberFromComparisonOperator(), // NumberFromComparisonOperator | 
  'numberToComparisonOperator': new FastApi.NumberToComparisonOperator(), // NumberToComparisonOperator | 
  'numberFrom': 56, // Number | 
  'numberTo': 56, // Number | 
  'numberListComparisonOperator': new FastApi.NumberListComparisonOperator(), // NumberListComparisonOperator | 
  'numberList': [3.4], // [Number] | 
  'jsonDataStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'jsonDataStr': ["jsonDataStr_example"], // [String] | 
  'jsonDataListComparisonOperator': new FastApi.JsonDataListComparisonOperator(), // JsonDataListComparisonOperator | 
  'jsonDataList': ["jsonDataList_example"], // [String] | 
  'cardIdFromComparisonOperator': new FastApi.CardIdFromComparisonOperator(), // CardIdFromComparisonOperator | 
  'cardIdToComparisonOperator': new FastApi.CardIdToComparisonOperator(), // CardIdToComparisonOperator | 
  'cardIdFrom': 56, // Number | 
  'cardIdTo': 56, // Number | 
  'cardIdListComparisonOperator': new FastApi.CardIdListComparisonOperator(), // CardIdListComparisonOperator | 
  'cardIdList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator(), // DeckIdFromComparisonOperator | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator(), // DeckIdToComparisonOperator | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator(), // DeckIdListComparisonOperator | 
  'deckIdList': [3.4], // [Number] | 
  'orderFromComparisonOperator': new FastApi.OrderFromComparisonOperator(), // OrderFromComparisonOperator | 
  'orderToComparisonOperator': new FastApi.OrderToComparisonOperator(), // OrderToComparisonOperator | 
  'orderFrom': 56, // Number | 
  'orderTo': 56, // Number | 
  'orderListComparisonOperator': new FastApi.OrderListComparisonOperator(), // OrderListComparisonOperator | 
  'orderList': [3.4], // [Number] | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'orderByColumns': ["orderByColumns_example"] // [String] | <br> support column:              <br> ['id', 'uid', 'name', 'description', 'created', 'updated', 'number', 'json_data', 'card_id', 'deck_id', '_order'] <hr><br> support ordering:               <br> ['DESC', 'ASC']              <hr>              <br/>example:              <br/>&emsp;&emsp;any name of column:ASC             <br/>&emsp;&emsp;any name of column: DESC              <br/>&emsp;&emsp;any name of column    :    DESC             <br/>&emsp;&emsp;any name of column (default sort by ASC)
};
apiInstance.getManyCardsGet(opts, (error, data, response) => {
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
 **idFromComparisonOperator** | [**IdFromComparisonOperator4**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator4**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator4**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator8**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator8**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator8**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator8**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator8**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator8**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator8**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator8**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator8**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **numberFromComparisonOperator** | [**NumberFromComparisonOperator**](.md)|  | [optional] 
 **numberToComparisonOperator** | [**NumberToComparisonOperator**](.md)|  | [optional] 
 **numberFrom** | **Number**|  | [optional] 
 **numberTo** | **Number**|  | [optional] 
 **numberListComparisonOperator** | [**NumberListComparisonOperator**](.md)|  | [optional] 
 **numberList** | [**[Number]**](Number.md)|  | [optional] 
 **jsonDataStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **jsonDataStr** | [**[String]**](String.md)|  | [optional] 
 **jsonDataListComparisonOperator** | [**JsonDataListComparisonOperator**](.md)|  | [optional] 
 **jsonDataList** | [**[String]**](String.md)|  | [optional] 
 **cardIdFromComparisonOperator** | [**CardIdFromComparisonOperator**](.md)|  | [optional] 
 **cardIdToComparisonOperator** | [**CardIdToComparisonOperator**](.md)|  | [optional] 
 **cardIdFrom** | **Number**|  | [optional] 
 **cardIdTo** | **Number**|  | [optional] 
 **cardIdListComparisonOperator** | [**CardIdListComparisonOperator**](.md)|  | [optional] 
 **cardIdList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 
 **orderFromComparisonOperator** | [**OrderFromComparisonOperator**](.md)|  | [optional] 
 **orderToComparisonOperator** | [**OrderToComparisonOperator**](.md)|  | [optional] 
 **orderFrom** | **Number**|  | [optional] 
 **orderTo** | **Number**|  | [optional] 
 **orderListComparisonOperator** | [**OrderListComparisonOperator**](.md)|  | [optional] 
 **orderList** | [**[Number]**](Number.md)|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **orderByColumns** | [**[String]**](String.md)| &lt;br&gt; support column:              &lt;br&gt; [&#x27;id&#x27;, &#x27;uid&#x27;, &#x27;name&#x27;, &#x27;description&#x27;, &#x27;created&#x27;, &#x27;updated&#x27;, &#x27;number&#x27;, &#x27;json_data&#x27;, &#x27;card_id&#x27;, &#x27;deck_id&#x27;, &#x27;_order&#x27;] &lt;hr&gt;&lt;br&gt; support ordering:               &lt;br&gt; [&#x27;DESC&#x27;, &#x27;ASC&#x27;]              &lt;hr&gt;              &lt;br/&gt;example:              &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column:ASC             &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column: DESC              &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column    :    DESC             &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column (default sort by ASC) | [optional] 

### Return type

[**TarotDeckCardFindManyItemListResponseModel**](TarotDeckCardFindManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneByPrimaryKeyCardsIdGet"></a>
# **getOneByPrimaryKeyCardsIdGet**
> TarotDeckCardFindOneResponseModel getOneByPrimaryKeyCardsIdGet(id, opts)

Get One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksCardsTarotApi();
let id = 56; // Number | 
let opts = { 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator12(), // UidListComparisonOperator12 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator12(), // NameListComparisonOperator12 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator12(), // DescriptionListComparisonOperator12 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator12(), // CreatedFromComparisonOperator12 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator12(), // CreatedToComparisonOperator12 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator12(), // CreatedListComparisonOperator12 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator12(), // UpdatedFromComparisonOperator12 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator12(), // UpdatedToComparisonOperator12 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator12(), // UpdatedListComparisonOperator12 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'numberFromComparisonOperator': new FastApi.NumberFromComparisonOperator4(), // NumberFromComparisonOperator4 | 
  'numberToComparisonOperator': new FastApi.NumberToComparisonOperator4(), // NumberToComparisonOperator4 | 
  'numberFrom': 56, // Number | 
  'numberTo': 56, // Number | 
  'numberListComparisonOperator': new FastApi.NumberListComparisonOperator4(), // NumberListComparisonOperator4 | 
  'numberList': [3.4], // [Number] | 
  'jsonDataStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'jsonDataStr': ["jsonDataStr_example"], // [String] | 
  'jsonDataListComparisonOperator': new FastApi.JsonDataListComparisonOperator4(), // JsonDataListComparisonOperator4 | 
  'jsonDataList': ["jsonDataList_example"], // [String] | 
  'cardIdFromComparisonOperator': new FastApi.CardIdFromComparisonOperator4(), // CardIdFromComparisonOperator4 | 
  'cardIdToComparisonOperator': new FastApi.CardIdToComparisonOperator4(), // CardIdToComparisonOperator4 | 
  'cardIdFrom': 56, // Number | 
  'cardIdTo': 56, // Number | 
  'cardIdListComparisonOperator': new FastApi.CardIdListComparisonOperator4(), // CardIdListComparisonOperator4 | 
  'cardIdList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator4(), // DeckIdFromComparisonOperator4 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator4(), // DeckIdToComparisonOperator4 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator4(), // DeckIdListComparisonOperator4 | 
  'deckIdList': [3.4], // [Number] | 
  'orderFromComparisonOperator': new FastApi.OrderFromComparisonOperator4(), // OrderFromComparisonOperator4 | 
  'orderToComparisonOperator': new FastApi.OrderToComparisonOperator4(), // OrderToComparisonOperator4 | 
  'orderFrom': 56, // Number | 
  'orderTo': 56, // Number | 
  'orderListComparisonOperator': new FastApi.OrderListComparisonOperator4(), // OrderListComparisonOperator4 | 
  'orderList': [3.4] // [Number] | 
};
apiInstance.getOneByPrimaryKeyCardsIdGet(id, opts, (error, data, response) => {
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
 **uidListComparisonOperator** | [**UidListComparisonOperator12**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator12**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator12**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator12**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator12**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator12**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator12**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator12**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator12**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **numberFromComparisonOperator** | [**NumberFromComparisonOperator4**](.md)|  | [optional] 
 **numberToComparisonOperator** | [**NumberToComparisonOperator4**](.md)|  | [optional] 
 **numberFrom** | **Number**|  | [optional] 
 **numberTo** | **Number**|  | [optional] 
 **numberListComparisonOperator** | [**NumberListComparisonOperator4**](.md)|  | [optional] 
 **numberList** | [**[Number]**](Number.md)|  | [optional] 
 **jsonDataStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **jsonDataStr** | [**[String]**](String.md)|  | [optional] 
 **jsonDataListComparisonOperator** | [**JsonDataListComparisonOperator4**](.md)|  | [optional] 
 **jsonDataList** | [**[String]**](String.md)|  | [optional] 
 **cardIdFromComparisonOperator** | [**CardIdFromComparisonOperator4**](.md)|  | [optional] 
 **cardIdToComparisonOperator** | [**CardIdToComparisonOperator4**](.md)|  | [optional] 
 **cardIdFrom** | **Number**|  | [optional] 
 **cardIdTo** | **Number**|  | [optional] 
 **cardIdListComparisonOperator** | [**CardIdListComparisonOperator4**](.md)|  | [optional] 
 **cardIdList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator4**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator4**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator4**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 
 **orderFromComparisonOperator** | [**OrderFromComparisonOperator4**](.md)|  | [optional] 
 **orderToComparisonOperator** | [**OrderToComparisonOperator4**](.md)|  | [optional] 
 **orderFrom** | **Number**|  | [optional] 
 **orderTo** | **Number**|  | [optional] 
 **orderListComparisonOperator** | [**OrderListComparisonOperator4**](.md)|  | [optional] 
 **orderList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotDeckCardFindOneResponseModel**](TarotDeckCardFindOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="insertManyCardsPost"></a>
# **insertManyCardsPost**
> TarotDeckCardCreateManyItemListResponseModel insertManyCardsPost(body)

Insert Many

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksCardsTarotApi();
let body = [new FastApi.TarotDeckCardCreateManyItemRequestModel()]; // [TarotDeckCardCreateManyItemRequestModel] | 

apiInstance.insertManyCardsPost(body, (error, data, response) => {
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
 **body** | [**[TarotDeckCardCreateManyItemRequestModel]**](TarotDeckCardCreateManyItemRequestModel.md)|  | 

### Return type

[**TarotDeckCardCreateManyItemListResponseModel**](TarotDeckCardCreateManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partialUpdateManyByQueryCardsPatch"></a>
# **partialUpdateManyByQueryCardsPatch**
> TarotDeckCardPatchManyItemListResponseModel partialUpdateManyByQueryCardsPatch(opts)

Partial Update Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksCardsTarotApi();
let opts = { 
  'body': new FastApi.BodyPartialUpdateManyByQueryCardsPatch(), // BodyPartialUpdateManyByQueryCardsPatch | 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator7(), // IdFromComparisonOperator7 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator7(), // IdToComparisonOperator7 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator7(), // IdListComparisonOperator7 | 
  'idList': [3.4], // [Number] | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator11(), // UidListComparisonOperator11 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator11(), // NameListComparisonOperator11 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator11(), // DescriptionListComparisonOperator11 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator11(), // CreatedFromComparisonOperator11 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator11(), // CreatedToComparisonOperator11 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator11(), // CreatedListComparisonOperator11 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator11(), // UpdatedFromComparisonOperator11 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator11(), // UpdatedToComparisonOperator11 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator11(), // UpdatedListComparisonOperator11 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'numberFromComparisonOperator': new FastApi.NumberFromComparisonOperator3(), // NumberFromComparisonOperator3 | 
  'numberToComparisonOperator': new FastApi.NumberToComparisonOperator3(), // NumberToComparisonOperator3 | 
  'numberFrom': 56, // Number | 
  'numberTo': 56, // Number | 
  'numberListComparisonOperator': new FastApi.NumberListComparisonOperator3(), // NumberListComparisonOperator3 | 
  'numberList': [3.4], // [Number] | 
  'jsonDataStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'jsonDataStr': ["jsonDataStr_example"], // [String] | 
  'jsonDataListComparisonOperator': new FastApi.JsonDataListComparisonOperator3(), // JsonDataListComparisonOperator3 | 
  'jsonDataList': ["jsonDataList_example"], // [String] | 
  'cardIdFromComparisonOperator': new FastApi.CardIdFromComparisonOperator3(), // CardIdFromComparisonOperator3 | 
  'cardIdToComparisonOperator': new FastApi.CardIdToComparisonOperator3(), // CardIdToComparisonOperator3 | 
  'cardIdFrom': 56, // Number | 
  'cardIdTo': 56, // Number | 
  'cardIdListComparisonOperator': new FastApi.CardIdListComparisonOperator3(), // CardIdListComparisonOperator3 | 
  'cardIdList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator3(), // DeckIdFromComparisonOperator3 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator3(), // DeckIdToComparisonOperator3 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator3(), // DeckIdListComparisonOperator3 | 
  'deckIdList': [3.4], // [Number] | 
  'orderFromComparisonOperator': new FastApi.OrderFromComparisonOperator3(), // OrderFromComparisonOperator3 | 
  'orderToComparisonOperator': new FastApi.OrderToComparisonOperator3(), // OrderToComparisonOperator3 | 
  'orderFrom': 56, // Number | 
  'orderTo': 56, // Number | 
  'orderListComparisonOperator': new FastApi.OrderListComparisonOperator3(), // OrderListComparisonOperator3 | 
  'orderList': [3.4] // [Number] | 
};
apiInstance.partialUpdateManyByQueryCardsPatch(opts, (error, data, response) => {
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
 **body** | [**BodyPartialUpdateManyByQueryCardsPatch**](BodyPartialUpdateManyByQueryCardsPatch.md)|  | [optional] 
 **idFromComparisonOperator** | [**IdFromComparisonOperator7**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator7**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator7**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator11**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator11**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator11**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator11**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator11**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator11**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator11**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator11**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator11**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **numberFromComparisonOperator** | [**NumberFromComparisonOperator3**](.md)|  | [optional] 
 **numberToComparisonOperator** | [**NumberToComparisonOperator3**](.md)|  | [optional] 
 **numberFrom** | **Number**|  | [optional] 
 **numberTo** | **Number**|  | [optional] 
 **numberListComparisonOperator** | [**NumberListComparisonOperator3**](.md)|  | [optional] 
 **numberList** | [**[Number]**](Number.md)|  | [optional] 
 **jsonDataStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **jsonDataStr** | [**[String]**](String.md)|  | [optional] 
 **jsonDataListComparisonOperator** | [**JsonDataListComparisonOperator3**](.md)|  | [optional] 
 **jsonDataList** | [**[String]**](String.md)|  | [optional] 
 **cardIdFromComparisonOperator** | [**CardIdFromComparisonOperator3**](.md)|  | [optional] 
 **cardIdToComparisonOperator** | [**CardIdToComparisonOperator3**](.md)|  | [optional] 
 **cardIdFrom** | **Number**|  | [optional] 
 **cardIdTo** | **Number**|  | [optional] 
 **cardIdListComparisonOperator** | [**CardIdListComparisonOperator3**](.md)|  | [optional] 
 **cardIdList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator3**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator3**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator3**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 
 **orderFromComparisonOperator** | [**OrderFromComparisonOperator3**](.md)|  | [optional] 
 **orderToComparisonOperator** | [**OrderToComparisonOperator3**](.md)|  | [optional] 
 **orderFrom** | **Number**|  | [optional] 
 **orderTo** | **Number**|  | [optional] 
 **orderListComparisonOperator** | [**OrderListComparisonOperator3**](.md)|  | [optional] 
 **orderList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotDeckCardPatchManyItemListResponseModel**](TarotDeckCardPatchManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partialUpdateOneByPrimaryKeyCardsIdPatch"></a>
# **partialUpdateOneByPrimaryKeyCardsIdPatch**
> TarotDeckCardPatchOneResponseModel partialUpdateOneByPrimaryKeyCardsIdPatch(id, opts)

Partial Update One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksCardsTarotApi();
let id = 56; // Number | 
let opts = { 
  'body': new FastApi.BodyPartialUpdateOneByPrimaryKeyCardsIdPatch(), // BodyPartialUpdateOneByPrimaryKeyCardsIdPatch | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator15(), // UidListComparisonOperator15 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator15(), // NameListComparisonOperator15 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator15(), // DescriptionListComparisonOperator15 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator15(), // CreatedFromComparisonOperator15 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator15(), // CreatedToComparisonOperator15 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator15(), // CreatedListComparisonOperator15 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator15(), // UpdatedFromComparisonOperator15 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator15(), // UpdatedToComparisonOperator15 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator15(), // UpdatedListComparisonOperator15 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'numberFromComparisonOperator': new FastApi.NumberFromComparisonOperator7(), // NumberFromComparisonOperator7 | 
  'numberToComparisonOperator': new FastApi.NumberToComparisonOperator7(), // NumberToComparisonOperator7 | 
  'numberFrom': 56, // Number | 
  'numberTo': 56, // Number | 
  'numberListComparisonOperator': new FastApi.NumberListComparisonOperator7(), // NumberListComparisonOperator7 | 
  'numberList': [3.4], // [Number] | 
  'jsonDataStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'jsonDataStr': ["jsonDataStr_example"], // [String] | 
  'jsonDataListComparisonOperator': new FastApi.JsonDataListComparisonOperator7(), // JsonDataListComparisonOperator7 | 
  'jsonDataList': ["jsonDataList_example"], // [String] | 
  'cardIdFromComparisonOperator': new FastApi.CardIdFromComparisonOperator7(), // CardIdFromComparisonOperator7 | 
  'cardIdToComparisonOperator': new FastApi.CardIdToComparisonOperator7(), // CardIdToComparisonOperator7 | 
  'cardIdFrom': 56, // Number | 
  'cardIdTo': 56, // Number | 
  'cardIdListComparisonOperator': new FastApi.CardIdListComparisonOperator7(), // CardIdListComparisonOperator7 | 
  'cardIdList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator7(), // DeckIdFromComparisonOperator7 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator7(), // DeckIdToComparisonOperator7 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator7(), // DeckIdListComparisonOperator7 | 
  'deckIdList': [3.4], // [Number] | 
  'orderFromComparisonOperator': new FastApi.OrderFromComparisonOperator7(), // OrderFromComparisonOperator7 | 
  'orderToComparisonOperator': new FastApi.OrderToComparisonOperator7(), // OrderToComparisonOperator7 | 
  'orderFrom': 56, // Number | 
  'orderTo': 56, // Number | 
  'orderListComparisonOperator': new FastApi.OrderListComparisonOperator7(), // OrderListComparisonOperator7 | 
  'orderList': [3.4] // [Number] | 
};
apiInstance.partialUpdateOneByPrimaryKeyCardsIdPatch(id, opts, (error, data, response) => {
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
 **body** | [**BodyPartialUpdateOneByPrimaryKeyCardsIdPatch**](BodyPartialUpdateOneByPrimaryKeyCardsIdPatch.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator15**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator15**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator15**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator15**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator15**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator15**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator15**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator15**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator15**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **numberFromComparisonOperator** | [**NumberFromComparisonOperator7**](.md)|  | [optional] 
 **numberToComparisonOperator** | [**NumberToComparisonOperator7**](.md)|  | [optional] 
 **numberFrom** | **Number**|  | [optional] 
 **numberTo** | **Number**|  | [optional] 
 **numberListComparisonOperator** | [**NumberListComparisonOperator7**](.md)|  | [optional] 
 **numberList** | [**[Number]**](Number.md)|  | [optional] 
 **jsonDataStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **jsonDataStr** | [**[String]**](String.md)|  | [optional] 
 **jsonDataListComparisonOperator** | [**JsonDataListComparisonOperator7**](.md)|  | [optional] 
 **jsonDataList** | [**[String]**](String.md)|  | [optional] 
 **cardIdFromComparisonOperator** | [**CardIdFromComparisonOperator7**](.md)|  | [optional] 
 **cardIdToComparisonOperator** | [**CardIdToComparisonOperator7**](.md)|  | [optional] 
 **cardIdFrom** | **Number**|  | [optional] 
 **cardIdTo** | **Number**|  | [optional] 
 **cardIdListComparisonOperator** | [**CardIdListComparisonOperator7**](.md)|  | [optional] 
 **cardIdList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator7**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator7**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator7**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 
 **orderFromComparisonOperator** | [**OrderFromComparisonOperator7**](.md)|  | [optional] 
 **orderToComparisonOperator** | [**OrderToComparisonOperator7**](.md)|  | [optional] 
 **orderFrom** | **Number**|  | [optional] 
 **orderTo** | **Number**|  | [optional] 
 **orderListComparisonOperator** | [**OrderListComparisonOperator7**](.md)|  | [optional] 
 **orderList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotDeckCardPatchOneResponseModel**](TarotDeckCardPatchOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

