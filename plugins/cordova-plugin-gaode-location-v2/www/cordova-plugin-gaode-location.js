/*
 * @Author: 玖叁(N.T) 
 * @Date: 2017-10-25 17:12:55 
 * @Last Modified by: 玖叁(N.T)
 * @Last Modified time: 2017-10-29 13:24:06
 */
var exec = require('cordova/exec');

function isFunction(fn) {
    return Object.prototype.toString.call(fn)=== '[object Function]';
}

module.exports = {
    configLocation: function (param, success, error) {
        param = param || { };
        param.android = param.android || { };
        param.ios = param.ios || { };

        exec(success, error, "GaodeLocation", "configLocationManager", [param]);
    },
    getLocation: function(param, success, error) {
        if (isFunction(param)) {
            error = success;
            success = param;
            param = null;
        }
        exec(success, error, "GaodeLocation", "getLocation", [ ]);
    },
    watchLocation: function(success, error) {
        exec(success, error, "GaodeLocation", "watchLocation", []);
    },
    stopWatch: function(param, success, error) {
        exec(success, error, "GaodeLocation", "stopWatch", [param]);
    }
};
