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

class LoginAndRegistration {
    /**
     * User Registration API
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['email'] Users Email
     * @param {string} input['user'] Users Username
     * @param {string} input['password'] Users Password
     * @param {string} input['name'] (optional) Users Name
     * @param {int} input['phone'] (optional) Users Cellphone Number
     * @param {int} input['countrycode'] (optional) Users Country Code (US = 1)
     * @param {string} input['address'] (optional) Users Address
     * @param    {Dictionary}  queryParameters    Additional optional query parameters are supported
     * by this endpoint
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static userRegistration(input, queryParameters, callback) {
        _logger.info('userRegistration being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for userRegistration');
        if (input.email === null || input.email === undefined) {
            const _err = { errorMessage: 'The property `email` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.user === null || input.user === undefined) {
            const _err = { errorMessage: 'The property `user` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.password === null || input.password === undefined) {
            const _err = { errorMessage: 'The property `password` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for userRegistration');
        const _baseUri = _configuration.getBaseUri(_servers.PATH);

        let _queryBuilder = `${_baseUri}${'/a/u/r'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            email: input.email,
            user: input.user,
            password: input.password,
            name: input.name,
            phone: input.phone,
            countrycode: input.countrycode,
            address: input.address,
        });

        // append optional parameters to the query
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder,
            queryParameters == null ? null : queryParameters);

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for userRegistration');
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
        _logger.debug(`'Raw request for userRegistration  > ${JSON.stringify(_options)}'`);
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for userRegistration...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'userRegistration');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for userRegistration...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for userRegistration');
                    parsed = _baseController.getObjectMapper()
                .mapObject(parsed, 'UserRegistrationModelResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for userRegistration ');
                    errorResponse = _baseController.validateResponse(_context, 'userRegistration');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * User Authentication API
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['user'] Users Username or Email
     * @param {string} input['password'] Users Password
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static userAuthentication(input, callback) {
        _logger.info('userAuthentication being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for userAuthentication');
        if (input.user === null || input.user === undefined) {
            const _err = { errorMessage: 'The property `user` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.password === null || input.password === undefined) {
            const _err = { errorMessage: 'The property `password` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for userAuthentication');
        const _baseUri = _configuration.getBaseUri(_servers.PATH);

        let _queryBuilder = `${_baseUri}${'/a/u/l'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            user: input.user,
            password: input.password,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for userAuthentication');
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
        _logger.debug(`'Raw request for userAuthentication  > ${JSON.stringify(_options)}'`);
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for userAuthentication...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'userAuthentication');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for userAuthentication...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for userAuthentication');
                    parsed = _baseController.getObjectMapper()
                .mapObject(parsed, 'UserAuthenticationModelResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for userAuthentication ');
                    errorResponse = _baseController.validateResponse(_context, 'userAuthentication');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = LoginAndRegistration;
