package com.yourapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.NativeModuleRegistry
import com.facebook.react.bridge.ReactNativeHost
import com.facebook.react.bridge.ReactModuleRegistryProvider

class SriPackage : ReactPackage {
    fun createNativeModules(reactContext: ReactApplicationContext?): List<NativeModule> {
        return listOf<NativeModule>(sri(reactContext))
    }

    fun createViewManagers(reactContext: ReactApplicationContext?): List<ViewManager> {
        return emptyList<ViewManager>()
    }
}