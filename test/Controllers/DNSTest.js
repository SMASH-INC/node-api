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

const controller = testerlib.DNS;
const DNSConfigurationModelResponse = testerlib.DNSConfigurationModelResponse;
const DNSCreationModelResponse = testerlib.DNSCreationModelResponse;

describe("DNS Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * DNS configuration test case
     */
    it("should testHttpsApiRestShApiSDC response", function testHttpsApiRestShApiSDCTest(done) {
        // parameters for the API call
        let input = [];
        input['domain'] = null;
        input['records'] = null;

        controller.dNSConfiguration(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\n    "success": "SHOWS TRUE IF RECORDS WERE SUCCESSFULLY SET",\n    "domain": "DOMAIN",\n    "records": "RECORDS SET TO DOMAIN"\n}', context.response.body);
            done();
        });
    });

    /**
     * DNS addition test case
     */
    it("should testHttpsApiRestShApiSDA response", function testHttpsApiRestShApiSDATest(done) {
        // parameters for the API call
        let domain = null;

        controller.dNSCreation(domain, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\n    "domain": "LIST OF DOMAINS ADDED",\n    "nameservers": {\n        "ns1": "NAME SERVER ONE TO POINT YOUR DOMAIN AT",\n        "ns2": "NAME SERVER TWO TO POINT YOUR DOMAIN AT",\n        "ns3": "NAME SERVER THREE TO POINT YOUR DOMAIN AT",\n        "ns4": "NAME SERVER FOUR TO POINT YOUR DOMAIN AT"\n    }\n}', context.response.body);
            done();
        });
    });

});
