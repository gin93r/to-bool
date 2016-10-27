'use strict'

/**
 * Converts common "boolean" values to true or false
 * @param  {object} v
 * @return {bool}
 */
module.exports = function(b)
{
    if(typeof(b) == "string") b = b.toLowerCase();
    switch(b)
    {
        case 0:
        case "0":
        case false:
        case "false":
        case undefined:
        case null:
            return false;
        case 1:
        case "1":
        case true:
        case "true":
            return true;
        default:
            throw new Error("Could not convert '" + b + "' into a boolean.");
    }
};