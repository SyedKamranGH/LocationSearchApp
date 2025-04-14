# LocationSearchApp

A React Native application that allows users to search for locations, view them on a map, and maintain a search history.

## Features

- 🗺️ Google Maps integration
- 🔍 Location search with Google Places Autocomplete
- 📝 Search history tracking and management
- 📱 Cross-platform (iOS and Android) compatibility

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Features](#features)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- Node.js (v20.x)
- Yarn package manager
- iOS development environment:
  - macOS
  - Xcode (latest version)
  - CocoaPods
- Android development environment:
  - Android Studio
  - JDK 11 or newer
  - Android SDK

## Installation

1. Clone the repository:

```bash
git clone https://github.com/SyedKamranGH/LocationSearchApp.git
cd LocationSearchApp
```

2. Install dependencies:

```bash
yarn install
```

3. Install iOS dependencies (macOS only):

```bash
cd ios
pod install
cd ..
```

## Configuration

The application requires a Google API key for location services:

- Create a `.env` file in the root directory with the following content:

     ```
     GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
     ```

- For iOS, update the API key in `ios/AppDelegate.m` or `ios/AppDelegate.mm`:

     ```objective-c
     [GMSServices provideAPIKey:@"your_google_maps_api_key_here"];
     ```

- For Android, update the API key in `android/app/src/main/AndroidManifest.xml`:

     ```xml
     <meta-data
       android:name="com.google.android.geo.API_KEY"
       android:value="your_google_maps_api_key_here"/>
     ```

### Google Maps API Key

You need to obtain a Google Maps API key from the [Google Cloud Console](https://console.cloud.google.com/). The API key should have access to:

- Maps SDK for Android
- Maps SDK for iOS
- Places API

> **Note:** You need to have the Places API and Maps SDK enabled in your Google Cloud Console project.

## Running the Application

This project uses React Native CLI with Metro bundler (not Expo).

### Start Metro Bundler

```bash
yarn start
```

### Run on iOS

```bash
yarn ios
```

### Run on Android

```bash
yarn android
```

### iOS Configuration

1. Make sure you have CocoaPods installed.
2. Update the API key in `ios/AppDelegate.m` or `ios/AppDelegate.mm`.
3. Run `pod install` in the `ios` directory.
4. Open the `.xcworkspace` file in Xcode.
5. Ensure your deployment target and team are set correctly.

### Android Configuration

1. Update the API key in `android/app/src/main/AndroidManifest.xml`.
2. Make sure you have the required dependencies in `android/app/build.gradle`.
3. Ensure your SDK version is properly configured in `android/build.gradle`.

## Project Structure

```
├── App.tsx                      # Main application component
├── src/
│   ├── components/              # Reusable components
│   │   ├── EmptyList/           # Component for empty list state
│   │   ├── HistoryList/         # Search history list component
│   │   ├── MapView/             # Map component wrapper
│   │   └── SearchInput/         # Search input with autocomplete
│   ├── config/                  # Configuration files
│   ├── constants/               # Application constants
│   ├── hooks/                   # Custom React hooks
│   ├── screens/                 # Screen components
│   │   └── MapScreen/           # Main map screen
│   ├── services/                # API and data services
│   ├── types/                   # TypeScript type definitions
│   └── utils/                   # Utility functions
```

## Troubleshooting

### Common Issues

1. **Missing Google API Key**:
   - Ensure you have created a `.env` file with the proper Google API key
   - Check that your API key has the necessary permissions enabled

2. **Build Errors**:
   - Make sure you're using Node.js v20.x
   - Clean project and reinstall dependencies:

     ```bash
     yarn clean
     yarn install
     ```

3. **iOS Specific Issues**:
   - Ensure CocoaPods is properly installed and updated
   - Try reinstalling pods:

     ```bash
     cd ios
     pod deintegrate
     pod install
     ```

4. **Android Specific Issues**:
   - Check that your Android SDK is properly configured
   - Ensure you have JDK 11 or newer installed

## Additional Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- [Google Places API Documentation](https://developers.google.com/maps/documentation/places/web-service/overview)

## License

This project is licensed under the MIT License.

## 👤 Author

Syed Kamran
