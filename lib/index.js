/**
  * @module smash
  *
  * # Introduction * ## Multi-use Flexible API for:    * **User**:     * Login      * Registration
  * * User Management     * Profile Updates     * Two Factor Authentication         *
  * **Verifcation**:     * Identity Verification     * Address Verifcation     * Cell Phone
  * Verification     * **Image**:     * Manipulation     * Compression     * Moderation         *
  * **Data**:     * Manipulation     * Compression     * Conversion     * Sorting    * **Services**:
  * * Node Application Hosting     * DNS Management     * CDN (Content Delivery Network)    *
  * **Security**:     * Encryption     * Code Obfuscation     * Platform Identification     * WAF
  * and DDOS Protection (Web Application Firewall)       * Advanced Logging  # Overview  *  **API
  * Domain: api.rest.sh, api.restful.sh**  This API supports both GET and POST API requests with a
  * JSON or XML output.  *~ You can post to this API via a direct body response in JSON/XML, or
  * using URL variables/requests.*  # Authentication Be sure to include your User API KEY, and UID
  * when sending a POST or GET request to our API.  *~ If domain restriction is enabled in your
  * dashboard, please include your domain in the request and redirect headers for your API calls.*
  * # Status Codes * ## Success Codes:   *   **200**: Information Recieved   *   **201**: Success,
  * Resource Created, or Updated   *   **202**: Proccessing  * ## Information Codes:   *   **400**:
  * Bad Request   *   **401**: Incorrect Credentials   *   **403**: Forbidden   *   **406**: Not
  * Acceptable Input   *   **409**: Data Conflict   *   **413**: Payload Too Large   *   **415**: Un-
  * Supported Content Type   *   **451**: Un-Available For Legal Reasons  * ## Error Codes:   *
  * **500**: Internal API Error   *   **501**: Not Implemented   *   **503**: API Unavailable   *
  * **504**: Request Timeout   *   **511**: Authentication Required  # Rate Pricing * **Verification
  * requests:**    * per/1000 Requests: **$50.00**  * **User requests:**    * per/1000 Requests:
  * **$0.0072**  * **Image requests:**    * per/1000 Requests: **$11.87**  * Data requests:    *
  * per/1MB: **$0.00024**  * **Service requests:**    * **DNS Pricing Per Month:**     * Per Hosted
  * Zone: **$1.00**     * Per Traffic Flow Record: **$100.00**     * Per 1 Million Queries: **$0.
  * 80**     * Per 1 Million Latency Based Queries: **$1.20**     * Per 1 Million GEO Queries: **$1.
  * 40**     * Per Health Check: **$1.00**    * **Hosting Per Month:**     * Per APP: **$5.00**    *
  * **CDN Pricing per/1GB:**     * North America: **$0.17**     * Europe: **$0.17**     * Australia:
  * **$0.28**     * Asia: **$0.28**     * India: **$0.34**     * South America: **$0.5**  *
  * **Security requests:**    * **WAF and DDOS Pricing Per Month:**     * per/1000 Web Requests:
  * **$0.0012**     * Per Web Access Control List: **$10.00**     * Per Custom Domain Configuration:
  * **$2.00**      * **Encryption:**     * per/1000 data sets: **$0.0144**     * per/1MB per file:
  * **$0.00048**    * **Code Obfuscation Per Month:**     * per/APP (300 files per app): **$102.00**
  * * **Code Obfuscation Per Month:**     * per/APP (300 files per app): **$102.00**    *
  * **Advanced Logging:**     * per/1000 Log Entries: **$0.0072**
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const Logger = require('./LogConfig');
const AdvancedLogging = require('./Controllers/AdvancedLogging');
const WAFAndDDOSProtection = require('./Controllers/WAFAndDDOSProtection');
const Encryption = require('./Controllers/Encryption');
const CDN = require('./Controllers/CDN');
const DNS = require('./Controllers/DNS');
const CodeObfuscation = require('./Controllers/CodeObfuscation');
const Hosting = require('./Controllers/Hosting');
const DataManipulation = require('./Controllers/DataManipulation');
const ImageManipulation = require('./Controllers/ImageManipulation');
const Verification = require('./Controllers/Verification');
const TwoFactorAuthenticationAPI = require('./Controllers/TwoFactorAuthenticationAPI');
const UserManagement = require('./Controllers/UserManagement');
const LoginAndRegistration = require('./Controllers/LoginAndRegistration');
const MMDDYYYYHHMMSSModel = require('./Models/MMDDYYYYHHMMSSModel');
const LoggingLogsModelResponse = require('./Models/LoggingLogsModelResponse');
const LoggingSetupModelResponse = require('./Models/LoggingSetupModelResponse');
const DataManipulationModel = require('./Models/DataManipulationModel');
const VerifyAddress = require('./Models/VerifyAddress');
const UserInformationModel = require('./Models/UserInformationModel');
const UserUpdateModel = require('./Models/UserUpdateModel');
const UserRegistrationModel = require('./Models/UserRegistrationModel');
const InfoModel = require('./Models/InfoModel');
const LoggingLogsModel = require('./Models/LoggingLogsModel');
const LoggingSetupModel = require('./Models/LoggingSetupModel');
const WAFConfigurationModel = require('./Models/WAFConfigurationModel');
const WAFCreationModel = require('./Models/WAFCreationModel');
const EncryptionModelResponse = require('./Models/EncryptionModelResponse');
const EncryptionModel = require('./Models/EncryptionModel');
const CDNPushModel = require('./Models/CDNPushModel');
const CDNPullModel = require('./Models/CDNPullModel');
const DNSConfigurationModel = require('./Models/DNSConfigurationModel');
const NameserversModel = require('./Models/NameserversModel');
const HostingModelResponse = require('./Models/HostingModelResponse');
const HostingModel = require('./Models/HostingModel');
const DataManipulationModelResponse = require('./Models/DataManipulationModelResponse');
const ImageManipulationModelResponse = require('./Models/ImageManipulationModelResponse');
const ImageManipulationModel = require('./Models/ImageManipulationModel');
const TwoFactorAuthenticationTokenModel = require('./Models/TwoFactorAuthenticationTokenModel');
const TwoFactorAuthenticationModel = require('./Models/TwoFactorAuthenticationModel');
const VerifyUserModel = require('./Models/VerifyUserModel');
const VerifyModelResponse = require('./Models/VerifyModelResponse');
const UserDeletionModel = require('./Models/UserDeletionModel');
const UserInformationModelResponse = require('./Models/UserInformationModelResponse');
const UserInformationSecondaryModel = require('./Models/UserInformationSecondaryModel');
const UserCustomUpdateModel = require('./Models/UserCustomUpdateModel');
const UserUpdateModelResponse = require('./Models/UserUpdateModelResponse');
const UserProfileInformationModel = require('./Models/UserProfileInformationModel');
const UserRegistrationModelResponse = require('./Models/UserRegistrationModelResponse');
const UserAuthenticationModelResponse = require('./Models/UserAuthenticationModelResponse');
const UserAuthenticationModel = require('./Models/UserAuthenticationModel');
const DataModel = require('./Models/DataModel');
const LogModel = require('./Models/LogModel');
const WAFConfigurationModelResponse = require('./Models/WAFConfigurationModelResponse');
const WAFCreationModelResponse = require('./Models/WAFCreationModelResponse');
const CodeProtectionModelResponse = require('./Models/CodeProtectionModelResponse');
const CodeProtectionModel = require('./Models/CodeProtectionModel');
const CDNPushModelResponse = require('./Models/CDNPushModelResponse');
const CDNPullModelResponse = require('./Models/CDNPullModelResponse');
const DNSConfigurationModelResponse = require('./Models/DNSConfigurationModelResponse');
const DNSCreationModelResponse = require('./Models/DNSCreationModelResponse');
const DNSCreationModel = require('./Models/DNSCreationModel');
const TwoFactorAuthenticationTokenModelResponse =
  require('./Models/TwoFactorAuthenticationTokenModelResponse');
const TwoFactorAuthenticationModelResponse =
  require('./Models/TwoFactorAuthenticationModelResponse');
const VerifyAddressResponse = require('./Models/VerifyAddressResponse');
const VerifyUserModelResponse = require('./Models/VerifyUserModelResponse');
const VerifyModel = require('./Models/VerifyModel');
const UserDeletionResponseModel = require('./Models/UserDeletionResponseModel');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of smash
    Configuration,
    Environments,
    Logger,
    // controllers of smash
    AdvancedLogging,
    WAFAndDDOSProtection,
    Encryption,
    CDN,
    DNS,
    CodeObfuscation,
    Hosting,
    DataManipulation,
    ImageManipulation,
    Verification,
    TwoFactorAuthenticationAPI,
    UserManagement,
    LoginAndRegistration,
    // models of smash
    MMDDYYYYHHMMSSModel,
    LoggingLogsModelResponse,
    LoggingSetupModelResponse,
    DataManipulationModel,
    VerifyAddress,
    UserInformationModel,
    UserUpdateModel,
    UserRegistrationModel,
    InfoModel,
    LoggingLogsModel,
    LoggingSetupModel,
    WAFConfigurationModel,
    WAFCreationModel,
    EncryptionModelResponse,
    EncryptionModel,
    CDNPushModel,
    CDNPullModel,
    DNSConfigurationModel,
    NameserversModel,
    HostingModelResponse,
    HostingModel,
    DataManipulationModelResponse,
    ImageManipulationModelResponse,
    ImageManipulationModel,
    TwoFactorAuthenticationTokenModel,
    TwoFactorAuthenticationModel,
    VerifyUserModel,
    VerifyModelResponse,
    UserDeletionModel,
    UserInformationModelResponse,
    UserInformationSecondaryModel,
    UserCustomUpdateModel,
    UserUpdateModelResponse,
    UserProfileInformationModel,
    UserRegistrationModelResponse,
    UserAuthenticationModelResponse,
    UserAuthenticationModel,
    DataModel,
    LogModel,
    WAFConfigurationModelResponse,
    WAFCreationModelResponse,
    CodeProtectionModelResponse,
    CodeProtectionModel,
    CDNPushModelResponse,
    CDNPullModelResponse,
    DNSConfigurationModelResponse,
    DNSCreationModelResponse,
    DNSCreationModel,
    TwoFactorAuthenticationTokenModelResponse,
    TwoFactorAuthenticationModelResponse,
    VerifyAddressResponse,
    VerifyUserModelResponse,
    VerifyModel,
    UserDeletionResponseModel,
    // exceptions of smash
    APIException,
};

initializer.Logger.LogConfig();

module.exports = initializer;
