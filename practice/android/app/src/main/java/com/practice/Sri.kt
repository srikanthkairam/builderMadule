package com.yourapp

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class Sri internal constructor(reactContext: ReactApplicationContext?) :
    ReactContextBaseJavaModule(reactContext) {
    val name: String
        get() = "Sri"

    @ReactMethod
    fun show(message: String?) {
        Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show()
    }
}