/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const _request = require('../Http/Client/RequestClient');
const _configuration = require('../configuration');
const _servers = require('../Servers');
const _customAuthUtility = require('../CustomAuthUtility');
const _apiHelper = require('../APIHelper');
const _baseController = require('./BaseController');
const _logger = require('winston');

class ImageManipulation {
    /**
     * Image Manipulation API
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['image'] Image URL or direct upload
     * @param {string} input['transform'] Transformations to perform
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static imageManipulation(input, callback) {
        _logger.info('imageManipulation being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for imageManipulation');
        if (input.image === null || input.image === undefined) {
            const _err = { errorMessage: 'The property `image` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.transform === null || input.transform === undefined) {
            const _err = { errorMessage: 'The property `transform` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for imageManipulation');
        const _baseUri = _configuration.getBaseUri(_servers.PATH);

        let _queryBuilder = `${_baseUri}${'/i'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            image: input.image,
            transform: input.transform,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for imageManipulation');
        const _headers = {
            accept: 'application/json',
            'user-agent': 'SMASH',
        };

        // construct the request
        const _options = {
            queryUrl: _queryUrl,
            method: 'GET',
            headers: _headers,
        };
        _logger.debug(`'Raw request for imageManipulation  > ${JSON.stringify(_options)}'`);
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for imageManipulation...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'imageManipulation');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for imageManipulation...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for imageManipulation');
                    parsed = _baseController.getObjectMapper()
                .mapObject(parsed, 'ImageManipulationModelResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for imageManipulation ');
                    errorResponse = _baseController.validateResponse(_context, 'imageManipulation');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = ImageManipulation;
