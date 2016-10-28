var _b = require("@gin93r/to-bool");

var a = _b("false"),
    b = _b("0"),
    c = _b(1),
    d = _b("true"),
    e = _b(undefined),
    f = _b(null),
    g = _b(undefined, {treatUndefinedAsFalse: false});
if(console) console.log(a,b,c,d,e,f,g);