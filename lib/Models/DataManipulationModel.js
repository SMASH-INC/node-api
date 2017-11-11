/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of DataManipulationModel
 */
class DataManipulationModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.key = this.constructor.getValue(obj.key);
        this.uid = this.constructor.getValue(obj.uid);
        this.user = this.constructor.getValue(obj.user);
        this.apiuid = this.constructor.getValue(obj.apiuid);
        this.url = this.constructor.getValue(obj.url);
        this.manipulation = this.constructor.getValue(obj.manipulation);
        this.conversion = this.constructor.getValue(obj.conversion);
        this.sorting = this.constructor.getValue(obj.sorting);
        this.compression = this.constructor.getValue(obj.compression);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'key', realName: 'key' },
            { name: 'uid', realName: 'uid' },
            { name: 'user', realName: 'user' },
            { name: 'apiuid', realName: 'apiuid' },
            { name: 'url', realName: 'url' },
            { name: 'manipulation', realName: 'manipulation' },
            { name: 'conversion', realName: 'conversion' },
            { name: 'sorting', realName: 'sorting' },
            { name: 'compression', realName: 'compression' },
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

module.exports = DataManipulationModel;
