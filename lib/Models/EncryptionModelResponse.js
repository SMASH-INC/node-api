/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of EncryptionModelResponse
 */
class EncryptionModelResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.data = this.constructor.getValue(obj.data);
        this.file = this.constructor.getValue(obj.file);
        this.success = this.constructor.getValue(obj.success);
        this.mpublic = this.constructor.getValue(obj.mpublic || obj.public);
        this.mprivate = this.constructor.getValue(obj.mprivate || obj.private);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'data', realName: 'data' },
            { name: 'file', realName: 'file' },
            { name: 'success', realName: 'success' },
            { name: 'mpublic', realName: 'public' },
            { name: 'mprivate', realName: 'private' },
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

module.exports = EncryptionModelResponse;
