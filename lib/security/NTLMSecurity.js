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
var NTLMSecurity = /** @class */ (function () {
    function NTLMSecurity(username, password, domain, workstation) {
        if (typeof username === 'object') {
            this.defaults = username;
            this.defaults.ntlm = true;
        }
        else {
            this.defaults = {
                ntlm: true,
                username: username,
                password: password,
                domain: domain,
                workstation: workstation
            };
        }
    }
    NTLMSecurity.prototype.addHeaders = function (headers) {
        headers.Connection = 'keep-alive';
    };
    NTLMSecurity.prototype.toXML = function () {
        return '';
    };
    NTLMSecurity.prototype.addOptions = function (options) {
        _.merge(options, this.defaults);
    };
    return NTLMSecurity;
}());
exports.NTLMSecurity = NTLMSecurity;
//# sourceMappingURL=NTLMSecurity.js.map