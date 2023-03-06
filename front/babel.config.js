module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@components': './src/components',
          '@services': './src/services',
          '@graphql': './src/graphql-risell'
        }
      }
    ]
  ]
};