const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3001,
  },
  webpack: {
    configure: {
      output: {
        publicPath: 'auto',
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'hello_world',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/PluginMain',
        },
        shared: {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: '^16.14.0',
          },
          'react-dom': {
            singleton: true,
            eager: true,
            requiredVersion: '^16.14.0',
          },
          mobx: {
            eager: true,
            requiredVersion: '^6.4.2',
          },
          'mobx-react-lite': {
            eager: true,
            requiredVersion: '^3.3.0',
          },
          'mobx-state-tree': {
            eager: true,
            requiredVersion: '^5.1.3',
          },
          'styled-components': {
            eager: true,
            requiredVersion: false,
          },
        },
      }),
    ],
  },
};
