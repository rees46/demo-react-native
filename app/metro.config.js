const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 * With support for monorepo
 * https://blog.cvoice.io/how-to-setup-a-react-native-monorepo
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  watchFolders: [path.resolve(path.join(__dirname, '..'))],
  transformer: {
    getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: true,
          inlineRequires: true,
        },
      }
    ),
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
        moduleName.startsWith('@your-org')
      ) {
        const pathToResolve = path.resolve(
          __dirname,
          'node_modules',
          moduleName
        );
        return context.resolveRequest(context, pathToResolve, platform);
      }
      // Optionally, chain to the standard Metro resolver.
      return context.resolveRequest(context, moduleName, platform);
    },
  },
  nodeModulesPaths: [
    path.resolve(path.join(__dirname, './node_modules')),
  ],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
