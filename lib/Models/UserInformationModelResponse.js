/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UserInformationModelResponse
 */
class UserInformationModelResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.user = this.constructor.getValue(obj.user);
        this.key = this.constructor.getValue(obj.key);
        this.api = this.constructor.getValue(obj.api);
        this.info = this.constructor.getValue(obj.info);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'user', realName: 'user' },
            { name: 'key', realName: 'key' },
            { name: 'api', realName: 'api' },
            { name: 'info', realName: 'info', type: 'UserInformationSecondaryModel' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = UserInformationModelResponse;
