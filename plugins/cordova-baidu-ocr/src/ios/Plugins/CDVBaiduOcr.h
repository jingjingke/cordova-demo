//
//  CDVBaiduOcr.h
//  myTestCordova
//
//  Created by hankers.yan on 2020/2/28.
//

#import <UIKit/UIKit.h>
#import <Cordova/CDVPlugin.h>

@interface CDVBaiduOcr : CDVPlugin

- (void)init:(CDVInvokedUrlCommand *)command;
- (void)scanId:(CDVInvokedUrlCommand *)command;
- (void)destroy:(CDVInvokedUrlCommand *)command;

- (void)scanBankCard:(CDVInvokedUrlCommand *)command;
- (void)scanVehicleLicense:(CDVInvokedUrlCommand *)command;
- (void)scanDrivingLicense:(CDVInvokedUrlCommand *)command;
- (void)scanLicensePlate:(CDVInvokedUrlCommand *)command;
- (void)scanBusinessLicense:(CDVInvokedUrlCommand *)command;
- (void)scanReceipt:(CDVInvokedUrlCommand *)command;

@end
