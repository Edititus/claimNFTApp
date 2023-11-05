import React from 'react';
import { ViewController } from '@magic-sdk/provider';
/**
 * View controller for the Magic `<WebView>` overlay.
 */
export declare class ReactNativeWebViewController extends ViewController {
    private webView;
    private container;
    private styles;
    protected init(): void;
    /**
     * Renders a React Native `<WebView>` with built-in message handling to and
     * from the Magic `<iframe>` context.
     */
    Relayer: React.FC;
    /**
     * Route incoming messages from a React Native `<WebView>`.
     */
    private handleReactNativeWebViewMessage;
    protected hideOverlay(): void;
    protected showOverlay(): void;
    protected _post(data: any): Promise<void>;
}
