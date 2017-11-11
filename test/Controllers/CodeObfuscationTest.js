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

const controller = testerlib.CodeObfuscation;
const CodeProtectionModelResponse = testerlib.CodeProtectionModelResponse;

describe("CodeObfuscation Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Code obfuscation test case
     */
    it("should testHttpsApiRestShApiSO response", function testHttpsApiRestShApiSOTest(done) {
        // parameters for the API call
        let app = null;

        controller.obfuscationAndAntiTampering(app, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\r\n  "success": "RETURNS TRUE IF APP WAS SUCCESSFULLY OBFUSCTATED AND PROTECTED",\r\n  "app": "OBFUSCATED APP URL"\r\n}', context.response.body);
            done();
        });
    });

});
