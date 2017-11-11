/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of NameserversModel
 */
class NameserversModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.ns1 = this.constructor.getValue(obj.ns1);
        this.ns2 = this.constructor.getValue(obj.ns2);
        this.ns3 = this.constructor.getValue(obj.ns3);
        this.ns4 = this.constructor.getValue(obj.ns4);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'ns1', realName: 'ns1' },
            { name: 'ns2', realName: 'ns2' },
            { name: 'ns3', realName: 'ns3' },
            { name: 'ns4', realName: 'ns4' },
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

module.exports = NameserversModel;
