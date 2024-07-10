const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.output.publicPath = 'auto'
      webpackConfig.plugins.push(
        new ModuleFederationPlugin({
          name: 'container',
          filename: 'remoteEntry.js',
          remotes: {
            workouts: isProduction
              ? 'workouts@https://kahunas-workouts.netlify.app/remoteEntry.js'
              : 'workouts@http://localhost:3001/workouts/remoteEntry.js',
          },
          exposes: {
            './StoreContext': './src/store/store',
          },
          shared: {
            react: { singleton: true },
            'react-dom': { singleton: true },
            '@reduxjs/toolkit': { singleton: true },
            'react-redux': { singleton: true },
            'react-i18next': { singleton: true },
            'i18next': { singleton: true },
          },
        })
      )
      return webpackConfig
    },
  },
}
