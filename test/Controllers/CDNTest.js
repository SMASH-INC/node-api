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

const controller = testerlib.CDN;
const CDNPushModelResponse = testerlib.CDNPushModelResponse;
const CDNPullModelResponse = testerlib.CDNPullModelResponse;

describe("CDN Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * CDN push zone creation and configuration test case
     */
    it("should testHttpsApiRestShApiSCPush response", function testHttpsApiRestShApiSCPushTest(done) {
        // parameters for the API call
        let input = [];
        input['cname'] = null;
        input['file'] = null;

        controller.cDNPushZone(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\r\n  "success": "SHOWS TRUE WHEN PUSH ZONE IS DEPLOYED SUCCESSFULLY",\r\n  "upload": "LIST OF FILES UPLOADED TO YOUR PUSH ZONE",\r\n  "cname": "RECORD TO APPEND YOUR URLS TO VIA A CNAME"\r\n}', context.response.body);
            done();
        });
    });

    /**
     * CDN pull zone creation and configuration test case
     */
    it("should testHttpsApiRestShApiSCPull response", function testHttpsApiRestShApiSCPullTest(done) {
        // parameters for the API call
        let input = [];
        input['origin'] = null;
        input['cname'] = null;

        controller.cDNPullZone(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\r\n  "success": "SHOWS TRUE WHEN PULL ZONE IS DEPLOYED SUCCESSFULLY",\r\n  "cname": "RECORD TO APPEND YOUR URLS TO VIA A CNAME"\r\n}', context.response.body);
            done();
        });
    });

});
