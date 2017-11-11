/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UserCustomUpdateModel
 */
class UserCustomUpdateModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.uid = this.constructor.getValue(obj.uid);
        this.apiuid = this.constructor.getValue(obj.apiuid);
        this.avatar = this.constructor.getValue(obj.avatar);
        this.customInput = this.constructor.getValue(obj.customInput || obj['custom-input']);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'uid', realName: 'uid' },
            { name: 'apiuid', realName: 'apiuid' },
            { name: 'avatar', realName: 'avatar' },
            { name: 'customInput', realName: 'custom-input' },
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

module.exports = UserCustomUpdateModel;
