/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const MMDDYYYYHHMMSSModel = require('../lib/Models/MMDDYYYYHHMMSSModel');
const LoggingLogsModelResponse = require('../lib/Models/LoggingLogsModelResponse');
const LoggingSetupModelResponse = require('../lib/Models/LoggingSetupModelResponse');
const DataManipulationModel = require('../lib/Models/DataManipulationModel');
const VerifyAddress = require('../lib/Models/VerifyAddress');
const UserInformationModel = require('../lib/Models/UserInformationModel');
const UserUpdateModel = require('../lib/Models/UserUpdateModel');
const UserRegistrationModel = require('../lib/Models/UserRegistrationModel');
const InfoModel = require('../lib/Models/InfoModel');
const LoggingLogsModel = require('../lib/Models/LoggingLogsModel');
const LoggingSetupModel = require('../lib/Models/LoggingSetupModel');
const WAFConfigurationModel = require('../lib/Models/WAFConfigurationModel');
const WAFCreationModel = require('../lib/Models/WAFCreationModel');
const EncryptionModelResponse = require('../lib/Models/EncryptionModelResponse');
const EncryptionModel = require('../lib/Models/EncryptionModel');
const CDNPushModel = require('../lib/Models/CDNPushModel');
const CDNPullModel = require('../lib/Models/CDNPullModel');
const DNSConfigurationModel = require('../lib/Models/DNSConfigurationModel');
const NameserversModel = require('../lib/Models/NameserversModel');
const HostingModelResponse = require('../lib/Models/HostingModelResponse');
const HostingModel = require('../lib/Models/HostingModel');
const DataManipulationModelResponse = require('../lib/Models/DataManipulationModelResponse');
const ImageManipulationModelResponse = require('../lib/Models/ImageManipulationModelResponse');
const ImageManipulationModel = require('../lib/Models/ImageManipulationModel');
const TwoFactorAuthenticationTokenModel =
  require('../lib/Models/TwoFactorAuthenticationTokenModel');
const TwoFactorAuthenticationModel = require('../lib/Models/TwoFactorAuthenticationModel');
const VerifyUserModel = require('../lib/Models/VerifyUserModel');
const VerifyModelResponse = require('../lib/Models/VerifyModelResponse');
const UserDeletionModel = require('../lib/Models/UserDeletionModel');
const UserInformationModelResponse = require('../lib/Models/UserInformationModelResponse');
const UserInformationSecondaryModel = require('../lib/Models/UserInformationSecondaryModel');
const UserCustomUpdateModel = require('../lib/Models/UserCustomUpdateModel');
const UserUpdateModelResponse = require('../lib/Models/UserUpdateModelResponse');
const UserProfileInformationModel = require('../lib/Models/UserProfileInformationModel');
const UserRegistrationModelResponse = require('../lib/Models/UserRegistrationModelResponse');
const UserAuthenticationModelResponse = require('../lib/Models/UserAuthenticationModelResponse');
const UserAuthenticationModel = require('../lib/Models/UserAuthenticationModel');
const DataModel = require('../lib/Models/DataModel');
const LogModel = require('../lib/Models/LogModel');
const WAFConfigurationModelResponse = require('../lib/Models/WAFConfigurationModelResponse');
const WAFCreationModelResponse = require('../lib/Models/WAFCreationModelResponse');
const CodeProtectionModelResponse = require('../lib/Models/CodeProtectionModelResponse');
const CodeProtectionModel = require('../lib/Models/CodeProtectionModel');
const CDNPushModelResponse = require('../lib/Models/CDNPushModelResponse');
const CDNPullModelResponse = require('../lib/Models/CDNPullModelResponse');
const DNSConfigurationModelResponse = require('../lib/Models/DNSConfigurationModelResponse');
const DNSCreationModelResponse = require('../lib/Models/DNSCreationModelResponse');
const DNSCreationModel = require('../lib/Models/DNSCreationModel');
const TwoFactorAuthenticationTokenModelResponse =
  require('../lib/Models/TwoFactorAuthenticationTokenModelResponse');
const TwoFactorAuthenticationModelResponse =
  require('../lib/Models/TwoFactorAuthenticationModelResponse');
const VerifyAddressResponse = require('../lib/Models/VerifyAddressResponse');
const VerifyUserModelResponse = require('../lib/Models/VerifyUserModelResponse');
const VerifyModel = require('../lib/Models/VerifyModel');
const UserDeletionResponseModel = require('../lib/Models/UserDeletionResponseModel');

const classMap = {
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
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
