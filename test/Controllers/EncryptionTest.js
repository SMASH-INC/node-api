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

const controller = testerlib.Encryption;
const EncryptionModelResponse = testerlib.EncryptionModelResponse;

describe("Encryption Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * File and Data encryption test case
     */
    it("should testHttpsApiRestShApiSE response", function testHttpsApiRestShApiSETest(done) {
        // parameters for the API call
        let input = [];
        input['data'] = null;
        input['method'] = null;
        input['bit'] = null;

        controller.dataAndFileEncryption(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\n    "data": "RETURNED ENCRYPTED DATA URL",\n    "file": "RETURNED ENCRYPTED FILE URL",\n    "success": "SHOWS TRUE IF ENCRYPTION WAS SUCCESSFULL",\n    "public": "PUBLIC ENCRYPTION KEY FOR YOUR DATA OR FILES",\n    "private": "PRIVATE ENCRYPTION KEY FOR YOUR DATA OR FILES"\n}', context.response.body);
            done();
        });
    });

});
