/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of InfoModel
 */
class InfoModel extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.uid = this.constructor.getValue(obj.uid);
        this.apiuid = this.constructor.getValue(obj.apiuid);
        this.realname = this.constructor.getValue(obj.realname);
        this.displayname = this.constructor.getValue(obj.displayname);
        this.avatar = this.constructor.getValue(obj.avatar);
        this.email = this.constructor.getValue(obj.email);
        this.address = this.constructor.getValue(obj.address);
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
            { name: 'uid', realName: 'uid' },
            { name: 'apiuid', realName: 'apiuid' },
            { name: 'realname', realName: 'realname' },
            { name: 'displayname', realName: 'displayname' },
            { name: 'avatar', realName: 'avatar' },
            { name: 'email', realName: 'email' },
            { name: 'address', realName: 'address' },
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

module.exports = InfoModel;
