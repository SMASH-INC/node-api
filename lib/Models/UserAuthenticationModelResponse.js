/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UserAuthenticationModelResponse
 */
class UserAuthenticationModelResponse extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.request = this.constructor.getValue(obj.request);
        this.uid = this.constructor.getValue(obj.uid);
        this.valid = this.constructor.getValue(obj.valid);
        this.id = this.constructor.getValue(obj.id);
        this.info = this.constructor.getValue(obj.info);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'request', realName: 'request' },
            { name: 'uid', realName: 'uid' },
            { name: 'valid', realName: 'valid' },
            { name: 'id', realName: 'id' },
            { name: 'info', realName: 'info', type: 'InfoModel' },
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

module.exports = UserAuthenticationModelResponse;
