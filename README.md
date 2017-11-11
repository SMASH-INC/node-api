# Getting started

# Introduction
* ## Multi-use Flexible API for: 
  * **User**:
    * Login 
    * Registration
    * User Management
    * Profile Updates
    * Two Factor Authentication
     
  * **Verifcation**:
    * Identity Verification
    * Address Verifcation
    * Cell Phone Verification 

  * **Image**:
    * Manipulation
    * Compression
    * Moderation
     
  * **Data**:
    * Manipulation
    * Compression
    * Conversion
    * Sorting

  * **Services**:
    * Node Application Hosting
    * DNS Management
    * CDN (Content Delivery Network)

  * **Security**:
    * Encryption
    * Code Obfuscation
    * Platform Identification
    * WAF and DDOS Protection (Web Application Firewall)
      * Advanced Logging

# Overview

*  **API Domain: api.rest.sh, api.restful.sh**

This API supports both GET and POST API requests with a JSON or XML output.

*~ You can post to this API via a direct body response in JSON/XML, or using URL variables/requests.*

# Authentication
Be sure to include your User API KEY, and UID when sending a POST or GET request to our API.

*~ If domain restriction is enabled in your dashboard, please include your domain in the request and redirect headers for your API calls.*

# Status Codes
* ## Success Codes:
  *   **200**: Information Recieved
  *   **201**: Success, Resource Created, or Updated
  *   **202**: Proccessing

* ## Information Codes:
  *   **400**: Bad Request
  *   **401**: Incorrect Credentials
  *   **403**: Forbidden
  *   **406**: Not Acceptable Input
  *   **409**: Data Conflict
  *   **413**: Payload Too Large
  *   **415**: Un-Supported Content Type
  *   **451**: Un-Available For Legal Reasons

* ## Error Codes:
  *   **500**: Internal API Error
  *   **501**: Not Implemented
  *   **503**: API Unavailable
  *   **504**: Request Timeout
  *   **511**: Authentication Required

# Rate Pricing
* **Verification requests:** 
  * per/1000 Requests: **$50.00**

* **User requests:** 
  * per/1000 Requests: **$0.0072**

* **Image requests:** 
  * per/1000 Requests: **$11.87**

* Data requests: 
  * per/1MB: **$0.00024**

* **Service requests:** 
  * **DNS Pricing Per Month:**
    * Per Hosted Zone: **$1.00**
    * Per Traffic Flow Record: **$100.00**
    * Per 1 Million Queries: **$0.80**
    * Per 1 Million Latency Based Queries: **$1.20**
    * Per 1 Million GEO Queries: **$1.40**
    * Per Health Check: **$1.00**

  * **Hosting Per Month:**
    * Per APP: **$5.00**

  * **CDN Pricing per/1GB:**
    * North America: **$0.17**
    * Europe: **$0.17**
    * Australia: **$0.28**
    * Asia: **$0.28**
    * India: **$0.34**
    * South America: **$0.5**

* **Security requests:** 
  * **WAF and DDOS Pricing Per Month:**
    * per/1000 Web Requests: **$0.0012**
    * Per Web Access Control List: **$10.00**
    * Per Custom Domain Configuration: **$2.00**
  
  * **Encryption:**
    * per/1000 data sets: **$0.0144**
    * per/1MB per file: **$0.00048**

  * **Code Obfuscation Per Month:**
    * per/APP (300 files per app): **$102.00**

  * **Code Obfuscation Per Month:**
    * per/APP (300 files per app): **$102.00**

  * **Advanced Logging:**
    * per/1000 Log Entries: **$0.0072**

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=SMASH-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=SMASH-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `SMASH ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=SMASH-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=SMASH-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=SMASH-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=SMASH-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  SMASH - APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=SMASH%20-%20APIController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| uid | Your user ID |
| secret | Your Private API Key |
| key | Your Public API Key |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.uid = "UID"; // Your user ID
lib.Configuration.secret = "SECRET"; // Your Private API Key
lib.Configuration.key = "KEY"; // Your Public API Key

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [AdvancedLogging](#advanced_logging)
* [WAFAndDDOSProtection](#waf_and_ddos_protection)
* [Encryption](#encryption)
* [CDN](#cdn)
* [DNS](#dns)
* [CodeObfuscation](#code_obfuscation)
* [Hosting](#hosting)
* [DataManipulation](#data_manipulation)
* [ImageManipulation](#image_manipulation)
* [Verification](#verification)
* [TwoFactorAuthenticationAPI](#two_factor_authentication_api)
* [UserManagement](#user_management)
* [LoginAndRegistration](#login_and_registration)

## <a name="advanced_logging"></a>![Class: ](https://apidocs.io/img/class.png ".AdvancedLogging") AdvancedLogging

### Get singleton instance

The singleton instance of the ``` AdvancedLogging ``` class can be accessed from the API Client.

```javascript
var controller = lib.AdvancedLogging;
```

### <a name="logging_configuration"></a>![Method: ](https://apidocs.io/img/method.png ".AdvancedLogging.loggingConfiguration") loggingConfiguration

> WAF Log Configuration


```javascript
function loggingConfiguration(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Required ```  | Name of the WAF zone |
| origin |  ``` Required ```  | IP Address of the Web Application you wish to configure logging on |
| activate |  ``` Required ```  | Activate or Disable |



#### Example Usage

```javascript

    var input = [];
        input['name'] = 'name';
        input['origin'] = 'origin';
        input['activate'] = 'activate';

    controller.loggingConfiguration(input, function(error, response, context) {

    
    });
```



### <a name="logging_info"></a>![Method: ](https://apidocs.io/img/method.png ".AdvancedLogging.loggingInfo") loggingInfo

> WAF Log Info


```javascript
function loggingInfo(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Required ```  | Name of your WAF zone |
| origin |  ``` Required ```  | IP Address of the Web Application |
| time |  ``` Optional ```  | Specific times or dates to lookup separated by a comma in MMDDYYHHMMSS Format ( Month Month Day Day Year Year Year Hour Hour Minute Minute Second Second [01/01/0101;24:59:01]) |



#### Example Usage

```javascript

    var input = [];
        input['name'] = 'name';
        input['origin'] = 'origin';
        input['time'] = 'time';

    controller.loggingInfo(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="waf_and_ddos_protection"></a>![Class: ](https://apidocs.io/img/class.png ".WAFAndDDOSProtection") WAFAndDDOSProtection

### Get singleton instance

The singleton instance of the ``` WAFAndDDOSProtection ``` class can be accessed from the API Client.

```javascript
var controller = lib.WAFAndDDOSProtection;
```

### <a name="w_af_configuration"></a>![Method: ](https://apidocs.io/img/method.png ".WAFAndDDOSProtection.wAFConfiguration") wAFConfiguration

> WAF and DDOS Configuration


```javascript
function wAFConfiguration(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| name |  ``` Required ```  | Name of your WAF zone |
| rule |  ``` Required ```  | Rule or rules to add or update separated by a comma |



#### Example Usage

```javascript

    var input = [];
        input['name'] = 'name';
        input['rule'] = 'rule';

    controller.wAFConfiguration(input, function(error, response, context) {

    
    });
```



### <a name="w_af_creation"></a>![Method: ](https://apidocs.io/img/method.png ".WAFAndDDOSProtection.wAFCreation") wAFCreation

> WAF and DDOS Creation


```javascript
function wAFCreation(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| origin |  ``` Required ```  | IP of the Web server you wish to protect |
| cname |  ``` Required ```  | Domain or domain names separated by a comma you wish to allow CNAME access |



#### Example Usage

```javascript

    var input = [];
        input['origin'] = 'origin';
        input['cname'] = 'cname';

    controller.wAFCreation(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="encryption"></a>![Class: ](https://apidocs.io/img/class.png ".Encryption") Encryption

### Get singleton instance

The singleton instance of the ``` Encryption ``` class can be accessed from the API Client.

```javascript
var controller = lib.Encryption;
```

### <a name="data_and_file_encryption"></a>![Method: ](https://apidocs.io/img/method.png ".Encryption.dataAndFileEncryption") dataAndFileEncryption

> Data and File Encryption API


```javascript
function dataAndFileEncryption(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| data |  ``` Required ```  | GIT URL, file URL, direct upload of file, or data as a query string |
| method |  ``` Required ```  | Single or multiple encryption types to apply to data or files separated by a comma (DES, RSA, BLOWFISH, TWOFISH, AES, IDEA, PGP) |
| bit |  ``` Required ```  | Encryption key size (4096) |



#### Example Usage

```javascript

    var input = [];
        input['data'] = 'data';
        input['method'] = 'method';
        input['bit'] = 15;

    controller.dataAndFileEncryption(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="cdn"></a>![Class: ](https://apidocs.io/img/class.png ".CDN") CDN

### Get singleton instance

The singleton instance of the ``` CDN ``` class can be accessed from the API Client.

```javascript
var controller = lib.CDN;
```

### <a name="c_dn_push_zone"></a>![Method: ](https://apidocs.io/img/method.png ".CDN.cDNPushZone") cDNPushZone

> CDN Push Zone API


```javascript
function cDNPushZone(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| cname |  ``` Required ```  | Domain or domain names separated by a comma you wish to allow CNAME access |
| file |  ``` Required ```  | GIT URL, file URL, or direct upload of file |



#### Example Usage

```javascript

    var input = [];
        input['cname'] = 'cname';
        input['file'] = 'file';

    controller.cDNPushZone(input, function(error, response, context) {

    
    });
```



### <a name="c_dn_pull_zone"></a>![Method: ](https://apidocs.io/img/method.png ".CDN.cDNPullZone") cDNPullZone

> CDN Pull Zone API


```javascript
function cDNPullZone(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| origin |  ``` Required ```  | Domain or domain names separated by a comma |
| cname |  ``` Required ```  | Domain or domain names separated by a comma you wish to allow CNAME access |



#### Example Usage

```javascript

    var input = [];
        input['origin'] = 'origin';
        input['cname'] = 'cname';

    controller.cDNPullZone(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="dns"></a>![Class: ](https://apidocs.io/img/class.png ".DNS") DNS

### Get singleton instance

The singleton instance of the ``` DNS ``` class can be accessed from the API Client.

```javascript
var controller = lib.DNS;
```

### <a name="d_ns_configuration"></a>![Method: ](https://apidocs.io/img/method.png ".DNS.dNSConfiguration") dNSConfiguration

> DNS Configuration API


```javascript
function dNSConfiguration(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| domain |  ``` Required ```  | Domain or domain names separated by a comma |
| records |  ``` Required ```  | Records to append to domain separated by a comma (a;www.mydomain.com;127.0.0.0,cname;mydomain.com;otherdomain.com) |



#### Example Usage

```javascript

    var input = [];
        input['domain'] = 'domain';
        input['records'] = 'records';

    controller.dNSConfiguration(input, function(error, response, context) {

    
    });
```



### <a name="d_ns_creation"></a>![Method: ](https://apidocs.io/img/method.png ".DNS.dNSCreation") dNSCreation

> DNS Creation API


```javascript
function dNSCreation(domain, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| domain |  ``` Required ```  | Domain or domain names separated by a comma |



#### Example Usage

```javascript

    var domain = 'domain';

    controller.dNSCreation(domain, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="code_obfuscation"></a>![Class: ](https://apidocs.io/img/class.png ".CodeObfuscation") CodeObfuscation

### Get singleton instance

The singleton instance of the ``` CodeObfuscation ``` class can be accessed from the API Client.

```javascript
var controller = lib.CodeObfuscation;
```

### <a name="obfuscation_and_anti_tampering"></a>![Method: ](https://apidocs.io/img/method.png ".CodeObfuscation.obfuscationAndAntiTampering") obfuscationAndAntiTampering

> Javascript and Node.JS Obfuscation and Anti-Tampering API


```javascript
function obfuscationAndAntiTampering(app, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| app |  ``` Required ```  | GIT URL or ZIP package containing your APP |



#### Example Usage

```javascript

    var app = 'app';

    controller.obfuscationAndAntiTampering(app, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="hosting"></a>![Class: ](https://apidocs.io/img/class.png ".Hosting") Hosting

### Get singleton instance

The singleton instance of the ``` Hosting ``` class can be accessed from the API Client.

```javascript
var controller = lib.Hosting;
```

### <a name="hosting_setup"></a>![Method: ](https://apidocs.io/img/method.png ".Hosting.hostingSetup") hostingSetup

> Node.JS and Static Web APP Hosting


```javascript
function hostingSetup(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| app |  ``` Required ```  | GIT URL or ZIP package containing your APP |
| domain |  ``` Required ```  | Domain or domain names separated by a comma |



#### Example Usage

```javascript

    var input = [];
        input['app'] = 'app';
        input['domain'] = 'domain';

    controller.hostingSetup(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="data_manipulation"></a>![Class: ](https://apidocs.io/img/class.png ".DataManipulation") DataManipulation

### Get singleton instance

The singleton instance of the ``` DataManipulation ``` class can be accessed from the API Client.

```javascript
var controller = lib.DataManipulation;
```

### <a name="https_api_rest_sh_api_d"></a>![Method: ](https://apidocs.io/img/method.png ".DataManipulation.httpsApiRestShApiD") httpsApiRestShApiD

> Data Manipulation API


```javascript
function httpsApiRestShApiD(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| data |  ``` Required ```  | Data URL, data as a query string, or direct upload |
| transform |  ``` Required ```  | Transformations to perform |



#### Example Usage

```javascript

    var input = [];
        input['data'] = 'data';
        input['transform'] = 'transform';

    controller.httpsApiRestShApiD(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="image_manipulation"></a>![Class: ](https://apidocs.io/img/class.png ".ImageManipulation") ImageManipulation

### Get singleton instance

The singleton instance of the ``` ImageManipulation ``` class can be accessed from the API Client.

```javascript
var controller = lib.ImageManipulation;
```

### <a name="image_manipulation"></a>![Method: ](https://apidocs.io/img/method.png ".ImageManipulation.imageManipulation") imageManipulation

> Image Manipulation API


```javascript
function imageManipulation(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| image |  ``` Required ```  | Image URL or direct upload |
| transform |  ``` Required ```  | Transformations to perform |



#### Example Usage

```javascript

    var input = [];
        input['image'] = 'image';
        input['transform'] = 'transform';

    controller.imageManipulation(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="verification"></a>![Class: ](https://apidocs.io/img/class.png ".Verification") Verification

### Get singleton instance

The singleton instance of the ``` Verification ``` class can be accessed from the API Client.

```javascript
var controller = lib.Verification;
```

### <a name="user_address_verification"></a>![Method: ](https://apidocs.io/img/method.png ".Verification.userAddressVerification") userAddressVerification

> User Address Verification API


```javascript
function userAddressVerification(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| user |  ``` Required ```  | Users UID, Username, or Email |
| a |  ``` Required ```  | Address Line One |
| sa |  ``` Required ```  | Address Line Two |
| c |  ``` Required ```  | Address City |
| s |  ``` Required ```  | Address State or Province |
| z |  ``` Required ```  | Address Zipcode |
| address |  ``` Optional ```  | Address as a one line input separated by commas |



#### Example Usage

```javascript

    var input = [];
        input['user'] = 'user';
        input['a'] = 'a';
        input['sa'] = 'sa';
        input['c'] = 'c';
        input['s'] = 's';
        input['z'] = 15;
        input['address'] = 'address';

    controller.userAddressVerification(input, function(error, response, context) {

    
    });
```



### <a name="user_verification_response"></a>![Method: ](https://apidocs.io/img/method.png ".Verification.userVerificationResponse") userVerificationResponse

> Users Verification Response API


```javascript
function userVerificationResponse(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| user |  ``` Required ```  | Users UID, Username, Or Email |
| code |  ``` Required ```  | Verification code entered by the user |



#### Example Usage

```javascript

    var input = [];
        input['user'] = 'user';
        input['code'] = 'code';

    controller.userVerificationResponse(input, function(error, response, context) {

    
    });
```



### <a name="user_verification"></a>![Method: ](https://apidocs.io/img/method.png ".Verification.userVerification") userVerification

> User Verification API


```javascript
function userVerification(user, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| user |  ``` Required ```  | Users UID, Username, Or Email |



#### Example Usage

```javascript

    var user = 'user';

    controller.userVerification(user, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="two_factor_authentication_api"></a>![Class: ](https://apidocs.io/img/class.png ".TwoFactorAuthenticationAPI") TwoFactorAuthenticationAPI

### Get singleton instance

The singleton instance of the ``` TwoFactorAuthenticationAPI ``` class can be accessed from the API Client.

```javascript
var controller = lib.TwoFactorAuthenticationAPI;
```

### <a name="m2_fa_token_response"></a>![Method: ](https://apidocs.io/img/method.png ".TwoFactorAuthenticationAPI.m2FATokenResponse") m2FATokenResponse

> Two Factor Authentication Token Reply


```javascript
function m2FATokenResponse(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| user |  ``` Required ```  | Users UID, Username or Email |
| code |  ``` Required ```  | Response From User Containing 2FA Code |



#### Example Usage

```javascript

    var input = [];
        input['user'] = 'user';
        input['code'] = 'code';

    controller.m2FATokenResponse(input, function(error, response, context) {

    
    });
```



### <a name="two_factor_authentication"></a>![Method: ](https://apidocs.io/img/method.png ".TwoFactorAuthenticationAPI.twoFactorAuthentication") twoFactorAuthentication

> Two Factor Authentication API


```javascript
function twoFactorAuthentication(to, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| to |  ``` Required ```  | Users UID, Username, Email, Or Cellphone number |



#### Example Usage

```javascript

    var to = 'to';

    controller.twoFactorAuthentication(to, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="user_management"></a>![Class: ](https://apidocs.io/img/class.png ".UserManagement") UserManagement

### Get singleton instance

The singleton instance of the ``` UserManagement ``` class can be accessed from the API Client.

```javascript
var controller = lib.UserManagement;
```

### <a name="get_user_info"></a>![Method: ](https://apidocs.io/img/method.png ".UserManagement.getUserInfo") getUserInfo

> Get User Info API


```javascript
function getUserInfo(user, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| user |  ``` Required ```  | Users User ID |



#### Example Usage

```javascript

    var user = 'user';

    controller.getUserInfo(user, function(error, response, context) {

    
    });
```



### <a name="update_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserManagement.updateUser") updateUser

> Update User API


```javascript
function updateUser(input, queryParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| user |  ``` Required ```  | Users UID, Username, Or Email |
| avatar |  ``` Required ```  | Avatar Image URL |
| customInput |  ``` Required ```  | Custom input variable for users profile |
| queryParameters | ``` Optional ``` | Additional optional query parameters are supported by this method |



#### Example Usage

```javascript

    var input = [];
        input['user'] = 'user';
        input['avatar'] = 'avatar';
        input['customInput'] = custom input;

    // key-value map for optional query parameters
    var queryParams = [];

    controller.updateUser(input, queryParams, function(error, response, context) {

    
    });
```



### <a name="delete_user"></a>![Method: ](https://apidocs.io/img/method.png ".UserManagement.deleteUser") deleteUser

> Delete User API


```javascript
function deleteUser(user, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| user |  ``` Required ```  | Users UID, Username, or Email |



#### Example Usage

```javascript

    var user = 'user';

    controller.deleteUser(user, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="login_and_registration"></a>![Class: ](https://apidocs.io/img/class.png ".LoginAndRegistration") LoginAndRegistration

### Get singleton instance

The singleton instance of the ``` LoginAndRegistration ``` class can be accessed from the API Client.

```javascript
var controller = lib.LoginAndRegistration;
```

### <a name="user_registration"></a>![Method: ](https://apidocs.io/img/method.png ".LoginAndRegistration.userRegistration") userRegistration

> User Registration API


```javascript
function userRegistration(input, queryParams, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| email |  ``` Required ```  | Users Email |
| user |  ``` Required ```  | Users Username |
| password |  ``` Required ```  | Users Password |
| name |  ``` Optional ```  | Users Name |
| phone |  ``` Optional ```  | Users Cellphone Number |
| countrycode |  ``` Optional ```  | Users Country Code (US = 1) |
| address |  ``` Optional ```  | Users Address |
| queryParameters | ``` Optional ``` | Additional optional query parameters are supported by this method |



#### Example Usage

```javascript

    var input = [];
        input['email'] = 'email';
        input['user'] = 'user';
        input['password'] = 'password';
        input['name'] = 'name';
        input['phone'] = 15;
        input['countrycode'] = 15;
        input['address'] = 'address';

    // key-value map for optional query parameters
    var queryParams = [];

    controller.userRegistration(input, queryParams, function(error, response, context) {

    
    });
```



### <a name="user_authentication"></a>![Method: ](https://apidocs.io/img/method.png ".LoginAndRegistration.userAuthentication") userAuthentication

> User Authentication API


```javascript
function userAuthentication(input, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| user |  ``` Required ```  | Users Username or Email |
| password |  ``` Required ```  | Users Password |



#### Example Usage

```javascript

    var input = [];
        input['user'] = 'user';
        input['password'] = 'password';

    controller.userAuthentication(input, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



