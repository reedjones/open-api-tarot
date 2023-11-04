# FastApi.ShopApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteManyByQueryProductsDelete**](ShopApi.md#deleteManyByQueryProductsDelete) | **DELETE** /products | Delete Many By Query
[**deleteOneByPrimaryKeyProductsIdDelete**](ShopApi.md#deleteOneByPrimaryKeyProductsIdDelete) | **DELETE** /products/{id} | Delete One By Primary Key
[**entireUpdateByPrimaryKeyProductsIdPut**](ShopApi.md#entireUpdateByPrimaryKeyProductsIdPut) | **PUT** /products/{id} | Entire Update By Primary Key
[**entireUpdateManyByQueryProductsPut**](ShopApi.md#entireUpdateManyByQueryProductsPut) | **PUT** /products | Entire Update Many By Query
[**getManyProductsGet**](ShopApi.md#getManyProductsGet) | **GET** /products | Get Many
[**getOneByPrimaryKeyProductsIdGet**](ShopApi.md#getOneByPrimaryKeyProductsIdGet) | **GET** /products/{id} | Get One By Primary Key
[**insertManyProductsPost**](ShopApi.md#insertManyProductsPost) | **POST** /products | Insert Many
[**partialUpdateManyByQueryProductsPatch**](ShopApi.md#partialUpdateManyByQueryProductsPatch) | **PATCH** /products | Partial Update Many By Query
[**partialUpdateOneByPrimaryKeyProductsIdPatch**](ShopApi.md#partialUpdateOneByPrimaryKeyProductsIdPatch) | **PATCH** /products/{id} | Partial Update One By Primary Key

<a name="deleteManyByQueryProductsDelete"></a>
# **deleteManyByQueryProductsDelete**
> TarotProductDeleteManyItemListResponseModel deleteManyByQueryProductsDelete(opts)

Delete Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.ShopApi();
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator14(), // IdFromComparisonOperator14 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator14(), // IdToComparisonOperator14 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator14(), // IdListComparisonOperator14 | 
  'idList': [3.4], // [Number] | 
  'stripeProductStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripeProductStr': ["stripeProductStr_example"], // [String] | 
  'stripeProductListComparisonOperator': new FastApi.StripeProductListComparisonOperator2(), // StripeProductListComparisonOperator2 | 
  'stripeProductList': ["stripeProductList_example"], // [String] | 
  'stripePriceStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripePriceStr': ["stripePriceStr_example"], // [String] | 
  'stripePriceListComparisonOperator': new FastApi.StripePriceListComparisonOperator2(), // StripePriceListComparisonOperator2 | 
  'stripePriceList': ["stripePriceList_example"], // [String] | 
  'displayPriceFromComparisonOperator': new FastApi.DisplayPriceFromComparisonOperator2(), // DisplayPriceFromComparisonOperator2 | 
  'displayPriceToComparisonOperator': new FastApi.DisplayPriceToComparisonOperator2(), // DisplayPriceToComparisonOperator2 | 
  'displayPriceFrom': 1.2, // Number | 
  'displayPriceTo': 1.2, // Number | 
  'displayPriceListComparisonOperator': new FastApi.DisplayPriceListComparisonOperator2(), // DisplayPriceListComparisonOperator2 | 
  'displayPriceList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator10(), // DeckIdFromComparisonOperator10 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator10(), // DeckIdToComparisonOperator10 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator10(), // DeckIdListComparisonOperator10 | 
  'deckIdList': [3.4] // [Number] | 
};
apiInstance.deleteManyByQueryProductsDelete(opts, (error, data, response) => {
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
 **idFromComparisonOperator** | [**IdFromComparisonOperator14**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator14**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator14**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **stripeProductStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripeProductStr** | [**[String]**](String.md)|  | [optional] 
 **stripeProductListComparisonOperator** | [**StripeProductListComparisonOperator2**](.md)|  | [optional] 
 **stripeProductList** | [**[String]**](String.md)|  | [optional] 
 **stripePriceStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripePriceStr** | [**[String]**](String.md)|  | [optional] 
 **stripePriceListComparisonOperator** | [**StripePriceListComparisonOperator2**](.md)|  | [optional] 
 **stripePriceList** | [**[String]**](String.md)|  | [optional] 
 **displayPriceFromComparisonOperator** | [**DisplayPriceFromComparisonOperator2**](.md)|  | [optional] 
 **displayPriceToComparisonOperator** | [**DisplayPriceToComparisonOperator2**](.md)|  | [optional] 
 **displayPriceFrom** | **Number**|  | [optional] 
 **displayPriceTo** | **Number**|  | [optional] 
 **displayPriceListComparisonOperator** | [**DisplayPriceListComparisonOperator2**](.md)|  | [optional] 
 **displayPriceList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator10**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator10**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator10**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotProductDeleteManyItemListResponseModel**](TarotProductDeleteManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteOneByPrimaryKeyProductsIdDelete"></a>
# **deleteOneByPrimaryKeyProductsIdDelete**
> TarotProductDeleteOneResponseModel deleteOneByPrimaryKeyProductsIdDelete(id, opts)

Delete One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.ShopApi();
let id = 56; // Number | 
let opts = { 
  'stripeProductStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripeProductStr': ["stripeProductStr_example"], // [String] | 
  'stripeProductListComparisonOperator': new FastApi.StripeProductListComparisonOperator6(), // StripeProductListComparisonOperator6 | 
  'stripeProductList': ["stripeProductList_example"], // [String] | 
  'stripePriceStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripePriceStr': ["stripePriceStr_example"], // [String] | 
  'stripePriceListComparisonOperator': new FastApi.StripePriceListComparisonOperator6(), // StripePriceListComparisonOperator6 | 
  'stripePriceList': ["stripePriceList_example"], // [String] | 
  'displayPriceFromComparisonOperator': new FastApi.DisplayPriceFromComparisonOperator6(), // DisplayPriceFromComparisonOperator6 | 
  'displayPriceToComparisonOperator': new FastApi.DisplayPriceToComparisonOperator6(), // DisplayPriceToComparisonOperator6 | 
  'displayPriceFrom': 1.2, // Number | 
  'displayPriceTo': 1.2, // Number | 
  'displayPriceListComparisonOperator': new FastApi.DisplayPriceListComparisonOperator6(), // DisplayPriceListComparisonOperator6 | 
  'displayPriceList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator14(), // DeckIdFromComparisonOperator14 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator14(), // DeckIdToComparisonOperator14 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator14(), // DeckIdListComparisonOperator14 | 
  'deckIdList': [3.4] // [Number] | 
};
apiInstance.deleteOneByPrimaryKeyProductsIdDelete(id, opts, (error, data, response) => {
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
 **stripeProductStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripeProductStr** | [**[String]**](String.md)|  | [optional] 
 **stripeProductListComparisonOperator** | [**StripeProductListComparisonOperator6**](.md)|  | [optional] 
 **stripeProductList** | [**[String]**](String.md)|  | [optional] 
 **stripePriceStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripePriceStr** | [**[String]**](String.md)|  | [optional] 
 **stripePriceListComparisonOperator** | [**StripePriceListComparisonOperator6**](.md)|  | [optional] 
 **stripePriceList** | [**[String]**](String.md)|  | [optional] 
 **displayPriceFromComparisonOperator** | [**DisplayPriceFromComparisonOperator6**](.md)|  | [optional] 
 **displayPriceToComparisonOperator** | [**DisplayPriceToComparisonOperator6**](.md)|  | [optional] 
 **displayPriceFrom** | **Number**|  | [optional] 
 **displayPriceTo** | **Number**|  | [optional] 
 **displayPriceListComparisonOperator** | [**DisplayPriceListComparisonOperator6**](.md)|  | [optional] 
 **displayPriceList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator14**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator14**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator14**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotProductDeleteOneResponseModel**](TarotProductDeleteOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="entireUpdateByPrimaryKeyProductsIdPut"></a>
# **entireUpdateByPrimaryKeyProductsIdPut**
> TarotProductUpdateOneResponseModel entireUpdateByPrimaryKeyProductsIdPut(body, id, opts)

Entire Update By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.ShopApi();
let body = new FastApi.BodyEntireUpdateByPrimaryKeyProductsIdPut(); // BodyEntireUpdateByPrimaryKeyProductsIdPut | 
let id = 56; // Number | 
let opts = { 
  'stripeProductStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripeProductStr': ["stripeProductStr_example"], // [String] | 
  'stripeProductListComparisonOperator': new FastApi.StripeProductListComparisonOperator5(), // StripeProductListComparisonOperator5 | 
  'stripeProductList': ["stripeProductList_example"], // [String] | 
  'stripePriceStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripePriceStr': ["stripePriceStr_example"], // [String] | 
  'stripePriceListComparisonOperator': new FastApi.StripePriceListComparisonOperator5(), // StripePriceListComparisonOperator5 | 
  'stripePriceList': ["stripePriceList_example"], // [String] | 
  'displayPriceFromComparisonOperator': new FastApi.DisplayPriceFromComparisonOperator5(), // DisplayPriceFromComparisonOperator5 | 
  'displayPriceToComparisonOperator': new FastApi.DisplayPriceToComparisonOperator5(), // DisplayPriceToComparisonOperator5 | 
  'displayPriceFrom': 1.2, // Number | 
  'displayPriceTo': 1.2, // Number | 
  'displayPriceListComparisonOperator': new FastApi.DisplayPriceListComparisonOperator5(), // DisplayPriceListComparisonOperator5 | 
  'displayPriceList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator13(), // DeckIdFromComparisonOperator13 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator13(), // DeckIdToComparisonOperator13 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator13(), // DeckIdListComparisonOperator13 | 
  'deckIdList': [3.4] // [Number] | 
};
apiInstance.entireUpdateByPrimaryKeyProductsIdPut(body, id, opts, (error, data, response) => {
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
 **body** | [**BodyEntireUpdateByPrimaryKeyProductsIdPut**](BodyEntireUpdateByPrimaryKeyProductsIdPut.md)|  | 
 **id** | **Number**|  | 
 **stripeProductStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripeProductStr** | [**[String]**](String.md)|  | [optional] 
 **stripeProductListComparisonOperator** | [**StripeProductListComparisonOperator5**](.md)|  | [optional] 
 **stripeProductList** | [**[String]**](String.md)|  | [optional] 
 **stripePriceStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripePriceStr** | [**[String]**](String.md)|  | [optional] 
 **stripePriceListComparisonOperator** | [**StripePriceListComparisonOperator5**](.md)|  | [optional] 
 **stripePriceList** | [**[String]**](String.md)|  | [optional] 
 **displayPriceFromComparisonOperator** | [**DisplayPriceFromComparisonOperator5**](.md)|  | [optional] 
 **displayPriceToComparisonOperator** | [**DisplayPriceToComparisonOperator5**](.md)|  | [optional] 
 **displayPriceFrom** | **Number**|  | [optional] 
 **displayPriceTo** | **Number**|  | [optional] 
 **displayPriceListComparisonOperator** | [**DisplayPriceListComparisonOperator5**](.md)|  | [optional] 
 **displayPriceList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator13**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator13**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator13**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotProductUpdateOneResponseModel**](TarotProductUpdateOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="entireUpdateManyByQueryProductsPut"></a>
# **entireUpdateManyByQueryProductsPut**
> TarotProductUpdateManyItemListResponseModel entireUpdateManyByQueryProductsPut(body, opts)

Entire Update Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.ShopApi();
let body = new FastApi.BodyEntireUpdateManyByQueryProductsPut(); // BodyEntireUpdateManyByQueryProductsPut | 
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator13(), // IdFromComparisonOperator13 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator13(), // IdToComparisonOperator13 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator13(), // IdListComparisonOperator13 | 
  'idList': [3.4], // [Number] | 
  'stripeProductStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripeProductStr': ["stripeProductStr_example"], // [String] | 
  'stripeProductListComparisonOperator': new FastApi.StripeProductListComparisonOperator1(), // StripeProductListComparisonOperator1 | 
  'stripeProductList': ["stripeProductList_example"], // [String] | 
  'stripePriceStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripePriceStr': ["stripePriceStr_example"], // [String] | 
  'stripePriceListComparisonOperator': new FastApi.StripePriceListComparisonOperator1(), // StripePriceListComparisonOperator1 | 
  'stripePriceList': ["stripePriceList_example"], // [String] | 
  'displayPriceFromComparisonOperator': new FastApi.DisplayPriceFromComparisonOperator1(), // DisplayPriceFromComparisonOperator1 | 
  'displayPriceToComparisonOperator': new FastApi.DisplayPriceToComparisonOperator1(), // DisplayPriceToComparisonOperator1 | 
  'displayPriceFrom': 1.2, // Number | 
  'displayPriceTo': 1.2, // Number | 
  'displayPriceListComparisonOperator': new FastApi.DisplayPriceListComparisonOperator1(), // DisplayPriceListComparisonOperator1 | 
  'displayPriceList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator9(), // DeckIdFromComparisonOperator9 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator9(), // DeckIdToComparisonOperator9 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator9(), // DeckIdListComparisonOperator9 | 
  'deckIdList': [3.4] // [Number] | 
};
apiInstance.entireUpdateManyByQueryProductsPut(body, opts, (error, data, response) => {
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
 **body** | [**BodyEntireUpdateManyByQueryProductsPut**](BodyEntireUpdateManyByQueryProductsPut.md)|  | 
 **idFromComparisonOperator** | [**IdFromComparisonOperator13**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator13**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator13**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **stripeProductStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripeProductStr** | [**[String]**](String.md)|  | [optional] 
 **stripeProductListComparisonOperator** | [**StripeProductListComparisonOperator1**](.md)|  | [optional] 
 **stripeProductList** | [**[String]**](String.md)|  | [optional] 
 **stripePriceStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripePriceStr** | [**[String]**](String.md)|  | [optional] 
 **stripePriceListComparisonOperator** | [**StripePriceListComparisonOperator1**](.md)|  | [optional] 
 **stripePriceList** | [**[String]**](String.md)|  | [optional] 
 **displayPriceFromComparisonOperator** | [**DisplayPriceFromComparisonOperator1**](.md)|  | [optional] 
 **displayPriceToComparisonOperator** | [**DisplayPriceToComparisonOperator1**](.md)|  | [optional] 
 **displayPriceFrom** | **Number**|  | [optional] 
 **displayPriceTo** | **Number**|  | [optional] 
 **displayPriceListComparisonOperator** | [**DisplayPriceListComparisonOperator1**](.md)|  | [optional] 
 **displayPriceList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator9**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator9**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator9**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotProductUpdateManyItemListResponseModel**](TarotProductUpdateManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getManyProductsGet"></a>
# **getManyProductsGet**
> TarotProductFindManyItemListResponseModel getManyProductsGet(opts)

Get Many

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.ShopApi();
let opts = { 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator12(), // IdFromComparisonOperator12 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator12(), // IdToComparisonOperator12 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator12(), // IdListComparisonOperator12 | 
  'idList': [3.4], // [Number] | 
  'stripeProductStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripeProductStr': ["stripeProductStr_example"], // [String] | 
  'stripeProductListComparisonOperator': new FastApi.StripeProductListComparisonOperator(), // StripeProductListComparisonOperator | 
  'stripeProductList': ["stripeProductList_example"], // [String] | 
  'stripePriceStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripePriceStr': ["stripePriceStr_example"], // [String] | 
  'stripePriceListComparisonOperator': new FastApi.StripePriceListComparisonOperator(), // StripePriceListComparisonOperator | 
  'stripePriceList': ["stripePriceList_example"], // [String] | 
  'displayPriceFromComparisonOperator': new FastApi.DisplayPriceFromComparisonOperator(), // DisplayPriceFromComparisonOperator | 
  'displayPriceToComparisonOperator': new FastApi.DisplayPriceToComparisonOperator(), // DisplayPriceToComparisonOperator | 
  'displayPriceFrom': 1.2, // Number | 
  'displayPriceTo': 1.2, // Number | 
  'displayPriceListComparisonOperator': new FastApi.DisplayPriceListComparisonOperator(), // DisplayPriceListComparisonOperator | 
  'displayPriceList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator8(), // DeckIdFromComparisonOperator8 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator8(), // DeckIdToComparisonOperator8 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator8(), // DeckIdListComparisonOperator8 | 
  'deckIdList': [3.4], // [Number] | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'orderByColumns': ["orderByColumns_example"] // [String] | <br> support column:              <br> ['id', 'stripe_product', 'stripe_price', 'display_price', 'deck_id'] <hr><br> support ordering:               <br> ['DESC', 'ASC']              <hr>              <br/>example:              <br/>&emsp;&emsp;any name of column:ASC             <br/>&emsp;&emsp;any name of column: DESC              <br/>&emsp;&emsp;any name of column    :    DESC             <br/>&emsp;&emsp;any name of column (default sort by ASC)
};
apiInstance.getManyProductsGet(opts, (error, data, response) => {
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
 **idFromComparisonOperator** | [**IdFromComparisonOperator12**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator12**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator12**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **stripeProductStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripeProductStr** | [**[String]**](String.md)|  | [optional] 
 **stripeProductListComparisonOperator** | [**StripeProductListComparisonOperator**](.md)|  | [optional] 
 **stripeProductList** | [**[String]**](String.md)|  | [optional] 
 **stripePriceStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripePriceStr** | [**[String]**](String.md)|  | [optional] 
 **stripePriceListComparisonOperator** | [**StripePriceListComparisonOperator**](.md)|  | [optional] 
 **stripePriceList** | [**[String]**](String.md)|  | [optional] 
 **displayPriceFromComparisonOperator** | [**DisplayPriceFromComparisonOperator**](.md)|  | [optional] 
 **displayPriceToComparisonOperator** | [**DisplayPriceToComparisonOperator**](.md)|  | [optional] 
 **displayPriceFrom** | **Number**|  | [optional] 
 **displayPriceTo** | **Number**|  | [optional] 
 **displayPriceListComparisonOperator** | [**DisplayPriceListComparisonOperator**](.md)|  | [optional] 
 **displayPriceList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator8**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator8**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator8**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **orderByColumns** | [**[String]**](String.md)| &lt;br&gt; support column:              &lt;br&gt; [&#x27;id&#x27;, &#x27;stripe_product&#x27;, &#x27;stripe_price&#x27;, &#x27;display_price&#x27;, &#x27;deck_id&#x27;] &lt;hr&gt;&lt;br&gt; support ordering:               &lt;br&gt; [&#x27;DESC&#x27;, &#x27;ASC&#x27;]              &lt;hr&gt;              &lt;br/&gt;example:              &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column:ASC             &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column: DESC              &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column    :    DESC             &lt;br/&gt;&amp;emsp;&amp;emsp;any name of column (default sort by ASC) | [optional] 

### Return type

[**TarotProductFindManyItemListResponseModel**](TarotProductFindManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getOneByPrimaryKeyProductsIdGet"></a>
# **getOneByPrimaryKeyProductsIdGet**
> TarotProductFindOneResponseModel getOneByPrimaryKeyProductsIdGet(id, opts)

Get One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.ShopApi();
let id = 56; // Number | 
let opts = { 
  'stripeProductStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripeProductStr': ["stripeProductStr_example"], // [String] | 
  'stripeProductListComparisonOperator': new FastApi.StripeProductListComparisonOperator4(), // StripeProductListComparisonOperator4 | 
  'stripeProductList': ["stripeProductList_example"], // [String] | 
  'stripePriceStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripePriceStr': ["stripePriceStr_example"], // [String] | 
  'stripePriceListComparisonOperator': new FastApi.StripePriceListComparisonOperator4(), // StripePriceListComparisonOperator4 | 
  'stripePriceList': ["stripePriceList_example"], // [String] | 
  'displayPriceFromComparisonOperator': new FastApi.DisplayPriceFromComparisonOperator4(), // DisplayPriceFromComparisonOperator4 | 
  'displayPriceToComparisonOperator': new FastApi.DisplayPriceToComparisonOperator4(), // DisplayPriceToComparisonOperator4 | 
  'displayPriceFrom': 1.2, // Number | 
  'displayPriceTo': 1.2, // Number | 
  'displayPriceListComparisonOperator': new FastApi.DisplayPriceListComparisonOperator4(), // DisplayPriceListComparisonOperator4 | 
  'displayPriceList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator12(), // DeckIdFromComparisonOperator12 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator12(), // DeckIdToComparisonOperator12 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator12(), // DeckIdListComparisonOperator12 | 
  'deckIdList': [3.4] // [Number] | 
};
apiInstance.getOneByPrimaryKeyProductsIdGet(id, opts, (error, data, response) => {
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
 **stripeProductStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripeProductStr** | [**[String]**](String.md)|  | [optional] 
 **stripeProductListComparisonOperator** | [**StripeProductListComparisonOperator4**](.md)|  | [optional] 
 **stripeProductList** | [**[String]**](String.md)|  | [optional] 
 **stripePriceStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripePriceStr** | [**[String]**](String.md)|  | [optional] 
 **stripePriceListComparisonOperator** | [**StripePriceListComparisonOperator4**](.md)|  | [optional] 
 **stripePriceList** | [**[String]**](String.md)|  | [optional] 
 **displayPriceFromComparisonOperator** | [**DisplayPriceFromComparisonOperator4**](.md)|  | [optional] 
 **displayPriceToComparisonOperator** | [**DisplayPriceToComparisonOperator4**](.md)|  | [optional] 
 **displayPriceFrom** | **Number**|  | [optional] 
 **displayPriceTo** | **Number**|  | [optional] 
 **displayPriceListComparisonOperator** | [**DisplayPriceListComparisonOperator4**](.md)|  | [optional] 
 **displayPriceList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator12**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator12**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator12**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotProductFindOneResponseModel**](TarotProductFindOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="insertManyProductsPost"></a>
# **insertManyProductsPost**
> TarotProductCreateManyItemListResponseModel insertManyProductsPost(body)

Insert Many

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.ShopApi();
let body = [new FastApi.TarotProductCreateManyItemRequestModel()]; // [TarotProductCreateManyItemRequestModel] | 

apiInstance.insertManyProductsPost(body, (error, data, response) => {
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
 **body** | [**[TarotProductCreateManyItemRequestModel]**](TarotProductCreateManyItemRequestModel.md)|  | 

### Return type

[**TarotProductCreateManyItemListResponseModel**](TarotProductCreateManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partialUpdateManyByQueryProductsPatch"></a>
# **partialUpdateManyByQueryProductsPatch**
> TarotProductPatchManyItemListResponseModel partialUpdateManyByQueryProductsPatch(opts)

Partial Update Many By Query

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.ShopApi();
let opts = { 
  'body': new FastApi.BodyPartialUpdateManyByQueryProductsPatch(), // BodyPartialUpdateManyByQueryProductsPatch | 
  'idFromComparisonOperator': new FastApi.IdFromComparisonOperator15(), // IdFromComparisonOperator15 | 
  'idToComparisonOperator': new FastApi.IdToComparisonOperator15(), // IdToComparisonOperator15 | 
  'idFrom': 56, // Number | 
  'idTo': 56, // Number | 
  'idListComparisonOperator': new FastApi.IdListComparisonOperator15(), // IdListComparisonOperator15 | 
  'idList': [3.4], // [Number] | 
  'stripeProductStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripeProductStr': ["stripeProductStr_example"], // [String] | 
  'stripeProductListComparisonOperator': new FastApi.StripeProductListComparisonOperator3(), // StripeProductListComparisonOperator3 | 
  'stripeProductList': ["stripeProductList_example"], // [String] | 
  'stripePriceStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripePriceStr': ["stripePriceStr_example"], // [String] | 
  'stripePriceListComparisonOperator': new FastApi.StripePriceListComparisonOperator3(), // StripePriceListComparisonOperator3 | 
  'stripePriceList': ["stripePriceList_example"], // [String] | 
  'displayPriceFromComparisonOperator': new FastApi.DisplayPriceFromComparisonOperator3(), // DisplayPriceFromComparisonOperator3 | 
  'displayPriceToComparisonOperator': new FastApi.DisplayPriceToComparisonOperator3(), // DisplayPriceToComparisonOperator3 | 
  'displayPriceFrom': 1.2, // Number | 
  'displayPriceTo': 1.2, // Number | 
  'displayPriceListComparisonOperator': new FastApi.DisplayPriceListComparisonOperator3(), // DisplayPriceListComparisonOperator3 | 
  'displayPriceList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator11(), // DeckIdFromComparisonOperator11 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator11(), // DeckIdToComparisonOperator11 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator11(), // DeckIdListComparisonOperator11 | 
  'deckIdList': [3.4] // [Number] | 
};
apiInstance.partialUpdateManyByQueryProductsPatch(opts, (error, data, response) => {
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
 **body** | [**BodyPartialUpdateManyByQueryProductsPatch**](BodyPartialUpdateManyByQueryProductsPatch.md)|  | [optional] 
 **idFromComparisonOperator** | [**IdFromComparisonOperator15**](.md)|  | [optional] 
 **idToComparisonOperator** | [**IdToComparisonOperator15**](.md)|  | [optional] 
 **idFrom** | **Number**|  | [optional] 
 **idTo** | **Number**|  | [optional] 
 **idListComparisonOperator** | [**IdListComparisonOperator15**](.md)|  | [optional] 
 **idList** | [**[Number]**](Number.md)|  | [optional] 
 **stripeProductStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripeProductStr** | [**[String]**](String.md)|  | [optional] 
 **stripeProductListComparisonOperator** | [**StripeProductListComparisonOperator3**](.md)|  | [optional] 
 **stripeProductList** | [**[String]**](String.md)|  | [optional] 
 **stripePriceStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripePriceStr** | [**[String]**](String.md)|  | [optional] 
 **stripePriceListComparisonOperator** | [**StripePriceListComparisonOperator3**](.md)|  | [optional] 
 **stripePriceList** | [**[String]**](String.md)|  | [optional] 
 **displayPriceFromComparisonOperator** | [**DisplayPriceFromComparisonOperator3**](.md)|  | [optional] 
 **displayPriceToComparisonOperator** | [**DisplayPriceToComparisonOperator3**](.md)|  | [optional] 
 **displayPriceFrom** | **Number**|  | [optional] 
 **displayPriceTo** | **Number**|  | [optional] 
 **displayPriceListComparisonOperator** | [**DisplayPriceListComparisonOperator3**](.md)|  | [optional] 
 **displayPriceList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator11**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator11**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator11**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotProductPatchManyItemListResponseModel**](TarotProductPatchManyItemListResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="partialUpdateOneByPrimaryKeyProductsIdPatch"></a>
# **partialUpdateOneByPrimaryKeyProductsIdPatch**
> TarotProductPatchOneResponseModel partialUpdateOneByPrimaryKeyProductsIdPatch(id, opts)

Partial Update One By Primary Key

### Example
```javascript
import {FastApi} from 'fast_api';

let apiInstance = new FastApi.ShopApi();
let id = 56; // Number | 
let opts = { 
  'body': new FastApi.BodyPartialUpdateOneByPrimaryKeyProductsIdPatch(), // BodyPartialUpdateOneByPrimaryKeyProductsIdPatch | 
  'stripeProductStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripeProductStr': ["stripeProductStr_example"], // [String] | 
  'stripeProductListComparisonOperator': new FastApi.StripeProductListComparisonOperator7(), // StripeProductListComparisonOperator7 | 
  'stripeProductList': ["stripeProductList_example"], // [String] | 
  'stripePriceStrMatchingPattern': [new FastApi.MatchingPatternInStringBase()], // [MatchingPatternInStringBase] | 
  'stripePriceStr': ["stripePriceStr_example"], // [String] | 
  'stripePriceListComparisonOperator': new FastApi.StripePriceListComparisonOperator7(), // StripePriceListComparisonOperator7 | 
  'stripePriceList': ["stripePriceList_example"], // [String] | 
  'displayPriceFromComparisonOperator': new FastApi.DisplayPriceFromComparisonOperator7(), // DisplayPriceFromComparisonOperator7 | 
  'displayPriceToComparisonOperator': new FastApi.DisplayPriceToComparisonOperator7(), // DisplayPriceToComparisonOperator7 | 
  'displayPriceFrom': 1.2, // Number | 
  'displayPriceTo': 1.2, // Number | 
  'displayPriceListComparisonOperator': new FastApi.DisplayPriceListComparisonOperator7(), // DisplayPriceListComparisonOperator7 | 
  'displayPriceList': [3.4], // [Number] | 
  'deckIdFromComparisonOperator': new FastApi.DeckIdFromComparisonOperator15(), // DeckIdFromComparisonOperator15 | 
  'deckIdToComparisonOperator': new FastApi.DeckIdToComparisonOperator15(), // DeckIdToComparisonOperator15 | 
  'deckIdFrom': 56, // Number | 
  'deckIdTo': 56, // Number | 
  'deckIdListComparisonOperator': new FastApi.DeckIdListComparisonOperator15(), // DeckIdListComparisonOperator15 | 
  'deckIdList': [3.4] // [Number] | 
};
apiInstance.partialUpdateOneByPrimaryKeyProductsIdPatch(id, opts, (error, data, response) => {
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
 **body** | [**BodyPartialUpdateOneByPrimaryKeyProductsIdPatch**](BodyPartialUpdateOneByPrimaryKeyProductsIdPatch.md)|  | [optional] 
 **stripeProductStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripeProductStr** | [**[String]**](String.md)|  | [optional] 
 **stripeProductListComparisonOperator** | [**StripeProductListComparisonOperator7**](.md)|  | [optional] 
 **stripeProductList** | [**[String]**](String.md)|  | [optional] 
 **stripePriceStrMatchingPattern** | [**[MatchingPatternInStringBase]**](MatchingPatternInStringBase.md)|  | [optional] [default to [&quot;case_sensitive&quot;]]
 **stripePriceStr** | [**[String]**](String.md)|  | [optional] 
 **stripePriceListComparisonOperator** | [**StripePriceListComparisonOperator7**](.md)|  | [optional] 
 **stripePriceList** | [**[String]**](String.md)|  | [optional] 
 **displayPriceFromComparisonOperator** | [**DisplayPriceFromComparisonOperator7**](.md)|  | [optional] 
 **displayPriceToComparisonOperator** | [**DisplayPriceToComparisonOperator7**](.md)|  | [optional] 
 **displayPriceFrom** | **Number**|  | [optional] 
 **displayPriceTo** | **Number**|  | [optional] 
 **displayPriceListComparisonOperator** | [**DisplayPriceListComparisonOperator7**](.md)|  | [optional] 
 **displayPriceList** | [**[Number]**](Number.md)|  | [optional] 
 **deckIdFromComparisonOperator** | [**DeckIdFromComparisonOperator15**](.md)|  | [optional] 
 **deckIdToComparisonOperator** | [**DeckIdToComparisonOperator15**](.md)|  | [optional] 
 **deckIdFrom** | **Number**|  | [optional] 
 **deckIdTo** | **Number**|  | [optional] 
 **deckIdListComparisonOperator** | [**DeckIdListComparisonOperator15**](.md)|  | [optional] 
 **deckIdList** | [**[Number]**](Number.md)|  | [optional] 

### Return type

[**TarotProductPatchOneResponseModel**](TarotProductPatchOneResponseModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

