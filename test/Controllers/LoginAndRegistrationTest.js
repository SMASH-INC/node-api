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

const controller = testerlib.LoginAndRegistration;
const UserRegistrationModelResponse = testerlib.UserRegistrationModelResponse;
const UserAuthenticationModelResponse = testerlib.UserAuthenticationModelResponse;

describe("LoginAndRegistration Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * User registration test case
     */
    it("should testHttpsApiRestShApiAUR response", function testHttpsApiRestShApiAURTest(done) {
        // parameters for the API call
        let input = [];
        input['email'] = null;
        input['user'] = null;
        input['password'] = null;
        input['name'] = null;
        input['phone'] = null;
        input['countrycode'] = null;
        input['address'] = null;

        // key-value map for optional query parameters
        let queryParams = [];

        controller.userRegistration(input, null, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\n    "request": "REQUEST TYPE",\n    "active": "RETURNS TRUE, IF USER WAS SUCCESSFULLY REGISTERED",\n    "id": "TRANSACTION ID",\n    "info": {\n        "uid": "USERS ID",\n        "apiuid": "API SIDE USER ID",\n        "realname": "USERS REAL NAME",\n        "displayname": "USERS USERNAME",\n        "email": "USERS EMAIL",\n        "address": "USERS ADDRESS",\n        "phone": "USERS CELL PHONE NUMBER"\n    }\n}', context.response.body);
            done();
        });
    });

    /**
     * User authentication test case
     */
    it("should testHttpsApiRestShApiAUL response", function testHttpsApiRestShApiAULTest(done) {
        // parameters for the API call
        let input = [];
        input['user'] = null;
        input['password'] = null;

        controller.userAuthentication(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\n    "request": "REQUEST TYPE",\n    "uid": "Users UID",\n    "valid": "RETURNS TRUE IF USER LOGIN DETAILS ARE VALID",\n    "id": "TRANSACTION ID",\n    "info": {\n    \t"uid": "USERS ID",\n    \t"apiuid": "API SIDE USER ID",\n        "realname": "USERS REAL NAME",\n        "displayname": "USERS USERNAME",\n        "avatar": "USER AVATAR URL",\n        "email": "USERS EMAIL",\n        "address": "USERS ADDRESS",\n        "phone": "USERS CELL PHONE NUMBER",\n        "lastlogin": "USERS LAST LOGIN",\n        "ip": "USERS IP",\n        "2fa": "RETURNS TRUE IF 2FA IS ENABLED",\n        "iplock": "RETURNS TRUE IF IP LOCK IS ENABLED"\n    }\n}', context.response.body);
            done();
        });
    });

});
