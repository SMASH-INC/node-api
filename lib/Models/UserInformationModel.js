/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UserInformationModel
 */
class UserInformationModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.realname = this.constructor.getValue(obj.realname);
        this.displayname = this.constructor.getValue(obj.displayname);
        this.avatar = this.constructor.getValue(obj.avatar);
        this.email = this.constructor.getValue(obj.email);
        this.address = this.constructor.getValue(obj.address);
        this.address1 = this.constructor.getValue(obj.address1);
        this.address2 = this.constructor.getValue(obj.address2);
        this.city = this.constructor.getValue(obj.city);
        this.state = this.constructor.getValue(obj.state);
        this.zipcode = this.constructor.getValue(obj.zipcode);
        this.phone = this.constructor.getValue(obj.phone);
        this.lastlogin = this.constructor.getValue(obj.lastlogin);
        this.ip = this.constructor.getValue(obj.ip);
        this.m2fa = this.constructor.getValue(obj.m2fa || obj['2fa']);
        this.iplock = this.constructor.getValue(obj.iplock);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'realname', realName: 'realname' },
            { name: 'displayname', realName: 'displayname' },
            { name: 'avatar', realName: 'avatar' },
            { name: 'email', realName: 'email' },
            { name: 'address', realName: 'address' },
            { name: 'address1', realName: 'address1' },
            { name: 'address2', realName: 'address2' },
            { name: 'city', realName: 'city' },
            { name: 'state', realName: 'state' },
            { name: 'zipcode', realName: 'zipcode' },
            { name: 'phone', realName: 'phone' },
            { name: 'lastlogin', realName: 'lastlogin' },
            { name: 'ip', realName: 'ip' },
            { name: 'm2fa', realName: '2fa' },
            { name: 'iplock', realName: 'iplock' },
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

module.exports = UserInformationModel;
