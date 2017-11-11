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

const controller = testerlib.ImageManipulation;
const ImageManipulationModelResponse = testerlib.ImageManipulationModelResponse;

describe("ImageManipulation Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Image manipulation test case
     */
    it("should testHttpsApiRestShApiI response", function testHttpsApiRestShApiITest(done) {
        // parameters for the API call
        let input = [];
        input['image'] = null;
        input['transform'] = null;

        controller.imageManipulation(input, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.isNotNull(response);
            assert.equal('{\n    "request": "REQUEST TYPE",\n    "url": "RETURNED IMAGE URL AND DATA",\n    "success": "RETURNS TRUE IF IMAGE MANIPULATION WAS SUCCESSFULL",\n    "moderated": "RETURNS TRUE IF IMAGE CONTAINED GRAPHIC IMAGERY",\n    "id": "TRANSACTION ID"\n}', context.response.body);
            done();
        });
    });

});
