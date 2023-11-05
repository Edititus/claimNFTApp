import 'regenerator-runtime/runtime';
import { InstanceWithExtensions, MagicSDKExtensionsOption } from '@magic-sdk/provider';
import { SDKBaseReactNative } from './react-native-sdk-base';
export * from '@magic-sdk/commons';
export declare const Magic: import("@magic-sdk/provider").WithExtensions<SDKBaseReactNative>;
export declare type Magic<T extends MagicSDKExtensionsOption<any> = MagicSDKExtensionsOption> = InstanceWithExtensions<SDKBaseReactNative, T>;
