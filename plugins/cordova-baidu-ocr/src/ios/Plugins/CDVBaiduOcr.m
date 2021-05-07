//
//  CDVBaiduOcr.m
//  myTestCordova
//
//  Created by hankers.yan on 2020/2/28.
//

#import <Cordova/CDV.h>
#import "CDVBaiduOcr.h"
#import <objc/runtime.h>
#import <AipOcrSdk/AipOcrSdk.h>

BOOL hasGotToken = NO;
NSString* currentCommandCallbackId;
// 默认的识别成功的回调
void (^_successHandler)(id);
// 默认的识别失败的回调
void (^_failHandler)(NSError *);

@implementation CDVBaiduOcr {
}

- (void)init:(CDVInvokedUrlCommand *)command {

    NSMutableDictionary* resultDic = [NSMutableDictionary dictionary];

    // 授权方法1：在此处填写App的Api Key/Secret Key
    //[[AipOcrService shardService] authWithAK:@"AK" andSK:@"SK"];


    // 授权方法2（更安全）： 下载授权文件，添加至资源
    NSString *licenseFile = [[NSBundle mainBundle] pathForResource:@"aip" ofType:@"license"];
    NSData *licenseFileData = [NSData dataWithContentsOfFile:licenseFile];
    if(!licenseFileData) {
        //[[[UIAlertView alloc] initWithTitle:@"授权失败" message:@"授权文件不存在" delegate:nil cancelButtonTitle:@"确定" otherButtonTitles:nil] show];

        resultDic[@"code"] = @(-1);
        resultDic[@"message"] = @"授权文件不存在";
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:resultDic];

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        return;
    }
    [[AipOcrService shardService] authWithLicenseFileData:licenseFileData];
    
    __weak CDVPlugin* ws = self;
    
    _successHandler = ^(id result){
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:result];

        [ws.commandDelegate sendPluginResult:pluginResult callbackId:currentCommandCallbackId];

        dispatch_async(dispatch_get_main_queue(), ^{
            [ws.viewController dismissViewControllerAnimated:YES completion:nil];
        });
    };
    
    _failHandler = ^(NSError *error){
        NSMutableDictionary* resultDic = [NSMutableDictionary dictionary];

        resultDic[@"code"] = @(-1);
        resultDic[@"message"] = @"读取失败";
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:resultDic];

        [ws.commandDelegate sendPluginResult:pluginResult callbackId:currentCommandCallbackId];

        dispatch_async(dispatch_get_main_queue(), ^{
            [ws.viewController dismissViewControllerAnimated:YES completion:nil];
        });
    };

    //获取token回调
    [[AipOcrService shardService] getTokenSuccessHandler:^(NSString *token) {
        NSLog(@"获取token成功: %@",token);
        hasGotToken = YES;
        
        resultDic[@"code"] = @(0);
        resultDic[@"message"] = @"获取token成功";
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:resultDic];

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    } failHandler:^(NSError *error) {
        NSLog(@"获取token失败: %@",error);
        resultDic[@"code"] = @(-1);
        resultDic[@"message"] = @"获取token失败";
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:resultDic];

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        hasGotToken = NO;
    }];

}

- (void)scanId:(CDVInvokedUrlCommand *)command {

    NSDictionary *param = [command argumentAtIndex:0];

    NSMutableDictionary* resultDic = [NSMutableDictionary dictionary];

    NSMutableString *contentType = nil;
    BOOL nativeEnable = YES;

    //默认为本地质量扫描正面
    CardType cardType = CardTypeLocalIdCardFont;

    //必须初始化
    if(!hasGotToken) {
        resultDic[@"code"] = @(-1);
        resultDic[@"message"] = @"please init ocr";
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:resultDic];

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        return;
    }

    //如果未找到contentType属性则直接返回错误
    if(param == nil || param[@"contentType"] == nil) {
        resultDic[@"code"] = @(-1);
        resultDic[@"message"] = @"contentType is null";
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:resultDic];

        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        return;
    }

    //获取扫描类型，正面还是反面
    contentType = param[@"contentType"];
    //获取是否使用本地质量控制
    nativeEnable = param[@"nativeEnable"];

    if([contentType isEqualToString:@"IDCardFront"]) {
        if(nativeEnable){
            cardType = CardTypeLocalIdCardFont;
        }else{
            cardType = CardTypeIdCardFont;
        }
    } else if ([contentType isEqualToString:@"IDCardBack"]) {
        if(nativeEnable){
            cardType = CardTypeLocalIdCardBack;
        }else{
            cardType = CardTypeIdCardBack;
        }
    }

    UIViewController * vc =
    [AipCaptureCardVC ViewControllerWithCardType:cardType andImageHandler:^(UIImage *image){
        [[AipOcrService shardService] detectIdCardFrontFromImage:image withOptions:nil successHandler:^(id result){
            NSLog(@"%@", result);

            CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsDictionary:result];

            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];

            //回到主线程
            dispatch_async(dispatch_get_main_queue(), ^{
                [self.viewController dismissViewControllerAnimated:YES completion:nil];
            });
        } failHandler:^(NSError *error){
            NSLog(@"读取身份证失败：%@",error);
            resultDic[@"code"] = @(-1);
            resultDic[@"message"] = @"读取身份证失败";
            CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:resultDic];

            [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
        }];
    }];
    [self.viewController presentViewController:vc animated:YES completion:nil];
}

- (void)destroy:(CDVInvokedUrlCommand *)command {
    return;
}

- (void)scanBankCard:(CDVInvokedUrlCommand *)command {
    currentCommandCallbackId = command.callbackId;

    UIViewController * vc =
            [AipCaptureCardVC ViewControllerWithCardType:CardTypeBankCard
                                         andImageHandler:^(UIImage *image) {
                                             [[AipOcrService shardService] detectBankCardFromImage:image
                                                                                    successHandler:_successHandler
                                                                                       failHandler:_failHandler];
                                         }];
    [self.viewController presentViewController:vc animated:YES completion:nil];
}

- (void)scanVehicleLicense:(CDVInvokedUrlCommand *)command {
    currentCommandCallbackId = command.callbackId;

    UIViewController * vc = [AipGeneralVC ViewControllerWithHandler:^(UIImage *image) {

        [[AipOcrService shardService] detectVehicleLicenseFromImage:image
                                      withOptions:nil
                                   successHandler:_successHandler
                                      failHandler:_failHandler];
    }];
    [self.viewController presentViewController:vc animated:YES completion:nil];
}

- (void)scanDrivingLicense:(CDVInvokedUrlCommand *)command {
    currentCommandCallbackId = command.callbackId;

    UIViewController * vc = [AipGeneralVC ViewControllerWithHandler:^(UIImage *image) {

        [[AipOcrService shardService] detectDrivingLicenseFromImage:image
                                      withOptions:nil
                                   successHandler:_successHandler
                                      failHandler:_failHandler];
    }];
    [self.viewController presentViewController:vc animated:YES completion:nil];
}

- (void)scanLicensePlate:(CDVInvokedUrlCommand *)command {
    currentCommandCallbackId = command.callbackId;

    UIViewController * vc = [AipGeneralVC ViewControllerWithHandler:^(UIImage *image) {

        [[AipOcrService shardService] detectPlateNumberFromImage:image
                                      withOptions:nil
                                   successHandler:_successHandler
                                      failHandler:_failHandler];
    }];
    [self.viewController presentViewController:vc animated:YES completion:nil];
}

- (void)scanBusinessLicense:(CDVInvokedUrlCommand *)command {
    currentCommandCallbackId = command.callbackId;

    UIViewController * vc = [AipGeneralVC ViewControllerWithHandler:^(UIImage *image) {

        [[AipOcrService shardService] detectBusinessLicenseFromImage:image
                                      withOptions:nil
                                   successHandler:_successHandler
                                      failHandler:_failHandler];
    }];
    [self.viewController presentViewController:vc animated:YES completion:nil];
}

- (void)scanReceipt:(CDVInvokedUrlCommand *)command {
    currentCommandCallbackId = command.callbackId;

    UIViewController * vc = [AipGeneralVC ViewControllerWithHandler:^(UIImage *image) {

        [[AipOcrService shardService] detectReceiptFromImage:image
                                      withOptions:nil
                                   successHandler:_successHandler
                                      failHandler:_failHandler];
    }];
    [self.viewController presentViewController:vc animated:YES completion:nil];
}

@end
