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
          remotes: {
            workouts: 'workouts@http://localhost:3001/workouts/remoteEntry.js',
          },
          shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
        })
      )
      return webpackConfig
    },
  },
}
