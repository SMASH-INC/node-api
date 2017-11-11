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

class UserManagement {
    /**
     * Get User Info API
     *
     * @param {string} user Users User ID
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static getUserInfo(user, callback) {
        _logger.info('getUserInfo being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for getUserInfo');
        if (user === null || user === undefined) {
            const _err = { errorMessage: 'The parameter `user` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for getUserInfo');
        const _baseUri = _configuration.getBaseUri(_servers.PATH);

        let _queryBuilder = `${_baseUri}${'/u/i'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            user,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for getUserInfo');
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
        _logger.debug(`'Raw request for getUserInfo  > ${JSON.stringify(_options)}'`);
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for getUserInfo...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'getUserInfo');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for getUserInfo...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for getUserInfo');
                    parsed = _baseController.getObjectMapper()
                .mapObject(parsed, 'UserInformationModelResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for getUserInfo ');
                    errorResponse = _baseController.validateResponse(_context, 'getUserInfo');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Update User API
     *
     * @param  {array}  input    Array with all options for search
     * @param {string} input['user'] Users UID, Username, Or Email
     * @param {string} input['avatar'] Avatar Image URL
     * @param {string} input['customInput'] Custom input variable for users profile
     * @param    {Dictionary}  queryParameters    Additional optional query parameters are supported
     * by this endpoint
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static updateUser(input, queryParameters, callback) {
        _logger.info('updateUser being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for updateUser');
        if (input.user === null || input.user === undefined) {
            const _err = { errorMessage: 'The property `user` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.avatar === null || input.avatar === undefined) {
            const _err = { errorMessage: 'The property `avatar` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        } else if (input.customInput === null || input.customInput === undefined) {
            const _err = { errorMessage: 'The property `customInput` in the input object cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for updateUser');
        const _baseUri = _configuration.getBaseUri(_servers.PATH);

        let _queryBuilder = `${_baseUri}${'/u/u'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            user: input.user,
            avatar: input.avatar,
            customInput: input.customInput,
        });

        // append optional parameters to the query
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder,
            queryParameters == null ? null : queryParameters);

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for updateUser');
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
        _logger.debug(`'Raw request for updateUser  > ${JSON.stringify(_options)}'`);
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for updateUser...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'updateUser');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for updateUser...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for updateUser');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'UserUpdateModelResponse');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for updateUser ');
                    errorResponse = _baseController.validateResponse(_context, 'updateUser');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

    /**
     * Delete User API
     *
     * @param {string} user Users UID, Username, or Email
     *
     * @callback    The callback function that returns response from the API call
     *
     * @returns {Promise}
     */
    static deleteUser(user, callback) {
        _logger.info('deleteUser being called');
        // create empty callback if absent
        const _callback = typeof callback === 'function' ? callback : () => undefined;

        // validating required parameters
        _logger.info('Validating required parameters for deleteUser');
        if (user === null || user === undefined) {
            const _err = { errorMessage: 'The parameter `user` is a required parameter and cannot be null.',
                errorCode: -1 };
            _callback(_err, null, null);
            return Promise.reject(_err);
        }
        // prepare query string for API call
        _logger.info('Preparing Query URL for deleteUser');
        const _baseUri = _configuration.getBaseUri(_servers.PATH);

        let _queryBuilder = `${_baseUri}${'/u/d'}`;

        // process query parameters
        _queryBuilder = _apiHelper.appendUrlWithQueryParameters(_queryBuilder, {
            user,
        });

        // validate and preprocess url
        const _queryUrl = _apiHelper.cleanUrl(_queryBuilder);

        // prepare headers
        _logger.info('Preparing headers for deleteUser');
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
        _logger.debug(`'Raw request for deleteUser  > ${JSON.stringify(_options)}'`);
        // append custom auth authorization
        _customAuthUtility.appendCustomAuthParams(_options);


        // build the response processing.
        return new Promise((_fulfill, _reject) => {
            _logger.info('Sending request for deleteUser...');
            _request(_options, (_error, _response, _context) => {
                let errorResponse;
                if (_error) {
                    _logger.error(_error);
                    errorResponse = _baseController.validateResponse(_context, 'deleteUser');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                    _logger.debug(`'Raw response for deleteUser...  > ${JSON.stringify(_response)}'`);
                    let parsed = JSON.parse(_response.body);
                    _logger.info('Deserializing response for deleteUser');
                    parsed = _baseController.getObjectMapper().mapObject(parsed, 'UserDeletionResponseModel');
                    _callback(null, parsed, _context);
                    _fulfill(parsed);
                } else {
                    _logger.info('Validating response for deleteUser ');
                    errorResponse = _baseController.validateResponse(_context, 'deleteUser');
                    _callback(errorResponse.error, errorResponse.response, errorResponse.context);
                    _reject(errorResponse.error);
                }
            });
        });
    }

}

module.exports = UserManagement;
