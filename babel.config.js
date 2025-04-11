module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          'type/*': ['types/*'],
          'api/*': ['api/*'],
          'constants/*': ['/constants/*'],
          'hooks/*': ['hooks/*'],
          'components/*': ['components/*'],
          'navigation/*': ['navigation/*'],
          'screens/*': ['screen/*'],
          'assets/*': ['assets/*'],
          'config/*': ['config/*'],
          'services/*': ['services/*'],
          'utils/*': ['utils/*'],
        },
        root: ['./src'],
      },
    ],
  ],
};

// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
// };
