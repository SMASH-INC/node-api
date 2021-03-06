/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UserRegistrationModel
 */
class UserRegistrationModel extends BaseModel {
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
        this.password = this.constructor.getValue(obj.password);
        this.name = this.constructor.getValue(obj.name);
        this.email = this.constructor.getValue(obj.email);
        this.phone = this.constructor.getValue(obj.phone);
        this.countrycode = this.constructor.getValue(obj.countrycode);
        this.address = this.constructor.getValue(obj.address);
        this.a = this.constructor.getValue(obj.a);
        this.sa = this.constructor.getValue(obj.sa);
        this.c = this.constructor.getValue(obj.c);
        this.s = this.constructor.getValue(obj.s);
        this.z = this.constructor.getValue(obj.z);
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
            { name: 'password', realName: 'password' },
            { name: 'name', realName: 'name' },
            { name: 'email', realName: 'email' },
            { name: 'phone', realName: 'phone' },
            { name: 'countrycode', realName: 'countrycode' },
            { name: 'address', realName: 'address' },
            { name: 'a', realName: 'a' },
            { name: 'sa', realName: 'sa' },
            { name: 'c', realName: 'c' },
            { name: 's', realName: 's' },
            { name: 'z', realName: 'z' },
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

module.exports = UserRegistrationModel;
