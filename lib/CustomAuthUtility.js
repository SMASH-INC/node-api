/**
  * smash
  *
  * This file was automatically generated for the SMASH API by SMASH, INC ( https://smashlabs.io )
  */

'use strict';

// const Configuration = require('./Configuration');

class CustomAuthUtility {
    /**
     * Appends the necessary custom credentials for making this authorized call
     * @param    {HttpRequest} request    The outgoing request to access the resource
     * @return   {void}                   Does not return anything
     */
    static appendCustomAuthParams(/* request */) {
        // TODO: Add your custom authentication here
        // the following properties are available to use
        // Configuration.uid
        // Configuration.secret
        // Configuration.key
        // ie. add a header through:
        // request.headers["key"] = "value"

    }
}

module.exports = CustomAuthUtility;
