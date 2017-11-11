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

const controller = testerlib.WAFAndDDOSProtection;
const WAFConfigurationModelResponse = testerlib.WAFConfigurationModelResponse;
const WAFCreationModelResponse = testerlib.WAFCreationModelResponse;

describe("WAFAndDDOSProtection Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * WAF and DDOS configuration test case
     */
    it("should testWAFConfiguration response", function testWAFConfigurationTest(done) {
        // parameters for the API call
        let input = [];
        input['name'] = null;
        input['rule'] = null;

        controller.wAFConfiguration(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\r\n  "success": "SHOWS TRUE WHEN THE WAF AND ORIGIN SHIELD (DDOS PROTECTION) IS DEPLOYED SUCCESSFULLY",\r\n  "rule": "RULES APPLIED TO WAF"\r\n}', context.response.body);
            done();
        });
    });

    /**
     * WAF and DDOS test case
     */
    it("should testWAFCreation response", function testWAFCreationTest(done) {
        // parameters for the API call
        let input = [];
        input['origin'] = null;
        input['cname'] = null;

        controller.wAFCreation(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\r\n  "success": "SHOWS TRUE WHEN THE WAF AND ORIGIN SHIELD (DDOS PROTECTION) IS DEPLOYED SUCCESSFULLY",\r\n  "cname": "RECORD TO APPEND YOUR URLS TO VIA A CNAME"\r\n}', context.response.body);
            done();
        });
    });
});
