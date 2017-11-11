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

const controller = testerlib.AdvancedLogging;
const LoggingSetupModelResponse = testerlib.LoggingSetupModelResponse;
const LoggingLogsModelResponse = testerlib.LoggingLogsModelResponse;

describe("AdvancedLogging Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Advanced logging configuration test case
     */
    it("should testHttpsApiRestShApiSL response", function testHttpsApiRestShApiSLTest(done) {
        // parameters for the API call
        let input = [];
        input['name'] = null;
        input['origin'] = null;
        input['activate'] = null;

        controller.loggingConfiguration(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\r\n  "success": "RETURNS TRUE IF ADVANCED LOGGING IS ACTIVATED"\r\n}', context.response.body);
            done();
        });
    });

    /**
     * Advanced logging info test case
     */
    it("should testHttpsApiRestShApiSLI response", function testHttpsApiRestShApiSLITest(done) {
        // parameters for the API call
        let input = [];
        input['name'] = null;
        input['origin'] = null;
        input['time'] = null;

        controller.loggingInfo(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\n    "log": {\n        "01010101245901": {\n            "data": {\n                "result": "INFO",\n                "content": "LOG: CONTENT AND ACTIONS PERFORMED",\n                "id": "FUNCTION ID"\n            }\n        },\n        "01010101245902": {\n            "data": {\n                "result": "ERROR",\n                "content": "LOG: ERROR CONTENT AND ACTIONS PERFORMED",\n                "id": "FUNCTION ID"\n            }\n        }\n    }\n}', context.response.body);
            done();
        });
    });

});
