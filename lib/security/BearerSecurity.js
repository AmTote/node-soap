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
var BearerSecurity = /** @class */ (function () {
    function BearerSecurity(token, defaults) {
        this._token = token;
        this.defaults = {};
        _.merge(this.defaults, defaults);
    }
    BearerSecurity.prototype.addHeaders = function (headers) {
        headers.Authorization = 'Bearer ' + this._token;
    };
    BearerSecurity.prototype.toXML = function () {
        return '';
    };
    BearerSecurity.prototype.addOptions = function (options) {
        _.merge(options, this.defaults);
    };
    return BearerSecurity;
}());
exports.BearerSecurity = BearerSecurity;
//# sourceMappingURL=BearerSecurity.js.map