# FastApi.DecksTarotApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteManyByQueryDecksDelete**](DecksTarotApi.md#deleteManyByQueryDecksDelete) | **DELETE** /decks | Delete Many By Query
[**deleteOneByPrimaryKeyDecksIdDelete**](DecksTarotApi.md#deleteOneByPrimaryKeyDecksIdDelete) | **DELETE** /decks/{id} | Delete One By Primary Key
[**entireUpdateByPrimaryKeyDecksIdPut**](DecksTarotApi.md#entireUpdateByPrimaryKeyDecksIdPut) | **PUT** /decks/{id} | Entire Update By Primary Key
[**entireUpdateManyByQueryDecksPut**](DecksTarotApi.md#entireUpdateManyByQueryDecksPut) | **PUT** /decks | Entire Update Many By Query
[**getManyDecksGet**](DecksTarotApi.md#getManyDecksGet) | **GET** /decks | Get Many
[**getOneByPrimaryKeyDecksIdGet**](DecksTarotApi.md#getOneByPrimaryKeyDecksIdGet) | **GET** /decks/{id} | Get One By Primary Key
[**insertManyDecksPost**](DecksTarotApi.md#insertManyDecksPost) | **POST** /decks | Insert Many
[**partialUpdateManyByQueryDecksPatch**](DecksTarotApi.md#partialUpdateManyByQueryDecksPatch) | **PATCH** /decks | Partial Update Many By Query
[**partialUpdateOneByPrimaryKeyDecksIdPatch**](DecksTarotApi.md#partialUpdateOneByPrimaryKeyDecksIdPatch) | **PATCH** /decks/{id} | Partial Update One By Primary Key

<a name="deleteManyByQueryDecksDelete"></a>
# **deleteManyByQueryDecksDelete**
> TarotDeckDeleteManyItemListResponseModel deleteManyByQueryDecksDelete(opts)

Delete Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksTarotApi();
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator2(), // IdFromComparisonOperator2 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator2(), // IdToComparisonOperator2 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator2(), // IdListComparisonOperator2 | 
  'idList': [3.4], // [Number] | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator2(), // UidListComparisonOperator2 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator2(), // NameListComparisonOperator2 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator2(), // DescriptionListComparisonOperator2 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator2(), // CreatedFromComparisonOperator2 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator2(), // CreatedToComparisonOperator2 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator2(), // CreatedListComparisonOperator2 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator2(), // UpdatedFromComparisonOperator2 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator2(), // UpdatedToComparisonOperator2 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator2(), // UpdatedListComparisonOperator2 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'createdCardsListComparisonOperator': new FastApi.CreatedCardsListComparisonOperator2(), // CreatedCardsListComparisonOperator2 | 
  'createdCardsList': [true], // [Boolean] | 
  'intentionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'intentionStr': ["intentionStr_example"], // [String] | 
  'intentionListComparisonOperator': new FastApi.IntentionListComparisonOperator2(), // IntentionListComparisonOperator2 | 
  'intentionList': ["intentionList_example"], // [String] | 
  'altStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'altStr': ["altStr_example"], // [String] | 
  'altListComparisonOperator': new FastApi.AltListComparisonOperator2(), // AltListComparisonOperator2 | 
  'altList': ["altList_example"], // [String] | 
  'captionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'captionStr': ["captionStr_example"], // [String] | 
  'captionListComparisonOperator': new FastApi.CaptionListComparisonOperator2(), // CaptionListComparisonOperator2 | 
  'captionList': ["captionList_example"], // [String] | 
  'imageStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'imageStr': ["imageStr_example"], // [String] | 
  'imageListComparisonOperator': new FastApi.ImageListComparisonOperator2(), // ImageListComparisonOperator2 | 
  'imageList': ["imageList_example"], // [String] | 
  'imageHeightFromComparisonOperator': new FastApi.ImageHeightFromComparisonOperator2(), // ImageHeightFromComparisonOperator2 | 
  'imageHeightToComparisonOperator': new FastApi.ImageHeightToComparisonOperator2(), // ImageHeightToComparisonOperator2 | 
  'imageHeightFrom': 56, // Number | 
  'imageHeightTo': 56, // Number | 
  'imageHeightListComparisonOperator': new FastApi.ImageHeightListComparisonOperator2(), // ImageHeightListComparisonOperator2 | 
  'imageHeightList': [3.4], // [Number] | 
  'imageWidthFromComparisonOperator': new FastApi.ImageWidthFromComparisonOperator2(), // ImageWidthFromComparisonOperator2 | 
  'imageWidthToComparisonOperator': new FastApi.ImageWidthToComparisonOperator2(), // ImageWidthToComparisonOperator2 | 
  'imageWidthFrom': 56, // Number | 
  'imageWidthTo': 56, // Number | 
  'imageWidthListComparisonOperator': new FastApi.ImageWidthListComparisonOperator2(), // ImageWidthListComparisonOperator2 | 
  'imageWidthList': [3.4], // [Number] | 
  'urlStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'urlStr': ["urlStr_example"], // [String] | 
  'urlListComparisonOperator': new FastApi.UrlListComparisonOperator2(), // UrlListComparisonOperator2 | 
  'urlList': ["urlList_example"] // [String] | 
};
apiInstance.deleteManyByQueryDecksDelete(opts, (error, data, response) => {
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
 **idFromComparisonOperator** | [**IdFromComparisonOperator2**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator2**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator2**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator2**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator2**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator2**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator2**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator2**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator2**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator2**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator2**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator2**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **createdCardsListComparisonOperator** | [**CreatedCardsListComparisonOperator2**](.md)|  | [optional] 
 **createdCardsList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **intentionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **intentionStr** | [**[String]**](String.md)|  | [optional] 
 **intentionListComparisonOperator** | [**IntentionListComparisonOperator2**](.md)|  | [optional] 
 **intentionList** | [**[String]**](String.md)|  | [optional] 
 **altStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **altStr** | [**[String]**](String.md)|  | [optional] 
 **altListComparisonOperator** | [**AltListComparisonOperator2**](.md)|  | [optional] 
 **altList** | [**[String]**](String.md)|  | [optional] 
 **captionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **captionStr** | [**[String]**](String.md)|  | [optional] 
 **captionListComparisonOperator** | [**CaptionListComparisonOperator2**](.md)|  | [optional] 
 **captionList** | [**[String]**](String.md)|  | [optional] 
 **imageStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **imageStr** | [**[String]**](String.md)|  | [optional] 
 **imageListComparisonOperator** | [**ImageListComparisonOperator2**](.md)|  | [optional] 
 **imageList** | [**[String]**](String.md)|  | [optional] 
 **imageHeightFromComparisonOperator** | [**ImageHeightFromComparisonOperator2**](.md)|  | [optional] 
 **imageHeightToComparisonOperator** | [**ImageHeightToComparisonOperator2**](.md)|  | [optional] 
 **imageHeightFrom** | **Number**|  | [optional] 
 **imageHeightTo** | **Number**|  | [optional] 
 **imageHeightListComparisonOperator** | [**ImageHeightListComparisonOperator2**](.md)|  | [optional] 
 **imageHeightList** | [**[Number]**](Number.md)|  | [optional] 
 **imageWidthFromComparisonOperator** | [**ImageWidthFromComparisonOperator2**](.md)|  | [optional] 
 **imageWidthToComparisonOperator** | [**ImageWidthToComparisonOperator2**](.md)|  | [optional] 
 **imageWidthFrom** | **Number**|  | [optional] 
 **imageWidthTo** | **Number**|  | [optional] 
 **imageWidthListComparisonOperator** | [**ImageWidthListComparisonOperator2**](.md)|  | [optional] 
 **imageWidthList** | [**[Number]**](Number.md)|  | [optional] 
 **urlStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **urlStr** | [**[String]**](String.md)|  | [optional] 
 **urlListComparisonOperator** | [**UrlListComparisonOperator2**](.md)|  | [optional] 
 **urlList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotDeckDeleteManyItemListResponseModel**](TarotDeckDeleteManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOneByPrimaryKeyDecksIdDelete"></a>
# **deleteOneByPrimaryKeyDecksIdDelete**
> TarotDeckDeleteOneResponseModel deleteOneByPrimaryKeyDecksIdDelete(id, opts)

Delete One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksTarotApi();
let id = 56; // Number | 
let opts = { 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator6(), // UidListComparisonOperator6 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator6(), // NameListComparisonOperator6 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator6(), // DescriptionListComparisonOperator6 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator6(), // CreatedFromComparisonOperator6 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator6(), // CreatedToComparisonOperator6 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator6(), // CreatedListComparisonOperator6 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator6(), // UpdatedFromComparisonOperator6 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator6(), // UpdatedToComparisonOperator6 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator6(), // UpdatedListComparisonOperator6 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'createdCardsListComparisonOperator': new FastApi.CreatedCardsListComparisonOperator6(), // CreatedCardsListComparisonOperator6 | 
  'createdCardsList': [true], // [Boolean] | 
  'intentionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'intentionStr': ["intentionStr_example"], // [String] | 
  'intentionListComparisonOperator': new FastApi.IntentionListComparisonOperator6(), // IntentionListComparisonOperator6 | 
  'intentionList': ["intentionList_example"], // [String] | 
  'altStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'altStr': ["altStr_example"], // [String] | 
  'altListComparisonOperator': new FastApi.AltListComparisonOperator6(), // AltListComparisonOperator6 | 
  'altList': ["altList_example"], // [String] | 
  'captionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'captionStr': ["captionStr_example"], // [String] | 
  'captionListComparisonOperator': new FastApi.CaptionListComparisonOperator6(), // CaptionListComparisonOperator6 | 
  'captionList': ["captionList_example"], // [String] | 
  'imageStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'imageStr': ["imageStr_example"], // [String] | 
  'imageListComparisonOperator': new FastApi.ImageListComparisonOperator6(), // ImageListComparisonOperator6 | 
  'imageList': ["imageList_example"], // [String] | 
  'imageHeightFromComparisonOperator': new FastApi.ImageHeightFromComparisonOperator6(), // ImageHeightFromComparisonOperator6 | 
  'imageHeightToComparisonOperator': new FastApi.ImageHeightToComparisonOperator6(), // ImageHeightToComparisonOperator6 | 
  'imageHeightFrom': 56, // Number | 
  'imageHeightTo': 56, // Number | 
  'imageHeightListComparisonOperator': new FastApi.ImageHeightListComparisonOperator6(), // ImageHeightListComparisonOperator6 | 
  'imageHeightList': [3.4], // [Number] | 
  'imageWidthFromComparisonOperator': new FastApi.ImageWidthFromComparisonOperator6(), // ImageWidthFromComparisonOperator6 | 
  'imageWidthToComparisonOperator': new FastApi.ImageWidthToComparisonOperator6(), // ImageWidthToComparisonOperator6 | 
  'imageWidthFrom': 56, // Number | 
  'imageWidthTo': 56, // Number | 
  'imageWidthListComparisonOperator': new FastApi.ImageWidthListComparisonOperator6(), // ImageWidthListComparisonOperator6 | 
  'imageWidthList': [3.4], // [Number] | 
  'urlStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'urlStr': ["urlStr_example"], // [String] | 
  'urlListComparisonOperator': new FastApi.UrlListComparisonOperator6(), // UrlListComparisonOperator6 | 
  'urlList': ["urlList_example"] // [String] | 
};
apiInstance.deleteOneByPrimaryKeyDecksIdDelete(id, opts, (error, data, response) => {
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
 **uidListComparisonOperator** | [**UidListComparisonOperator6**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator6**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator6**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator6**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator6**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator6**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator6**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator6**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator6**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **createdCardsListComparisonOperator** | [**CreatedCardsListComparisonOperator6**](.md)|  | [optional] 
 **createdCardsList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **intentionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **intentionStr** | [**[String]**](String.md)|  | [optional] 
 **intentionListComparisonOperator** | [**IntentionListComparisonOperator6**](.md)|  | [optional] 
 **intentionList** | [**[String]**](String.md)|  | [optional] 
 **altStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **altStr** | [**[String]**](String.md)|  | [optional] 
 **altListComparisonOperator** | [**AltListComparisonOperator6**](.md)|  | [optional] 
 **altList** | [**[String]**](String.md)|  | [optional] 
 **captionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **captionStr** | [**[String]**](String.md)|  | [optional] 
 **captionListComparisonOperator** | [**CaptionListComparisonOperator6**](.md)|  | [optional] 
 **captionList** | [**[String]**](String.md)|  | [optional] 
 **imageStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **imageStr** | [**[String]**](String.md)|  | [optional] 
 **imageListComparisonOperator** | [**ImageListComparisonOperator6**](.md)|  | [optional] 
 **imageList** | [**[String]**](String.md)|  | [optional] 
 **imageHeightFromComparisonOperator** | [**ImageHeightFromComparisonOperator6**](.md)|  | [optional] 
 **imageHeightToComparisonOperator** | [**ImageHeightToComparisonOperator6**](.md)|  | [optional] 
 **imageHeightFrom** | **Number**|  | [optional] 
 **imageHeightTo** | **Number**|  | [optional] 
 **imageHeightListComparisonOperator** | [**ImageHeightListComparisonOperator6**](.md)|  | [optional] 
 **imageHeightList** | [**[Number]**](Number.md)|  | [optional] 
 **imageWidthFromComparisonOperator** | [**ImageWidthFromComparisonOperator6**](.md)|  | [optional] 
 **imageWidthToComparisonOperator** | [**ImageWidthToComparisonOperator6**](.md)|  | [optional] 
 **imageWidthFrom** | **Number**|  | [optional] 
 **imageWidthTo** | **Number**|  | [optional] 
 **imageWidthListComparisonOperator** | [**ImageWidthListComparisonOperator6**](.md)|  | [optional] 
 **imageWidthList** | [**[Number]**](Number.md)|  | [optional] 
 **urlStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **urlStr** | [**[String]**](String.md)|  | [optional] 
 **urlListComparisonOperator** | [**UrlListComparisonOperator6**](.md)|  | [optional] 
 **urlList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotDeckDeleteOneResponseModel**](TarotDeckDeleteOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="entireUpdateByPrimaryKeyDecksIdPut"></a>
# **entireUpdateByPrimaryKeyDecksIdPut**
> TarotDeckUpdateOneResponseModel entireUpdateByPrimaryKeyDecksIdPut(body, id, opts)

Entire Update By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksTarotApi();
let body = new FastApi.BodyEntireUpdateByPrimaryKeyDecksIdPut(); // BodyEntireUpdateByPrimaryKeyDecksIdPut | 
let id = 56; // Number | 
let opts = { 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator5(), // UidListComparisonOperator5 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator5(), // NameListComparisonOperator5 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator5(), // DescriptionListComparisonOperator5 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator5(), // CreatedFromComparisonOperator5 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator5(), // CreatedToComparisonOperator5 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator5(), // CreatedListComparisonOperator5 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator5(), // UpdatedFromComparisonOperator5 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator5(), // UpdatedToComparisonOperator5 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator5(), // UpdatedListComparisonOperator5 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'createdCardsListComparisonOperator': new FastApi.CreatedCardsListComparisonOperator5(), // CreatedCardsListComparisonOperator5 | 
  'createdCardsList': [true], // [Boolean] | 
  'intentionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'intentionStr': ["intentionStr_example"], // [String] | 
  'intentionListComparisonOperator': new FastApi.IntentionListComparisonOperator5(), // IntentionListComparisonOperator5 | 
  'intentionList': ["intentionList_example"], // [String] | 
  'altStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'altStr': ["altStr_example"], // [String] | 
  'altListComparisonOperator': new FastApi.AltListComparisonOperator5(), // AltListComparisonOperator5 | 
  'altList': ["altList_example"], // [String] | 
  'captionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'captionStr': ["captionStr_example"], // [String] | 
  'captionListComparisonOperator': new FastApi.CaptionListComparisonOperator5(), // CaptionListComparisonOperator5 | 
  'captionList': ["captionList_example"], // [String] | 
  'imageStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'imageStr': ["imageStr_example"], // [String] | 
  'imageListComparisonOperator': new FastApi.ImageListComparisonOperator5(), // ImageListComparisonOperator5 | 
  'imageList': ["imageList_example"], // [String] | 
  'imageHeightFromComparisonOperator': new FastApi.ImageHeightFromComparisonOperator5(), // ImageHeightFromComparisonOperator5 | 
  'imageHeightToComparisonOperator': new FastApi.ImageHeightToComparisonOperator5(), // ImageHeightToComparisonOperator5 | 
  'imageHeightFrom': 56, // Number | 
  'imageHeightTo': 56, // Number | 
  'imageHeightListComparisonOperator': new FastApi.ImageHeightListComparisonOperator5(), // ImageHeightListComparisonOperator5 | 
  'imageHeightList': [3.4], // [Number] | 
  'imageWidthFromComparisonOperator': new FastApi.ImageWidthFromComparisonOperator5(), // ImageWidthFromComparisonOperator5 | 
  'imageWidthToComparisonOperator': new FastApi.ImageWidthToComparisonOperator5(), // ImageWidthToComparisonOperator5 | 
  'imageWidthFrom': 56, // Number | 
  'imageWidthTo': 56, // Number | 
  'imageWidthListComparisonOperator': new FastApi.ImageWidthListComparisonOperator5(), // ImageWidthListComparisonOperator5 | 
  'imageWidthList': [3.4], // [Number] | 
  'urlStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'urlStr': ["urlStr_example"], // [String] | 
  'urlListComparisonOperator': new FastApi.UrlListComparisonOperator5(), // UrlListComparisonOperator5 | 
  'urlList': ["urlList_example"] // [String] | 
};
apiInstance.entireUpdateByPrimaryKeyDecksIdPut(body, id, opts, (error, data, response) => {
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
 **body** | [**BodyEntireUpdateByPrimaryKeyDecksIdPut**](BodyEntireUpdateByPrimaryKeyDecksIdPut.md)|  | 
 **id** | **Number**|  | 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator5**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator5**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator5**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator5**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator5**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator5**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator5**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator5**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator5**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **createdCardsListComparisonOperator** | [**CreatedCardsListComparisonOperator5**](.md)|  | [optional] 
 **createdCardsList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **intentionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **intentionStr** | [**[String]**](String.md)|  | [optional] 
 **intentionListComparisonOperator** | [**IntentionListComparisonOperator5**](.md)|  | [optional] 
 **intentionList** | [**[String]**](String.md)|  | [optional] 
 **altStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **altStr** | [**[String]**](String.md)|  | [optional] 
 **altListComparisonOperator** | [**AltListComparisonOperator5**](.md)|  | [optional] 
 **altList** | [**[String]**](String.md)|  | [optional] 
 **captionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **captionStr** | [**[String]**](String.md)|  | [optional] 
 **captionListComparisonOperator** | [**CaptionListComparisonOperator5**](.md)|  | [optional] 
 **captionList** | [**[String]**](String.md)|  | [optional] 
 **imageStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **imageStr** | [**[String]**](String.md)|  | [optional] 
 **imageListComparisonOperator** | [**ImageListComparisonOperator5**](.md)|  | [optional] 
 **imageList** | [**[String]**](String.md)|  | [optional] 
 **imageHeightFromComparisonOperator** | [**ImageHeightFromComparisonOperator5**](.md)|  | [optional] 
 **imageHeightToComparisonOperator** | [**ImageHeightToComparisonOperator5**](.md)|  | [optional] 
 **imageHeightFrom** | **Number**|  | [optional] 
 **imageHeightTo** | **Number**|  | [optional] 
 **imageHeightListComparisonOperator** | [**ImageHeightListComparisonOperator5**](.md)|  | [optional] 
 **imageHeightList** | [**[Number]**](Number.md)|  | [optional] 
 **imageWidthFromComparisonOperator** | [**ImageWidthFromComparisonOperator5**](.md)|  | [optional] 
 **imageWidthToComparisonOperator** | [**ImageWidthToComparisonOperator5**](.md)|  | [optional] 
 **imageWidthFrom** | **Number**|  | [optional] 
 **imageWidthTo** | **Number**|  | [optional] 
 **imageWidthListComparisonOperator** | [**ImageWidthListComparisonOperator5**](.md)|  | [optional] 
 **imageWidthList** | [**[Number]**](Number.md)|  | [optional] 
 **urlStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **urlStr** | [**[String]**](String.md)|  | [optional] 
 **urlListComparisonOperator** | [**UrlListComparisonOperator5**](.md)|  | [optional] 
 **urlList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotDeckUpdateOneResponseModel**](TarotDeckUpdateOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="entireUpdateManyByQueryDecksPut"></a>
# **entireUpdateManyByQueryDecksPut**
> TarotDeckUpdateManyItemListResponseModel entireUpdateManyByQueryDecksPut(body, opts)

Entire Update Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksTarotApi();
let body = new FastApi.BodyEntireUpdateManyByQueryDecksPut(); // BodyEntireUpdateManyByQueryDecksPut | 
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator1(), // IdFromComparisonOperator1 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator1(), // IdToComparisonOperator1 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator1(), // IdListComparisonOperator1 | 
  'idList': [3.4], // [Number] | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator1(), // UidListComparisonOperator1 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator1(), // NameListComparisonOperator1 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator1(), // DescriptionListComparisonOperator1 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator1(), // CreatedFromComparisonOperator1 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator1(), // CreatedToComparisonOperator1 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator1(), // CreatedListComparisonOperator1 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator1(), // UpdatedFromComparisonOperator1 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator1(), // UpdatedToComparisonOperator1 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator1(), // UpdatedListComparisonOperator1 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'createdCardsListComparisonOperator': new FastApi.CreatedCardsListComparisonOperator1(), // CreatedCardsListComparisonOperator1 | 
  'createdCardsList': [true], // [Boolean] | 
  'intentionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'intentionStr': ["intentionStr_example"], // [String] | 
  'intentionListComparisonOperator': new FastApi.IntentionListComparisonOperator1(), // IntentionListComparisonOperator1 | 
  'intentionList': ["intentionList_example"], // [String] | 
  'altStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'altStr': ["altStr_example"], // [String] | 
  'altListComparisonOperator': new FastApi.AltListComparisonOperator1(), // AltListComparisonOperator1 | 
  'altList': ["altList_example"], // [String] | 
  'captionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'captionStr': ["captionStr_example"], // [String] | 
  'captionListComparisonOperator': new FastApi.CaptionListComparisonOperator1(), // CaptionListComparisonOperator1 | 
  'captionList': ["captionList_example"], // [String] | 
  'imageStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'imageStr': ["imageStr_example"], // [String] | 
  'imageListComparisonOperator': new FastApi.ImageListComparisonOperator1(), // ImageListComparisonOperator1 | 
  'imageList': ["imageList_example"], // [String] | 
  'imageHeightFromComparisonOperator': new FastApi.ImageHeightFromComparisonOperator1(), // ImageHeightFromComparisonOperator1 | 
  'imageHeightToComparisonOperator': new FastApi.ImageHeightToComparisonOperator1(), // ImageHeightToComparisonOperator1 | 
  'imageHeightFrom': 56, // Number | 
  'imageHeightTo': 56, // Number | 
  'imageHeightListComparisonOperator': new FastApi.ImageHeightListComparisonOperator1(), // ImageHeightListComparisonOperator1 | 
  'imageHeightList': [3.4], // [Number] | 
  'imageWidthFromComparisonOperator': new FastApi.ImageWidthFromComparisonOperator1(), // ImageWidthFromComparisonOperator1 | 
  'imageWidthToComparisonOperator': new FastApi.ImageWidthToComparisonOperator1(), // ImageWidthToComparisonOperator1 | 
  'imageWidthFrom': 56, // Number | 
  'imageWidthTo': 56, // Number | 
  'imageWidthListComparisonOperator': new FastApi.ImageWidthListComparisonOperator1(), // ImageWidthListComparisonOperator1 | 
  'imageWidthList': [3.4], // [Number] | 
  'urlStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'urlStr': ["urlStr_example"], // [String] | 
  'urlListComparisonOperator': new FastApi.UrlListComparisonOperator1(), // UrlListComparisonOperator1 | 
  'urlList': ["urlList_example"] // [String] | 
};
apiInstance.entireUpdateManyByQueryDecksPut(body, opts, (error, data, response) => {
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
 **body** | [**BodyEntireUpdateManyByQueryDecksPut**](BodyEntireUpdateManyByQueryDecksPut.md)|  | 
 **idFromComparisonOperator** | [**IdFromComparisonOperator1**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator1**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator1**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator1**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator1**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator1**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator1**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator1**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator1**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator1**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator1**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator1**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **createdCardsListComparisonOperator** | [**CreatedCardsListComparisonOperator1**](.md)|  | [optional] 
 **createdCardsList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **intentionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **intentionStr** | [**[String]**](String.md)|  | [optional] 
 **intentionListComparisonOperator** | [**IntentionListComparisonOperator1**](.md)|  | [optional] 
 **intentionList** | [**[String]**](String.md)|  | [optional] 
 **altStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **altStr** | [**[String]**](String.md)|  | [optional] 
 **altListComparisonOperator** | [**AltListComparisonOperator1**](.md)|  | [optional] 
 **altList** | [**[String]**](String.md)|  | [optional] 
 **captionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **captionStr** | [**[String]**](String.md)|  | [optional] 
 **captionListComparisonOperator** | [**CaptionListComparisonOperator1**](.md)|  | [optional] 
 **captionList** | [**[String]**](String.md)|  | [optional] 
 **imageStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **imageStr** | [**[String]**](String.md)|  | [optional] 
 **imageListComparisonOperator** | [**ImageListComparisonOperator1**](.md)|  | [optional] 
 **imageList** | [**[String]**](String.md)|  | [optional] 
 **imageHeightFromComparisonOperator** | [**ImageHeightFromComparisonOperator1**](.md)|  | [optional] 
 **imageHeightToComparisonOperator** | [**ImageHeightToComparisonOperator1**](.md)|  | [optional] 
 **imageHeightFrom** | **Number**|  | [optional] 
 **imageHeightTo** | **Number**|  | [optional] 
 **imageHeightListComparisonOperator** | [**ImageHeightListComparisonOperator1**](.md)|  | [optional] 
 **imageHeightList** | [**[Number]**](Number.md)|  | [optional] 
 **imageWidthFromComparisonOperator** | [**ImageWidthFromComparisonOperator1**](.md)|  | [optional] 
 **imageWidthToComparisonOperator** | [**ImageWidthToComparisonOperator1**](.md)|  | [optional] 
 **imageWidthFrom** | **Number**|  | [optional] 
 **imageWidthTo** | **Number**|  | [optional] 
 **imageWidthListComparisonOperator** | [**ImageWidthListComparisonOperator1**](.md)|  | [optional] 
 **imageWidthList** | [**[Number]**](Number.md)|  | [optional] 
 **urlStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **urlStr** | [**[String]**](String.md)|  | [optional] 
 **urlListComparisonOperator** | [**UrlListComparisonOperator1**](.md)|  | [optional] 
 **urlList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotDeckUpdateManyItemListResponseModel**](TarotDeckUpdateManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getManyDecksGet"></a>
# **getManyDecksGet**
> TarotDeckFindManyItemListResponseModel getManyDecksGet(opts)

Get Many

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksTarotApi();
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator(), // IdFromComparisonOperator | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator(), // IdToComparisonOperator | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator(), // IdListComparisonOperator | 
  'idList': [3.4], // [Number] | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator(), // UidListComparisonOperator | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator(), // NameListComparisonOperator | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator(), // DescriptionListComparisonOperator | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator(), // CreatedFromComparisonOperator | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator(), // CreatedToComparisonOperator | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator(), // CreatedListComparisonOperator | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator(), // UpdatedFromComparisonOperator | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator(), // UpdatedToComparisonOperator | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator(), // UpdatedListComparisonOperator | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'createdCardsListComparisonOperator': new FastApi.CreatedCardsListComparisonOperator(), // CreatedCardsListComparisonOperator | 
  'createdCardsList': [true], // [Boolean] | 
  'intentionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'intentionStr': ["intentionStr_example"], // [String] | 
  'intentionListComparisonOperator': new FastApi.IntentionListComparisonOperator(), // IntentionListComparisonOperator | 
  'intentionList': ["intentionList_example"], // [String] | 
  'altStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'altStr': ["altStr_example"], // [String] | 
  'altListComparisonOperator': new FastApi.AltListComparisonOperator(), // AltListComparisonOperator | 
  'altList': ["altList_example"], // [String] | 
  'captionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'captionStr': ["captionStr_example"], // [String] | 
  'captionListComparisonOperator': new FastApi.CaptionListComparisonOperator(), // CaptionListComparisonOperator | 
  'captionList': ["captionList_example"], // [String] | 
  'imageStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'imageStr': ["imageStr_example"], // [String] | 
  'imageListComparisonOperator': new FastApi.ImageListComparisonOperator(), // ImageListComparisonOperator | 
  'imageList': ["imageList_example"], // [String] | 
  'imageHeightFromComparisonOperator': new FastApi.ImageHeightFromComparisonOperator(), // ImageHeightFromComparisonOperator | 
  'imageHeightToComparisonOperator': new FastApi.ImageHeightToComparisonOperator(), // ImageHeightToComparisonOperator | 
  'imageHeightFrom': 56, // Number | 
  'imageHeightTo': 56, // Number | 
  'imageHeightListComparisonOperator': new FastApi.ImageHeightListComparisonOperator(), // ImageHeightListComparisonOperator | 
  'imageHeightList': [3.4], // [Number] | 
  'imageWidthFromComparisonOperator': new FastApi.ImageWidthFromComparisonOperator(), // ImageWidthFromComparisonOperator | 
  'imageWidthToComparisonOperator': new FastApi.ImageWidthToComparisonOperator(), // ImageWidthToComparisonOperator | 
  'imageWidthFrom': 56, // Number | 
  'imageWidthTo': 56, // Number | 
  'imageWidthListComparisonOperator': new FastApi.ImageWidthListComparisonOperator(), // ImageWidthListComparisonOperator | 
  'imageWidthList': [3.4], // [Number] | 
  'urlStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'urlStr': ["urlStr_example"], // [String] | 
  'urlListComparisonOperator': new FastApi.UrlListComparisonOperator(), // UrlListComparisonOperator | 
  'urlList': ["urlList_example"], // [String] | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'orderByColumns': ["orderByColumns_example"] // [String] | <br> support column:              <br> ['id', 'uid', 'name', 'description', 'created', 'updated', 'created_cards', 'intention', 'alt', 'caption', 'image', 'image_height', 'image_width', 'url'] <hr><br> support ordering:               <br> ['DESC', 'ASC']              <hr>              <br/>example:              <br/>&emsp;&emsp;any name of column:ASC             <br/>&emsp;&emsp;any name of column: DESC              <br/>&emsp;&emsp;any name of column    :    DESC             <br/>&emsp;&emsp;any name of column (default sort by ASC)
};
apiInstance.getManyDecksGet(opts, (error, data, response) => {
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
 **idFromComparisonOperator** | [**IdFromComparisonOperator**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **createdCardsListComparisonOperator** | [**CreatedCardsListComparisonOperator**](.md)|  | [optional] 
 **createdCardsList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **intentionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **intentionStr** | [**[String]**](String.md)|  | [optional] 
 **intentionListComparisonOperator** | [**IntentionListComparisonOperator**](.md)|  | [optional] 
 **intentionList** | [**[String]**](String.md)|  | [optional] 
 **altStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **altStr** | [**[String]**](String.md)|  | [optional] 
 **altListComparisonOperator** | [**AltListComparisonOperator**](.md)|  | [optional] 
 **altList** | [**[String]**](String.md)|  | [optional] 
 **captionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **captionStr** | [**[String]**](String.md)|  | [optional] 
 **captionListComparisonOperator** | [**CaptionListComparisonOperator**](.md)|  | [optional] 
 **captionList** | [**[String]**](String.md)|  | [optional] 
 **imageStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **imageStr** | [**[String]**](String.md)|  | [optional] 
 **imageListComparisonOperator** | [**ImageListComparisonOperator**](.md)|  | [optional] 
 **imageList** | [**[String]**](String.md)|  | [optional] 
 **imageHeightFromComparisonOperator** | [**ImageHeightFromComparisonOperator**](.md)|  | [optional] 
 **imageHeightToComparisonOperator** | [**ImageHeightToComparisonOperator**](.md)|  | [optional] 
 **imageHeightFrom** | **Number**|  | [optional] 
 **imageHeightTo** | **Number**|  | [optional] 
 **imageHeightListComparisonOperator** | [**ImageHeightListComparisonOperator**](.md)|  | [optional] 
 **imageHeightList** | [**[Number]**](Number.md)|  | [optional] 
 **imageWidthFromComparisonOperator** | [**ImageWidthFromComparisonOperator**](.md)|  | [optional] 
 **imageWidthToComparisonOperator** | [**ImageWidthToComparisonOperator**](.md)|  | [optional] 
 **imageWidthFrom** | **Number**|  | [optional] 
 **imageWidthTo** | **Number**|  | [optional] 
 **imageWidthListComparisonOperator** | [**ImageWidthListComparisonOperator**](.md)|  | [optional] 
 **imageWidthList** | [**[Number]**](Number.md)|  | [optional] 
 **urlStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **urlStr** | [**[String]**](String.md)|  | [optional] 
 **urlListComparisonOperator** | [**UrlListComparisonOperator**](.md)|  | [optional] 
 **urlList** | [**[String]**](String.md)|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **orderByColumns** | [**[String]**](String.md)| &lt;br&gt; support column:              &lt;br&gt; [&#x27;id&#x27;, &#x27;uid&#x27;, &#x27;name&#x27;, &#x27;description&#x27;, &#x27;created&#x27;, &#x27;updated&#x27;, &#x27;created_cards&#x27;, &#x27;intention&#x27;, &#x27;alt&#x27;, &#x27;caption&#x27;, &#x27;image&#x27;, &#x27;image_height&#x27;, &#x27;image_width&#x27;, &#x27;url&#x27;] &lt;hr&gt;&lt;br&gt; support ordering:               &lt;br&gt; [&#x27;DESC&#x27;, &#x27;ASC&#x27;]              &lt;hr&gt;              &lt;br/&gt;example:              &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column:ASC             &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column: DESC              &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column    :    DESC             &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column (default sort by ASC) | [optional] 

### Return type

[**TarotDeckFindManyItemListResponseModel**](TarotDeckFindManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneByPrimaryKeyDecksIdGet"></a>
# **getOneByPrimaryKeyDecksIdGet**
> TarotDeckFindOneResponseModel getOneByPrimaryKeyDecksIdGet(id, opts)

Get One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksTarotApi();
let id = 56; // Number | 
let opts = { 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator4(), // UidListComparisonOperator4 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator4(), // NameListComparisonOperator4 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator4(), // DescriptionListComparisonOperator4 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator4(), // CreatedFromComparisonOperator4 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator4(), // CreatedToComparisonOperator4 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator4(), // CreatedListComparisonOperator4 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator4(), // UpdatedFromComparisonOperator4 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator4(), // UpdatedToComparisonOperator4 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator4(), // UpdatedListComparisonOperator4 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'createdCardsListComparisonOperator': new FastApi.CreatedCardsListComparisonOperator4(), // CreatedCardsListComparisonOperator4 | 
  'createdCardsList': [true], // [Boolean] | 
  'intentionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'intentionStr': ["intentionStr_example"], // [String] | 
  'intentionListComparisonOperator': new FastApi.IntentionListComparisonOperator4(), // IntentionListComparisonOperator4 | 
  'intentionList': ["intentionList_example"], // [String] | 
  'altStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'altStr': ["altStr_example"], // [String] | 
  'altListComparisonOperator': new FastApi.AltListComparisonOperator4(), // AltListComparisonOperator4 | 
  'altList': ["altList_example"], // [String] | 
  'captionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'captionStr': ["captionStr_example"], // [String] | 
  'captionListComparisonOperator': new FastApi.CaptionListComparisonOperator4(), // CaptionListComparisonOperator4 | 
  'captionList': ["captionList_example"], // [String] | 
  'imageStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'imageStr': ["imageStr_example"], // [String] | 
  'imageListComparisonOperator': new FastApi.ImageListComparisonOperator4(), // ImageListComparisonOperator4 | 
  'imageList': ["imageList_example"], // [String] | 
  'imageHeightFromComparisonOperator': new FastApi.ImageHeightFromComparisonOperator4(), // ImageHeightFromComparisonOperator4 | 
  'imageHeightToComparisonOperator': new FastApi.ImageHeightToComparisonOperator4(), // ImageHeightToComparisonOperator4 | 
  'imageHeightFrom': 56, // Number | 
  'imageHeightTo': 56, // Number | 
  'imageHeightListComparisonOperator': new FastApi.ImageHeightListComparisonOperator4(), // ImageHeightListComparisonOperator4 | 
  'imageHeightList': [3.4], // [Number] | 
  'imageWidthFromComparisonOperator': new FastApi.ImageWidthFromComparisonOperator4(), // ImageWidthFromComparisonOperator4 | 
  'imageWidthToComparisonOperator': new FastApi.ImageWidthToComparisonOperator4(), // ImageWidthToComparisonOperator4 | 
  'imageWidthFrom': 56, // Number | 
  'imageWidthTo': 56, // Number | 
  'imageWidthListComparisonOperator': new FastApi.ImageWidthListComparisonOperator4(), // ImageWidthListComparisonOperator4 | 
  'imageWidthList': [3.4], // [Number] | 
  'urlStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'urlStr': ["urlStr_example"], // [String] | 
  'urlListComparisonOperator': new FastApi.UrlListComparisonOperator4(), // UrlListComparisonOperator4 | 
  'urlList': ["urlList_example"] // [String] | 
};
apiInstance.getOneByPrimaryKeyDecksIdGet(id, opts, (error, data, response) => {
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
 **uidListComparisonOperator** | [**UidListComparisonOperator4**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator4**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator4**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator4**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator4**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator4**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator4**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator4**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator4**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **createdCardsListComparisonOperator** | [**CreatedCardsListComparisonOperator4**](.md)|  | [optional] 
 **createdCardsList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **intentionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **intentionStr** | [**[String]**](String.md)|  | [optional] 
 **intentionListComparisonOperator** | [**IntentionListComparisonOperator4**](.md)|  | [optional] 
 **intentionList** | [**[String]**](String.md)|  | [optional] 
 **altStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **altStr** | [**[String]**](String.md)|  | [optional] 
 **altListComparisonOperator** | [**AltListComparisonOperator4**](.md)|  | [optional] 
 **altList** | [**[String]**](String.md)|  | [optional] 
 **captionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **captionStr** | [**[String]**](String.md)|  | [optional] 
 **captionListComparisonOperator** | [**CaptionListComparisonOperator4**](.md)|  | [optional] 
 **captionList** | [**[String]**](String.md)|  | [optional] 
 **imageStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **imageStr** | [**[String]**](String.md)|  | [optional] 
 **imageListComparisonOperator** | [**ImageListComparisonOperator4**](.md)|  | [optional] 
 **imageList** | [**[String]**](String.md)|  | [optional] 
 **imageHeightFromComparisonOperator** | [**ImageHeightFromComparisonOperator4**](.md)|  | [optional] 
 **imageHeightToComparisonOperator** | [**ImageHeightToComparisonOperator4**](.md)|  | [optional] 
 **imageHeightFrom** | **Number**|  | [optional] 
 **imageHeightTo** | **Number**|  | [optional] 
 **imageHeightListComparisonOperator** | [**ImageHeightListComparisonOperator4**](.md)|  | [optional] 
 **imageHeightList** | [**[Number]**](Number.md)|  | [optional] 
 **imageWidthFromComparisonOperator** | [**ImageWidthFromComparisonOperator4**](.md)|  | [optional] 
 **imageWidthToComparisonOperator** | [**ImageWidthToComparisonOperator4**](.md)|  | [optional] 
 **imageWidthFrom** | **Number**|  | [optional] 
 **imageWidthTo** | **Number**|  | [optional] 
 **imageWidthListComparisonOperator** | [**ImageWidthListComparisonOperator4**](.md)|  | [optional] 
 **imageWidthList** | [**[Number]**](Number.md)|  | [optional] 
 **urlStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **urlStr** | [**[String]**](String.md)|  | [optional] 
 **urlListComparisonOperator** | [**UrlListComparisonOperator4**](.md)|  | [optional] 
 **urlList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotDeckFindOneResponseModel**](TarotDeckFindOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="insertManyDecksPost"></a>
# **insertManyDecksPost**
> TarotDeckCreateManyItemListResponseModel insertManyDecksPost(body)

Insert Many

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksTarotApi();
let body = [new FastApi.TarotDeckCreateManyItemRequestModel()]; // [TarotDeckCreateManyItemRequestModel] | 

apiInstance.insertManyDecksPost(body, (error, data, response) => {
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
 **body** | [**[TarotDeckCreateManyItemRequestModel]**](TarotDeckCreateManyItemRequestModel.md)|  | 

### Return type

[**TarotDeckCreateManyItemListResponseModel**](TarotDeckCreateManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partialUpdateManyByQueryDecksPatch"></a>
# **partialUpdateManyByQueryDecksPatch**
> TarotDeckPatchManyItemListResponseModel partialUpdateManyByQueryDecksPatch(opts)

Partial Update Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksTarotApi();
let opts = { 
  'body': new FastApi.BodyPartialUpdateManyByQueryDecksPatch(), // BodyPartialUpdateManyByQueryDecksPatch | 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator3(), // IdFromComparisonOperator3 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator3(), // IdToComparisonOperator3 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator3(), // IdListComparisonOperator3 | 
  'idList': [3.4], // [Number] | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator3(), // UidListComparisonOperator3 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator3(), // NameListComparisonOperator3 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator3(), // DescriptionListComparisonOperator3 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator3(), // CreatedFromComparisonOperator3 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator3(), // CreatedToComparisonOperator3 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator3(), // CreatedListComparisonOperator3 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator3(), // UpdatedFromComparisonOperator3 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator3(), // UpdatedToComparisonOperator3 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator3(), // UpdatedListComparisonOperator3 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'createdCardsListComparisonOperator': new FastApi.CreatedCardsListComparisonOperator3(), // CreatedCardsListComparisonOperator3 | 
  'createdCardsList': [true], // [Boolean] | 
  'intentionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'intentionStr': ["intentionStr_example"], // [String] | 
  'intentionListComparisonOperator': new FastApi.IntentionListComparisonOperator3(), // IntentionListComparisonOperator3 | 
  'intentionList': ["intentionList_example"], // [String] | 
  'altStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'altStr': ["altStr_example"], // [String] | 
  'altListComparisonOperator': new FastApi.AltListComparisonOperator3(), // AltListComparisonOperator3 | 
  'altList': ["altList_example"], // [String] | 
  'captionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'captionStr': ["captionStr_example"], // [String] | 
  'captionListComparisonOperator': new FastApi.CaptionListComparisonOperator3(), // CaptionListComparisonOperator3 | 
  'captionList': ["captionList_example"], // [String] | 
  'imageStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'imageStr': ["imageStr_example"], // [String] | 
  'imageListComparisonOperator': new FastApi.ImageListComparisonOperator3(), // ImageListComparisonOperator3 | 
  'imageList': ["imageList_example"], // [String] | 
  'imageHeightFromComparisonOperator': new FastApi.ImageHeightFromComparisonOperator3(), // ImageHeightFromComparisonOperator3 | 
  'imageHeightToComparisonOperator': new FastApi.ImageHeightToComparisonOperator3(), // ImageHeightToComparisonOperator3 | 
  'imageHeightFrom': 56, // Number | 
  'imageHeightTo': 56, // Number | 
  'imageHeightListComparisonOperator': new FastApi.ImageHeightListComparisonOperator3(), // ImageHeightListComparisonOperator3 | 
  'imageHeightList': [3.4], // [Number] | 
  'imageWidthFromComparisonOperator': new FastApi.ImageWidthFromComparisonOperator3(), // ImageWidthFromComparisonOperator3 | 
  'imageWidthToComparisonOperator': new FastApi.ImageWidthToComparisonOperator3(), // ImageWidthToComparisonOperator3 | 
  'imageWidthFrom': 56, // Number | 
  'imageWidthTo': 56, // Number | 
  'imageWidthListComparisonOperator': new FastApi.ImageWidthListComparisonOperator3(), // ImageWidthListComparisonOperator3 | 
  'imageWidthList': [3.4], // [Number] | 
  'urlStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'urlStr': ["urlStr_example"], // [String] | 
  'urlListComparisonOperator': new FastApi.UrlListComparisonOperator3(), // UrlListComparisonOperator3 | 
  'urlList': ["urlList_example"] // [String] | 
};
apiInstance.partialUpdateManyByQueryDecksPatch(opts, (error, data, response) => {
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
 **body** | [**BodyPartialUpdateManyByQueryDecksPatch**](BodyPartialUpdateManyByQueryDecksPatch.md)|  | [optional] 
 **idFromComparisonOperator** | [**IdFromComparisonOperator3**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator3**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator3**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator3**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator3**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator3**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator3**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator3**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator3**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator3**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator3**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator3**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **createdCardsListComparisonOperator** | [**CreatedCardsListComparisonOperator3**](.md)|  | [optional] 
 **createdCardsList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **intentionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **intentionStr** | [**[String]**](String.md)|  | [optional] 
 **intentionListComparisonOperator** | [**IntentionListComparisonOperator3**](.md)|  | [optional] 
 **intentionList** | [**[String]**](String.md)|  | [optional] 
 **altStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **altStr** | [**[String]**](String.md)|  | [optional] 
 **altListComparisonOperator** | [**AltListComparisonOperator3**](.md)|  | [optional] 
 **altList** | [**[String]**](String.md)|  | [optional] 
 **captionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **captionStr** | [**[String]**](String.md)|  | [optional] 
 **captionListComparisonOperator** | [**CaptionListComparisonOperator3**](.md)|  | [optional] 
 **captionList** | [**[String]**](String.md)|  | [optional] 
 **imageStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **imageStr** | [**[String]**](String.md)|  | [optional] 
 **imageListComparisonOperator** | [**ImageListComparisonOperator3**](.md)|  | [optional] 
 **imageList** | [**[String]**](String.md)|  | [optional] 
 **imageHeightFromComparisonOperator** | [**ImageHeightFromComparisonOperator3**](.md)|  | [optional] 
 **imageHeightToComparisonOperator** | [**ImageHeightToComparisonOperator3**](.md)|  | [optional] 
 **imageHeightFrom** | **Number**|  | [optional] 
 **imageHeightTo** | **Number**|  | [optional] 
 **imageHeightListComparisonOperator** | [**ImageHeightListComparisonOperator3**](.md)|  | [optional] 
 **imageHeightList** | [**[Number]**](Number.md)|  | [optional] 
 **imageWidthFromComparisonOperator** | [**ImageWidthFromComparisonOperator3**](.md)|  | [optional] 
 **imageWidthToComparisonOperator** | [**ImageWidthToComparisonOperator3**](.md)|  | [optional] 
 **imageWidthFrom** | **Number**|  | [optional] 
 **imageWidthTo** | **Number**|  | [optional] 
 **imageWidthListComparisonOperator** | [**ImageWidthListComparisonOperator3**](.md)|  | [optional] 
 **imageWidthList** | [**[Number]**](Number.md)|  | [optional] 
 **urlStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **urlStr** | [**[String]**](String.md)|  | [optional] 
 **urlListComparisonOperator** | [**UrlListComparisonOperator3**](.md)|  | [optional] 
 **urlList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotDeckPatchManyItemListResponseModel**](TarotDeckPatchManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partialUpdateOneByPrimaryKeyDecksIdPatch"></a>
# **partialUpdateOneByPrimaryKeyDecksIdPatch**
> TarotDeckPatchOneResponseModel partialUpdateOneByPrimaryKeyDecksIdPatch(id, opts)

Partial Update One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.DecksTarotApi();
let id = 56; // Number | 
let opts = { 
  'body': new FastApi.BodyPartialUpdateOneByPrimaryKeyDecksIdPatch(), // BodyPartialUpdateOneByPrimaryKeyDecksIdPatch | 
  'uidStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'uidStr': ["uidStr_example"], // [String] | 
  'uidListComparisonOperator': new FastApi.UidListComparisonOperator7(), // UidListComparisonOperator7 | 
  'uidList': ["uidList_example"], // [String] | 
  'nameStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'nameStr': ["nameStr_example"], // [String] | 
  'nameListComparisonOperator': new FastApi.NameListComparisonOperator7(), // NameListComparisonOperator7 | 
  'nameList': ["nameList_example"], // [String] | 
  'descriptionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'descriptionStr': ["descriptionStr_example"], // [String] | 
  'descriptionListComparisonOperator': new FastApi.DescriptionListComparisonOperator7(), // DescriptionListComparisonOperator7 | 
  'descriptionList': ["descriptionList_example"], // [String] | 
  'createdFromComparisonOperator': new FastApi.CreatedFromComparisonOperator7(), // CreatedFromComparisonOperator7 | 
  'createdToComparisonOperator': new FastApi.CreatedToComparisonOperator7(), // CreatedToComparisonOperator7 | 
  'createdFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'createdListComparisonOperator': new FastApi.CreatedListComparisonOperator7(), // CreatedListComparisonOperator7 | 
  'createdList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'updatedFromComparisonOperator': new FastApi.UpdatedFromComparisonOperator7(), // UpdatedFromComparisonOperator7 | 
  'updatedToComparisonOperator': new FastApi.UpdatedToComparisonOperator7(), // UpdatedToComparisonOperator7 | 
  'updatedFrom': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedTo': new Date("2013-10-20T19:20:30+01:00"), // Date | 
  'updatedListComparisonOperator': new FastApi.UpdatedListComparisonOperator7(), // UpdatedListComparisonOperator7 | 
  'updatedList': [new Date("2013-10-20T19:20:30+01:00")], // [Date] | 
  'createdCardsListComparisonOperator': new FastApi.CreatedCardsListComparisonOperator7(), // CreatedCardsListComparisonOperator7 | 
  'createdCardsList': [true], // [Boolean] | 
  'intentionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'intentionStr': ["intentionStr_example"], // [String] | 
  'intentionListComparisonOperator': new FastApi.IntentionListComparisonOperator7(), // IntentionListComparisonOperator7 | 
  'intentionList': ["intentionList_example"], // [String] | 
  'altStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'altStr': ["altStr_example"], // [String] | 
  'altListComparisonOperator': new FastApi.AltListComparisonOperator7(), // AltListComparisonOperator7 | 
  'altList': ["altList_example"], // [String] | 
  'captionStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'captionStr': ["captionStr_example"], // [String] | 
  'captionListComparisonOperator': new FastApi.CaptionListComparisonOperator7(), // CaptionListComparisonOperator7 | 
  'captionList': ["captionList_example"], // [String] | 
  'imageStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'imageStr': ["imageStr_example"], // [String] | 
  'imageListComparisonOperator': new FastApi.ImageListComparisonOperator7(), // ImageListComparisonOperator7 | 
  'imageList': ["imageList_example"], // [String] | 
  'imageHeightFromComparisonOperator': new FastApi.ImageHeightFromComparisonOperator7(), // ImageHeightFromComparisonOperator7 | 
  'imageHeightToComparisonOperator': new FastApi.ImageHeightToComparisonOperator7(), // ImageHeightToComparisonOperator7 | 
  'imageHeightFrom': 56, // Number | 
  'imageHeightTo': 56, // Number | 
  'imageHeightListComparisonOperator': new FastApi.ImageHeightListComparisonOperator7(), // ImageHeightListComparisonOperator7 | 
  'imageHeightList': [3.4], // [Number] | 
  'imageWidthFromComparisonOperator': new FastApi.ImageWidthFromComparisonOperator7(), // ImageWidthFromComparisonOperator7 | 
  'imageWidthToComparisonOperator': new FastApi.ImageWidthToComparisonOperator7(), // ImageWidthToComparisonOperator7 | 
  'imageWidthFrom': 56, // Number | 
  'imageWidthTo': 56, // Number | 
  'imageWidthListComparisonOperator': new FastApi.ImageWidthListComparisonOperator7(), // ImageWidthListComparisonOperator7 | 
  'imageWidthList': [3.4], // [Number] | 
  'urlStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'urlStr': ["urlStr_example"], // [String] | 
  'urlListComparisonOperator': new FastApi.UrlListComparisonOperator7(), // UrlListComparisonOperator7 | 
  'urlList': ["urlList_example"] // [String] | 
};
apiInstance.partialUpdateOneByPrimaryKeyDecksIdPatch(id, opts, (error, data, response) => {
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
 **body** | [**BodyPartialUpdateOneByPrimaryKeyDecksIdPatch**](BodyPartialUpdateOneByPrimaryKeyDecksIdPatch.md)|  | [optional] 
 **uidStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **uidStr** | [**[String]**](String.md)|  | [optional] 
 **uidListComparisonOperator** | [**UidListComparisonOperator7**](.md)|  | [optional] 
 **uidList** | [**[String]**](String.md)|  | [optional] 
 **nameStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **nameStr** | [**[String]**](String.md)|  | [optional] 
 **nameListComparisonOperator** | [**NameListComparisonOperator7**](.md)|  | [optional] 
 **nameList** | [**[String]**](String.md)|  | [optional] 
 **descriptionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **descriptionStr** | [**[String]**](String.md)|  | [optional] 
 **descriptionListComparisonOperator** | [**DescriptionListComparisonOperator7**](.md)|  | [optional] 
 **descriptionList** | [**[String]**](String.md)|  | [optional] 
 **createdFromComparisonOperator** | [**CreatedFromComparisonOperator7**](.md)|  | [optional] 
 **createdToComparisonOperator** | [**CreatedToComparisonOperator7**](.md)|  | [optional] 
 **createdFrom** | **Date**|  | [optional] 
 **createdTo** | **Date**|  | [optional] 
 **createdListComparisonOperator** | [**CreatedListComparisonOperator7**](.md)|  | [optional] 
 **createdList** | [**[Date]**](Date.md)|  | [optional] 
 **updatedFromComparisonOperator** | [**UpdatedFromComparisonOperator7**](.md)|  | [optional] 
 **updatedToComparisonOperator** | [**UpdatedToComparisonOperator7**](.md)|  | [optional] 
 **updatedFrom** | **Date**|  | [optional] 
 **updatedTo** | **Date**|  | [optional] 
 **updatedListComparisonOperator** | [**UpdatedListComparisonOperator7**](.md)|  | [optional] 
 **updatedList** | [**[Date]**](Date.md)|  | [optional] 
 **createdCardsListComparisonOperator** | [**CreatedCardsListComparisonOperator7**](.md)|  | [optional] 
 **createdCardsList** | [**[Boolean]**](Boolean.md)|  | [optional] 
 **intentionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **intentionStr** | [**[String]**](String.md)|  | [optional] 
 **intentionListComparisonOperator** | [**IntentionListComparisonOperator7**](.md)|  | [optional] 
 **intentionList** | [**[String]**](String.md)|  | [optional] 
 **altStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **altStr** | [**[String]**](String.md)|  | [optional] 
 **altListComparisonOperator** | [**AltListComparisonOperator7**](.md)|  | [optional] 
 **altList** | [**[String]**](String.md)|  | [optional] 
 **captionStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **captionStr** | [**[String]**](String.md)|  | [optional] 
 **captionListComparisonOperator** | [**CaptionListComparisonOperator7**](.md)|  | [optional] 
 **captionList** | [**[String]**](String.md)|  | [optional] 
 **imageStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **imageStr** | [**[String]**](String.md)|  | [optional] 
 **imageListComparisonOperator** | [**ImageListComparisonOperator7**](.md)|  | [optional] 
 **imageList** | [**[String]**](String.md)|  | [optional] 
 **imageHeightFromComparisonOperator** | [**ImageHeightFromComparisonOperator7**](.md)|  | [optional] 
 **imageHeightToComparisonOperator** | [**ImageHeightToComparisonOperator7**](.md)|  | [optional] 
 **imageHeightFrom** | **Number**|  | [optional] 
 **imageHeightTo** | **Number**|  | [optional] 
 **imageHeightListComparisonOperator** | [**ImageHeightListComparisonOperator7**](.md)|  | [optional] 
 **imageHeightList** | [**[Number]**](Number.md)|  | [optional] 
 **imageWidthFromComparisonOperator** | [**ImageWidthFromComparisonOperator7**](.md)|  | [optional] 
 **imageWidthToComparisonOperator** | [**ImageWidthToComparisonOperator7**](.md)|  | [optional] 
 **imageWidthFrom** | **Number**|  | [optional] 
 **imageWidthTo** | **Number**|  | [optional] 
 **imageWidthListComparisonOperator** | [**ImageWidthListComparisonOperator7**](.md)|  | [optional] 
 **imageWidthList** | [**[Number]**](Number.md)|  | [optional] 
 **urlStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **urlStr** | [**[String]**](String.md)|  | [optional] 
 **urlListComparisonOperator** | [**UrlListComparisonOperator7**](.md)|  | [optional] 
 **urlList** | [**[String]**](String.md)|  | [optional] 

### Return type

[**TarotDeckPatchOneResponseModel**](TarotDeckPatchOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

