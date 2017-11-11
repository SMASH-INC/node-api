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

class AdvancedLogging {
    /**
     * WAF Log Configuration
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['name'] Name of the WAF zone
     * @param {string} input['origin'] IP Address of the Web Application you wish to configure
     * logging on
     * @param {string} input['activate'] Activate or Disable
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static loggingConfiguration(input, callback) {
        _logger.info('loggingConfiguration being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for loggingConfiguration');
        if (input.name === null || input.name === undefined) {
            const _err = { errorMessage: 'The property `name` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.origin === null || input.origin === undefined) {
            const _err = { errorMessage: 'The property `origin` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.activate === null || input.activate === undefined) {
            const _err = { errorMessage: 'The property `activate` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for loggingConfiguration');
        const _baseUri = _configuration.getBaseUri(_servers.PATH);

        let _queryBuilder = `${_baseUri}${'/s/l'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            name: input.name,
            origin: input.origin,
            activate: input.activate,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for loggingConfiguration');
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
        _logger.debug(`'Raw request for loggingConfiguration  > ${JSON.stringify(_options)}'`);
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for loggingConfiguration...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'loggingConfiguration');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for loggingConfiguration...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for loggingConfiguration');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'LoggingSetupModelResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for loggingConfiguration ');
                    errorResponse = _baseController.validateResponse(_context, 'loggingConfiguration');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * WAF Log Info
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['name'] Name of your WAF zone
     * @param {string} input['origin'] IP Address of the Web Application
     * @param {string} input['time'] (optional) Specific times or dates to lookup separated by a
     * comma in MMDDYYHHMMSS Format ( Month Month Day Day Year Year
     * Year Hour Hour Minute Minute Second Second [01/01/0101;24:59:
     * 01])
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static loggingInfo(input, callback) {
        _logger.info('loggingInfo being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for loggingInfo');
        if (input.name === null || input.name === undefined) {
            const _err = { errorMessage: 'The property `name` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.origin === null || input.origin === undefined) {
            const _err = { errorMessage: 'The property `origin` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for loggingInfo');
        const _baseUri = _configuration.getBaseUri(_servers.PATH);

        let _queryBuilder = `${_baseUri}${'/s/l/i'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            name: input.name,
            origin: input.origin,
            time: input.time,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for loggingInfo');
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
        _logger.debug(`'Raw request for loggingInfo  > ${JSON.stringify(_options)}'`);
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for loggingInfo...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'loggingInfo');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for loggingInfo...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for loggingInfo');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'LoggingLogsModelResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for loggingInfo ');
                    errorResponse = _baseController.validateResponse(_context, 'loggingInfo');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = AdvancedLogging;
