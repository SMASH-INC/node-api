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

class Encryption {
    /**
     * Data and File Encryption API
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['data'] GIT URL, file URL, direct upload of file, or data as a query
     * string
     * @param {string} input['method'] Single or multiple encryption types to apply to data or
     * files separated by a comma (DES, RSA, BLOWFISH, TWOFISH, AES,
     * IDEA, PGP)
     * @param {int} input['bit'] Encryption key size (4096)
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static dataAndFileEncryption(input, callback) {
        _logger.info('dataAndFileEncryption being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for dataAndFileEncryption');
        if (input.data === null || input.data === undefined) {
            const _err = { errorMessage: 'The property `data` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.method === null || input.method === undefined) {
            const _err = { errorMessage: 'The property `method` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.bit === null || input.bit === undefined) {
            const _err = { errorMessage: 'The property `bit` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for dataAndFileEncryption');
        const _baseUri = _configuration.getBaseUri(_servers.PATH);

        let _queryBuilder = `${_baseUri}${'/s/e'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            data: input.data,
            method: input.method,
            bit: input.bit,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for dataAndFileEncryption');
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
        _logger.debug(`'Raw request for dataAndFileEncryption  > ${JSON.stringify(_options)}'`);
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for dataAndFileEncryption...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'dataAndFileEncryption');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for dataAndFileEncryption...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for dataAndFileEncryption');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'EncryptionModelResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for dataAndFileEncryption ');
                    errorResponse = _baseController.validateResponse(_context, 'dataAndFileEncryption');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = Encryption;
