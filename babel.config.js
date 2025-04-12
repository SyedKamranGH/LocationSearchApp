module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
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
