# LocationSearchApp

A React Native application that allows users to search for locations, view them on a map, and maintain a search history.

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

1. Create a `.env` file in the root directory of the project
2. Add your Google API key in the following format:

```
GOOGLE_API_KEY=your_google_api_key_here
```

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

## Project Structure

```
LocationSearchApp/
├── src/
│   ├── components/
│   │   ├── HistoryList/
│   │   ├── MapView/
│   │   └── SearchInput/
│   ├── constants/
│   │   └── defaultLocation.ts
│   ├── screens/
│   │   └── MapScreen/
│   │       ├── components/
│   │       │   └── HistoryToggleButton.tsx
│   │       ├── types.ts
│   │       ├── styles.ts
│   │       └── index.tsx
│   ├── services/
│   │   └── placesService.ts
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── storage.ts
├── .env
├── App.tsx
└── package.json
```

## Features

- **Location Search**: Search for locations using Google Places API
- **Map View**: View selected locations on a map
- **Search History**: Maintain and view your search history
- **Optimized Performance**: Components are memoized for optimal performance

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

For any other issues, please open an issue on the [GitHub repository](https://github.com/SyedKamranGH/LocationSearchApp/issues).

## Additional Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Native Maps](https://github.com/react-native-maps/react-native-maps)
- [Google Places API Documentation](https://developers.google.com/maps/documentation/places/web-service/overview)

## License

This project is licensed under the MIT License.

## 👤 Author

Syed Kamran
