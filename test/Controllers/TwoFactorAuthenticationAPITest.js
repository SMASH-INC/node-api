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

const controller = testerlib.TwoFactorAuthenticationAPI;
const TwoFactorAuthenticationTokenModelResponse = testerlib.TwoFactorAuthenticationTokenModelResponse;
const TwoFactorAuthenticationModelResponse = testerlib.TwoFactorAuthenticationModelResponse;

describe("TwoFactorAuthenticationAPI Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * User 2FA response test case
     */
    it("should testHttpsApiRestShApi2faT response", function testHttpsApiRestShApi2faTTest(done) {
        // parameters for the API call
        let input = [];
        input['user'] = null;
        input['code'] = null;

        controller.m2FATokenResponse(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\r\n  "request": "REQUEST TYPE",\r\n  "correct": "RETURNS IF 2FA TOKEN IS CORRECT",\r\n  "id": "TRANSACTION ID"\r\n}', context.response.body);
            done();
        });
    });

    /**
     * 2FA test case
     */
    it("should testHttpsApiRestShApi2fa response", function testHttpsApiRestShApi2faTest(done) {
        // parameters for the API call
        let to = null;

        controller.twoFactorAuthentication(to, function callback(error, response, context) {
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
