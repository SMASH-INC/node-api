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

const controller = testerlib.Hosting;
const HostingModelResponse = testerlib.HostingModelResponse;

describe("Hosting Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Web hosting testing case
     */
    it("should testHttpsApiRestShApiSH response", function testHttpsApiRestShApiSHTest(done) {
        // parameters for the API call
        let input = [];
        input['app'] = null;
        input['domain'] = null;

        controller.hostingSetup(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\r\n  "request": "REQUEST TYPE",\r\n  "url": "RETURNED APP HOSTING URL",\r\n  "success": "RETURNS TRUE IF APP WAS SUCCESSFULLY DEPLOYED",\r\n  "id": "TRANSACTION ID"\r\n}', context.response.body);
            done();
        });
    });

});
