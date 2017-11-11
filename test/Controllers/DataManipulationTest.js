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

const controller = testerlib.DataManipulation;
const DataManipulationModelResponse = testerlib.DataManipulationModelResponse;

describe("DataManipulation Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Data Manipulation test case
     */
    it("should testHttpsApiRestShApiD response", function testHttpsApiRestShApiDTest(done) {
        // parameters for the API call
        let input = [];
        input['data'] = null;
        input['transform'] = null;

        controller.httpsApiRestShApiD(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\n    "request": "REQUEST TYPE",\n    "url": "RETURNED DATA URL",\n    "success": "RETURNS TRUE IF DATA MANIPULATION WAS SUCCESSFULL",\n    "id": "TRANSACTION ID"\n}', context.response.body);
            done();
        });
    });
});
