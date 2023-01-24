const { UniversalFederationPlugin } = require("@module-federation/node");
const path = require("path");

module.exports = {
  target: false,
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new UniversalFederationPlugin({
      name: 'platform',
      library: { type: 'commonjs-module' },
      isServer: true, // or false
      remotes: {
        remoteLib: 'remoteLib@http://localhost:3002/remoteEntry.js',
      },
      filename: 'container.js'
    }),
  ]
}