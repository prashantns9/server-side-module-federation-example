const { UniversalFederationPlugin } = require("@module-federation/node");
const path = require("path");

module.exports = {
  target: false,
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new UniversalFederationPlugin({
      name: 'remoteLib',
      library: { type: 'commonjs-module' },
      isServer: true, // or false
      remotes: {},
      filename: 'remoteEntry.js',
      exposes: {
        './businessInfo': './src/businessInfo',
      },
    }),
  ]
}