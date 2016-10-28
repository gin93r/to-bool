"use strict";

module.exports = function (val) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$treatUndefinedAs = _ref.treatUndefinedAsFalse,
        treatUndefinedAsFalse = _ref$treatUndefinedAs === undefined ? true : _ref$treatUndefinedAs,
        _ref$treatNullAsFalse = _ref.treatNullAsFalse,
        treatNullAsFalse = _ref$treatNullAsFalse === undefined ? true : _ref$treatNullAsFalse;

    // if a string is passed we want to convert it to lower case
    // if(console) console.group("testing options:");
    // if(console) console.log(treatUndefinedAsFalse);
    // if(console) console.log(treatNullAsFalse);
    // if(console) console.groupEnd();

    if (typeof val == "string") val = val.toLowerCase();
    switch (val) {
        case 0:
        case "0":
        case false:
        case "false":
        case undefined:
            return treatUndefinedAsFalse ? false : undefined;
        case null:
            return treatNullAsFalse ? false : null;
        case 1:
        case "1":
        case true:
        case "true":
            return true;
        default:
            throw new Error("Could not convert '" + val + "' into a boolean.");
    }
};