"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
exports.__esModule = true;
var crypto = __importStar(require("crypto"));
function passwordDigest(nonce, created, password) {
    // digest = base64 ( sha1 ( nonce + created + password ) )
    var pwHash = crypto.createHash('sha1');
    var NonceBytes = Buffer.from(nonce || '', 'base64');
    var CreatedBytes = Buffer.from(created || '', 'utf8');
    var PasswordBytes = Buffer.from(password || '', 'utf8');
    var FullBytes = Buffer.concat([NonceBytes, CreatedBytes, PasswordBytes]);
    pwHash.update(FullBytes);
    return pwHash.digest('base64');
}
exports.passwordDigest = passwordDigest;
exports.TNS_PREFIX = '__tns__'; // Prefix for targetNamespace
/**
 * Find a key from an object based on the value
 * @param {Object} Namespace prefix/uri mapping
 * @param {*} nsURI value
 * @returns {String} The matching key
 */
function findPrefix(xmlnsMapping, nsURI) {
    for (var n in xmlnsMapping) {
        if (n === exports.TNS_PREFIX) {
            continue;
        }
        if (xmlnsMapping[n] === nsURI) {
            return n;
        }
    }
}
exports.findPrefix = findPrefix;
function splitQName(nsName) {
    if (typeof nsName !== 'string') {
        return {
            prefix: exports.TNS_PREFIX,
            name: nsName
        };
    }
    var topLevelName = nsName.split('|')[0];
    var prefixOffset = topLevelName.indexOf(':');
    return {
        prefix: topLevelName.substring(0, prefixOffset) || exports.TNS_PREFIX,
        name: topLevelName.substring(prefixOffset + 1)
    };
}
exports.splitQName = splitQName;
//# sourceMappingURL=utils.js.map