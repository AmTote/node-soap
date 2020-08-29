"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var _ = __importStar(require("lodash"));
var BasicAuthSecurity = /** @class */ (function () {
    function BasicAuthSecurity(username, password, defaults) {
        this._username = username;
        this._password = password;
        this.defaults = {};
        _.merge(this.defaults, defaults);
    }
    BasicAuthSecurity.prototype.addHeaders = function (headers) {
        headers.Authorization = 'Basic ' + new Buffer((this._username + ':' + this._password) || '').toString('base64');
    };
    BasicAuthSecurity.prototype.toXML = function () {
        return '';
    };
    BasicAuthSecurity.prototype.addOptions = function (options) {
        _.merge(options, this.defaults);
    };
    return BasicAuthSecurity;
}());
exports.BasicAuthSecurity = BasicAuthSecurity;
//# sourceMappingURL=BasicAuthSecurity.js.map