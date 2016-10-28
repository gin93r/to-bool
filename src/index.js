module.exports = function(val, {treatUndefinedAsFalse = true, treatNullAsFalse = true} = {})
{
    if(typeof(val) == "string") val = val.toLowerCase();
    switch(val)
    {
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
}