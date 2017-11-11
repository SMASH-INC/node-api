/**
 * smash
 *
 * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
 */

'use strict';

const servers = require('./Servers');
const environments = require('./Environments');
const apiHelper = require('./APIHelper');

const environmentsMap = [];

environmentsMap[environments.PRODUCTION] = [];
environmentsMap[environments.SANDBOX] = [];
environmentsMap[environments.BETA] = [];

environmentsMap[environments.PRODUCTION][servers.PATH] = 'https://api.rest.sh/api';
environmentsMap[environments.SANDBOX][servers.PATH] = 'https://sb.rest.sh/api';
environmentsMap[environments.BETA][servers.PATH] = 'https://b.rest.sh/api';

const Configuration = {
    // Your user ID
    uid: 'UID',

    // Your Private API Key
    secret: 'SECRET',

    // Your Public API Key
    key: 'KEY',

    /**
     * Current API environment
     * @type {string}
     */
    currentEnvironment: environments.PRODUCTION,

    /**
     * Get base URI for a server in the current API environment
     * @param  {string|null} server Server name
     * @return {string}             Base URI for server
     */
    getBaseUri(server) {
        const url = environmentsMap[this.currentEnvironment][server || servers.PATH];
        const urlParams = {
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    },
};

module.exports = Configuration;
