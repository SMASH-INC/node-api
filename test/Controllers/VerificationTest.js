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

const controller = testerlib.Verification;
const VerifyAddressResponse = testerlib.VerifyAddressResponse;
const VerifyUserModelResponse = testerlib.VerifyUserModelResponse;
const VerifyModelResponse = testerlib.VerifyModelResponse;

describe("Verification Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * User address verification test case
     */
    it("should testHttpsApiRestShApiVA response", function testHttpsApiRestShApiVATest(done) {
        // parameters for the API call
        let input = [];
        input['user'] = null;
        input['a'] = null;
        input['sa'] = null;
        input['c'] = null;
        input['s'] = null;
        input['z'] = null;
        input['address'] = null;

        controller.userAddressVerification(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\r\n  "request": "REQUEST TYPE",\r\n  "active": "RETURNS TRUE, IF ADDRESS IS ACTIVE AND IF USER IS CURRENTLY THERE",\r\n  "id": "TRANSACTION ID"\r\n}', context.response.body);
            done();
        });
    });

    /**
     * User verification response test case
     */
    it("should testHttpsApiRestShApiVU response", function testHttpsApiRestShApiVUTest(done) {
        // parameters for the API call
        let input = [];
        input['user'] = null;
        input['code'] = null;

        controller.userVerificationResponse(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\r\n  "request": "REQUEST TYPE",\r\n  "correct": "RETURNS IF 2FA TOKEN IS CORRECT",\r\n  "id": "TRANSACTION ID"\r\n}', context.response.body);
            done();
        });
    });

    /**
     * User verification test case
     */
    it("should testHttpsApiRestShApiV response", function testHttpsApiRestShApiVTest(done) {
        // parameters for the API call
        let user = null;

        controller.userVerification(user, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            // test headers
            let headers = [];
            headers['Accept-Ranges'] = null;
            headers['Connection'] = null;
            headers['Content-Length'] = null;
            headers['Content-Type'] = null;
            headers['Date'] = null;
            headers['Server'] = null;
            headers['Vary'] = null;
            headers['Via'] = null;
            headers['X-Cache'] = null;
            headers['X-Cache-Hits'] = null;
            headers['X-Served-By'] = null;
            headers['X-Timer'] = null;
            headers['access-control-allow-origin'] = null;
            headers['cache-control'] = null;
            headers['etag'] = null;
            headers['function-execution-id'] = null;
            headers['strict-transport-security'] = null;
            headers['x-cloud-trace-context'] = null;
            headers['x-content-type-options'] = null;
            headers['x-dns-prefetch-control'] = null;
            headers['x-download-options'] = null;
            headers['x-frame-options'] = null;
            headers['x-powered-by'] = null;
            headers['x-xss-protection'] = null;
            assert.isTrue(TestHelper.areHeadersProperSubsetOf(headers, context.response.headers, true));
            assert.isNotNull(response);
            assert.equal('{\n    "request": "REQUEST TYPE",\n    "to": "USER BEING VERIFIED",\n    "verified": "RETURNS TRUE OR FALSE",\n    "id": "TRANSACTION ID"\n}', context.response.body);
            done();
        });
    });

});
