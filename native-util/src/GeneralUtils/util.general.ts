import * as Clipboard from 'expo-clipboard'
import * as SplashScreen from 'expo-splash-screen'
import { Platform } from 'react-native'
import * as Device from 'expo-device'
import Constants from 'expo-constants'
import { randomUUID } from 'expo-crypto'

class GeneralUtils {
  static async hideSplash() {
    try {
      await SplashScreen.hideAsync()
    } catch (error) {
      console.log(error)
    }
  }

  static getUUID() {
    return randomUUID()
  }

  static getDeviceDetails() {
    let deviceDetails = ''

    if (Device.manufacturer) {
      deviceDetails = Device.manufacturer
    }
    if (Platform.OS !== 'ios' && Device.brand) {
      deviceDetails += ' ' + Device.brand
    }
    if (Device.modelName) {
      deviceDetails += ' ' + Device.modelName
    }
    if (Device.osVersion) {
      deviceDetails += ' ' + Device.osVersion
    }
    if (deviceDetails === '') {
      deviceDetails = 'Não identificado'
    }

    return deviceDetails
  }

  static getAppVersion(fullVersion?: boolean) {
    let appVersion = ''

    if (Constants.expoConfig?.version) {
      appVersion = Constants.expoConfig.version
    } else if (Constants.manifest?.version) {
      appVersion = Constants.manifest.version
    } else if (Constants.manifest2?.extra?.expoClient?.version) {
      appVersion = Constants.manifest2.extra.expoClient.version
    }

    if (appVersion) {
      if (fullVersion) {
        if (Platform.OS === 'ios') {
          if (Constants.expoConfig?.ios?.buildNumber) {
            appVersion += '.' + Constants.expoConfig.ios.buildNumber
          }
        } else if (Constants.expoConfig?.android?.versionCode) {
          appVersion += '.' + Constants.expoConfig.android.versionCode
        }
      }
    } else {
      appVersion = '0.0.0.0'
    }

    return appVersion
  }

  static async copyToClipboard(value: string) {
    await Clipboard.setStringAsync(value)
  }

  static isPGCAppBVersionNewer(pgcVersion: string) {
    const appVersion = this.getAppVersion()
    const appVersionParts = appVersion.split('.')
    const pgcVersionParts = pgcVersion.split('.')

    const formatedAppVersion =
      appVersionParts[0].padStart(2, '0') +
      appVersionParts[1].padStart(2, '0') +
      appVersionParts[2].padStart(2, '0')

    const formatedPgcVersion =
      pgcVersionParts[0].padStart(2, '0') +
      pgcVersionParts[1].padStart(2, '0') +
      pgcVersionParts[2].padStart(2, '0')

    const appVersionNumber = parseInt(formatedAppVersion)
    const pgcVersionNumber = parseInt(formatedPgcVersion)

    return pgcVersionNumber > appVersionNumber
  }
}

export default GeneralUtils