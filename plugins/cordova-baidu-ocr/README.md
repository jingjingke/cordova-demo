# Cordova Baidu OCR 文字识别插件
================================

百度云OCR的cordova插件，iOS和android能识别身份证、银行卡、行驶证、驾驶证、车牌、营业执照、通用票据，android还能识别护照、数字、二维码、名片、手写、彩票、增值税发票。


## Installation


1、Run

    cordova plugin add cordova-baidu-ocr

Or

    cordova plugin add https://github.com/hankersyan/cordova-baidu-ocr.git

2、Baidu云申请并下载aip.license授权文件。注意：id应匹配。

3、在config.xml里添加license文件的resource-file，注意：修改PATH/TO/

    <platform name="android">
        <resource-file src="PATH/TO/aip-android.license" target="app/src/main/assets/aip.license" />
    </platform>
    <platform name="ios">
        <resource-file src="PATH/TO/aip-ios.license" target="aip.license" />
    </platform>

### Supported Platforms

- Android
- iOS


### Using the plugin ###

A full example could be:

初始化（init）：
```js
    BaiduOcr.init(
        ()=>{
            console.log('init ok');
        },
        (error)=>{
            console.log(error)
        })
```
销毁本地控制模型（destroy）：
```js
    BaiduOcr.destroy(
        ()=>{
            console.log('destroy ok');
        },
        (error)=>{
            console.log(error)
        });
```
扫描身份证（scan id card）:
```js
    //默认使用的是本地质量控制，如果想使用拍照的方式，可以修改参数为
    //nativeEnable:false,nativeEnableManual:false
    BaiduOcr.scanId(
        {
            contentType:"IDCardFront", // 背面传 IDCardBack
            nativeEnable:true,
            nativeEnableManual:true
        },
        (result)=>{
            console.log(JSON.stringify(result));
        },
        (error)=>{
            console.log(error)
        });
```
扫描银行卡:
```js
    BaiduOcr.scanBankCard({}, (result)=>{
        console.log(JSON.stringify(result));
    },
    (error)=>{
        console.log(JSON.stringify(error));
    });
```
扫描行驶证:
```js
    BaiduOcr.scanVehicleLicense({}, (result)=>{
        console.log(JSON.stringify(result));
    },
    (error)=>{
        console.log(JSON.stringify(error));
    });
```
扫描驾驶证:
```js
    BaiduOcr.scanDrivingLicense({}, (result)=>{
        console.log(JSON.stringify(result));
    },
    (error)=>{
        console.log(JSON.stringify(error));
    });
```
扫描车牌:
```js
    BaiduOcr.scanLicensePlate({}, (result)=>{
        console.log(JSON.stringify(result));
    },
    (error)=>{
        console.log(JSON.stringify(error));
    });
```
扫描营业执照:
```js
    BaiduOcr.scanBusinessLicense({}, (result)=>{
        console.log(JSON.stringify(result));
    },
    (error)=>{
        console.log(JSON.stringify(error));
    });
```
扫描通用票据:
```js
    BaiduOcr.scanReceipt({}, (result)=>{
        console.log(JSON.stringify(result));
    },
    (error)=>{
        console.log(JSON.stringify(error));
    });
```
Android还支持以下方法:
```js
//护照
scanPassport
//数字
scanNumbers
//二维码
scanQrCode
//名片
scanBusinessCard
//手写
scanHandWriting
//彩票
scanLottery
//增值税发票
scanVatInvoice
```
