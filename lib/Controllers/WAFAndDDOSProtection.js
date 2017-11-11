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

class WAFAndDDOSProtection {
    /**
     * WAF and DDOS Configuration
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['name'] Name of your WAF zone
     * @param {string} input['rule'] Rule or rules to add or update separated by a comma
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static wAFConfiguration(input, callback) {
        _logger.info('wAFConfiguration being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for wAFConfiguration');
        if (input.name === null || input.name === undefined) {
            const _err = { errorMessage: 'The property `name` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.rule === null || input.rule === undefined) {
            const _err = { errorMessage: 'The property `rule` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for wAFConfiguration');
        const _baseUri = _configuration.getBaseUri(_servers.PATH);

        let _queryBuilder = `${_baseUri}${'/s/w/c'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            name: input.name,
            rule: input.rule,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for wAFConfiguration');
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
        _logger.debug(`'Raw request for wAFConfiguration  > ${JSON.stringify(_options)}'`);
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for wAFConfiguration...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'wAFConfiguration');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for wAFConfiguration...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for wAFConfiguration');
                    parsed = _baseController.getObjectMapper()
                .mapObject(parsed, 'WAFConfigurationModelResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for wAFConfiguration ');
                    errorResponse = _baseController.validateResponse(_context, 'wAFConfiguration');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * WAF and DDOS Creation
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['origin'] IP of the Web server you wish to protect
     * @param {string} input['cname'] Domain or domain names separated by a comma you wish to allow
     * CNAME access
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static wAFCreation(input, callback) {
        _logger.info('wAFCreation being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for wAFCreation');
        if (input.origin === null || input.origin === undefined) {
            const _err = { errorMessage: 'The property `origin` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.cname === null || input.cname === undefined) {
            const _err = { errorMessage: 'The property `cname` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for wAFCreation');
        const _baseUri = _configuration.getBaseUri(_servers.PATH);

        let _queryBuilder = `${_baseUri}${'/s/w'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            origin: input.origin,
            cname: input.cname,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for wAFCreation');
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
        _logger.debug(`'Raw request for wAFCreation  > ${JSON.stringify(_options)}'`);
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for wAFCreation...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'wAFCreation');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for wAFCreation...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for wAFCreation');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'WAFCreationModelResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for wAFCreation ');
                    errorResponse = _baseController.validateResponse(_context, 'wAFCreation');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = WAFAndDDOSProtection;
