/*
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */
 'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");

const controller = testerlib.UserManagement;
const UserInformationModelResponse = testerlib.UserInformationModelResponse;
const UserUpdateModelResponse = testerlib.UserUpdateModelResponse;
const UserDeletionResponseModel = testerlib.UserDeletionResponseModel;

describe("UserManagement Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * User information test case
     */
    it("should testHttpsApiRestShApiUI response", function testHttpsApiRestShApiUITest(done) {
        // parameters for the API call
        let user = null;

        controller.getUserInfo(user, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\n    "request": "REQUEST TYPE",\n    "uid": "Users UID",\n    "apiuid": "API SIDE USER ID",\n    "verified": "RETURNS TRUE IF USER IS VERIFIED",\n    "id": "TRANSACTION ID",\n    "info": {\n        "realname": "USERS REAL NAME",\n        "displayname": "USERS USERNAME",\n        "avatar": "USER AVATAR URL",\n        "email": "USERS EMAIL",\n        "address": "USERS ADDRESS IN ONE LINE SEPERATED BY COMMAS",\n        "address1": "USERS ADDRESS LINE ONE",\n        "address2": "USERS ADDRESS LINE TWO",\n        "city": "USERS ADDRESS CITY",\n        "state": "USERS ADDRESS STATE",\n        "zipcode": "USERS ADDRESS ZIPCODE",\n        "phone": "USERS CELL PHONE NUMBER",\n        "lastlogin": "USERS LAST LOGIN",\n        "ip": "USERS IP",\n        "2fa": "RETURNS TRUE IF 2FA IS ENABLED",\n        "iplock": "RETURNS TRUE IF IP LOCK IS ENABLED"\n    }\n}', context.response.body);
            done();
        });
    });

    /**
     * User update test case
     */
    it("should testHttpsApiRestShApiUU response", function testHttpsApiRestShApiUUTest(done) {
        // parameters for the API call
        let input = [];
        input['user'] = null;
        input['avatar'] = null;
        input['customInput'] = null;

        // key-value map for optional query parameters
        let queryParams = [];

        controller.updateUser(input, null, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\r\n  "request": "REQUEST TYPE",\r\n  "updated": "RETURNS TRUE, IF USERS PROFILE WAS SUCCESSFULLY UPDATED",\r\n  "id": "TRANSACTION ID",\r\n  "info": {\r\n    "uid": "USERS ID",\r\n    "apiuid": "API SIDE USER ID",\r\n    "avatar": "INPUTTED AVATAR URL",\r\n    "custom-input": "CUSTOM INPUTTED PROFILE DATA"\r\n  }\r\n}', context.response.body);
            done();
        });
    });

    /**
     * User deletion test case
     */
    it("should testHttpsApiRestShApiUD response", function testHttpsApiRestShApiUDTest(done) {
        // parameters for the API call
        let user = null;

        controller.deleteUser(user, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\r\n  "request": "REQUEST TYPE",\r\n  "deleted": "RETURNS TRUE, IF USERS ACCOUNT WAS SUCCESSFULLY DELETED",\r\n  "id": "TRANSACTION ID"\r\n}', context.response.body);
            done();
        });
    });

});
