const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  devServer: {
    port: 3000,
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
            workouts: 'workouts@http://localhost:3001/workouts/remoteEntry.js',
          },
          exposes: {
            './StoreContext': './src/store/store',
          },
          shared: {
            react: { singleton: true },
            'react-dom': { singleton: true },
            '@reduxjs/toolkit': { singleton: true },
            'react-redux': { singleton: true },
          },
        })
      )
      return webpackConfig
    },
  },
}
