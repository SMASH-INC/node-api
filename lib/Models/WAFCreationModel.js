/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of WAFCreationModel
 */
class WAFCreationModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.key = this.constructor.getValue(obj.key);
        this.uid = this.constructor.getValue(obj.uid);
        this.origin = this.constructor.getValue(obj.origin);
        this.cname = this.constructor.getValue(obj.cname);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'key', realName: 'key' },
            { name: 'uid', realName: 'uid' },
            { name: 'origin', realName: 'origin' },
            { name: 'cname', realName: 'cname' },
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

module.exports = WAFCreationModel;
