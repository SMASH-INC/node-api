/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const logger = require('winston');
const _objectMapper = require('../ObjectMapper');

const _objectMapperInstance = new _objectMapper();

class BaseController {
    /**
     * Get ObjectMapper instance
     * @return {ObjectMapper} Shared instance
     */
    static getObjectMapper() {
        return _objectMapperInstance;
    }

     /**
     * Helper function to print error logging messages
     * @param    {number}    code        The error code which needs to be logged
     * @param    {string}    endpName    The name of endpoint making the call
     */
    static printErrorLog(code, endpName) {
        logger.error(`'Status code: ${code} received for ${endpName}.`);
    }

    /**
     * Global error handling
     * @param   {HttpContext}   _context   HttpContext containing request and response objects
     * @param   {string}        endpName   Name of the endpoint called
     * @callback    Callback function which returns error, response, context
     */
    static validateResponse(_context, endpName) {
        const errorObj = {
            errorMessage: '',
            errorCode: '',
            errorResponse: _context.response.body,
        };
        const returnObj = {
            error: errorObj,
            response: null,
            context: _context,
        };

        BaseController.printErrorLog(_context.response.statusCode, endpName);

        if (_context.response.statusCode === 400) {
            returnObj.error.errorMessage = 'Bad Request';
            returnObj.error.errorCode = 400;
        } else if (_context.response.statusCode === 401) {
            returnObj.error.errorMessage = 'Incorrect Credentials';
            returnObj.error.errorCode = 401;
        } else if (_context.response.statusCode === 403) {
            returnObj.error.errorMessage = 'Forbidden';
            returnObj.error.errorCode = 403;
        } else if (_context.response.statusCode === 406) {
            returnObj.error.errorMessage = 'Not Acceptable Input';
            returnObj.error.errorCode = 406;
        } else if (_context.response.statusCode === 409) {
            returnObj.error.errorMessage = 'Data Conflict';
            returnObj.error.errorCode = 409;
        } else if (_context.response.statusCode === 413) {
            returnObj.error.errorMessage = 'Payload Too Large';
            returnObj.error.errorCode = 413;
        } else if (_context.response.statusCode === 415) {
            returnObj.error.errorMessage = 'Un-Supported Content Type';
            returnObj.error.errorCode = 415;
        } else if (_context.response.statusCode === 451) {
            returnObj.error.errorMessage = 'Un-Available For Legal Reasons';
            returnObj.error.errorCode = 451;
        } else if (_context.response.statusCode === 500) {
            returnObj.error.errorMessage = 'Internal API Error';
            returnObj.error.errorCode = 500;
        } else if (_context.response.statusCode === 501) {
            returnObj.error.errorMessage = 'Not Implemented';
            returnObj.error.errorCode = 501;
        } else if (_context.response.statusCode === 503) {
            returnObj.error.errorMessage = 'API Unavailable';
            returnObj.error.errorCode = 503;
        } else if (_context.response.statusCode === 504) {
            returnObj.error.errorMessage = 'Request Timeout';
            returnObj.error.errorCode = 504;
        } else if (_context.response.statusCode === 511) {
            returnObj.error.errorMessage = 'Authentication Required';
            returnObj.error.errorCode = 511;
        } else {
            returnObj.error.errorMessage = 'HTTP Response Not OK';
            returnObj.error.errorCode = _context.response.statusCode;
        }

        return returnObj;
    }
}

module.exports = BaseController;
