/**
 * cordova is available under the MIT License (2008).
 * See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) Matt Kane 2010
 * Copyright (c) 2011, IBM Corporation
 * Copyright (c) 2012-2017, Adobe Systems
 */


var exec = cordova.require("cordova/exec");


var BaiduOcr = {
    /**
     * 初始化ocr
     * @param successCallback
     * @param errorCallback
     */
    init: function (successCallback, errorCallback) {


        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.init failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.init failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'init');
    },
    /**
     * 扫描身份证
     * @param successCallback
     * @param errorCallback
     * @param params 其中的contentType取值： IDCardFront(正面),IDCardBack(反面)
     */
    scanId: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanId failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanId failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanId', [params]);
    },
    /**
     * 扫描银行卡
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanBankCard: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanBankCard failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanBankCard failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanBankCard', [params]);
    },
    /**
     * 扫描行驶证
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanVehicleLicense: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanVehicleLicense failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanVehicleLicense failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanVehicleLicense', [params]);
    },
    /**
     * 扫描驾驶证
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanDrivingLicense: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanDrivingLicense failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanDrivingLicense failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanDrivingLicense', [params]);
    },
    /**
     * 扫描车牌
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanLicensePlate: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanLicensePlate failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanLicensePlate failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanLicensePlate', [params]);
    },
    /**
     * 扫描营业执照
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanBusinessLicense: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanBusinessLicense failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanBusinessLicense failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanBusinessLicense', [params]);
    },
    /**
     * 扫描通用票据
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanReceipt: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanReceipt failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanReceipt failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanReceipt', [params]);
    },
    /**
     * 扫描护照
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanPassport: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanPassport failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanPassport failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanPassport', [params]);
    },
    /**
     * 扫描数字
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanNumbers: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanNumbers failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanNumbers failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanNumbers', [params]);
    },
    /**
     * 扫描二维码
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanQrCode: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanQrCode failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanQrCode failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanQrCode', [params]);
    },
    /**
     * 扫描名片
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanBusinessCard: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanBusinessCard failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanBusinessCard failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanBusinessCard', [params]);
    },
    /**
     * 扫描手写
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanHandWriting: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanHandWriting failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanHandWriting failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanHandWriting', [params]);
    },
    /**
     * 扫描彩票
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanLottery: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanLottery failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanLottery failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanLottery', [params]);
    },
    /**
     * 扫描增值税发票
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanVatInvoice: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanVatInvoice failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanVatInvoice failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanVatInvoice', [params]);
    },
    /**
     * 扫描自定义模板
     * @param successCallback
     * @param errorCallback
     * @param
     */
    scanCustom: function (params, successCallback, errorCallback) {

        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.scanCustom failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.scanCustom failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'scanCustom', [params]);
    },
    /**
     * 销毁
     * @param successCallback
     * @param errorCallback
     */
    destroy: function (successCallback, errorCallback) {
        if (errorCallback == null) {
            errorCallback = function () {
            };
        }

        if (typeof errorCallback !== "function") {
            console.log("BaiduOcr.destroy failure: failure parameter not a function");
            return;
        }

        if (typeof successCallback !== "function") {
            console.log("BaiduOcr.destroy failure: success callback parameter must be a function");
            return;
        }

        exec(successCallback, errorCallback, 'BaiduOcr', 'destroy');
    }
};

module.exports = BaiduOcr;
