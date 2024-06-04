const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const path = require('path')

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 * With support for monorepo
 * https://blog.cvoice.io/how-to-setup-a-react-native-monorepo
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: [
    path.resolve(__dirname, '../fragments'),
    path.resolve(__dirname, '../screens'),
    path.resolve(__dirname, '../stores'),
    path.resolve(__dirname, '../ui'),
    path.resolve(__dirname, '../globals'),
    path.resolve(__dirname, '../navigations'),
    path.resolve(__dirname, '../shared'),
  ],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    unstable_enableSymlinks: true,
    nodeModulesPaths: [path.resolve(path.join(__dirname, './node_modules'))],
    resolveRequest: (context, moduleName, platform) => {
      if (
        // Add to this list whenever a new React-reliant dependency is added
        moduleName.startsWith('react') ||
        moduleName.startsWith('@react-native') ||
        moduleName.startsWith('@react-native-community') ||
        moduleName.startsWith('@your-org') ||
        moduleName.startsWith('@emotion')
      ) {
        const pathToResolve = path.resolve(__dirname, 'node_modules', moduleName)
        return context.resolveRequest(context, pathToResolve, platform)
      }
      // Optionally, chain to the standard Metro resolver.
      return context.resolveRequest(context, moduleName, platform)
    },
  },
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
