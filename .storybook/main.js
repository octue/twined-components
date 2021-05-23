const path = require('path')

function includeMorePaths(config) {
  let folder
  for (const rule of config.module.rules) {
    for (const subRule of rule.oneOf || []) {
      if (subRule.test instanceof RegExp && subRule.test.test('.jsx')) {
        folder = path.resolve(__dirname, '../packages/components/src/themes')
        subRule.include.push(folder)
        break
      }
    }
  }
  return config
}

function addMoreAlias(config) {
  config.resolve.alias['@components'] = path.resolve('../packages/components')
  return config
}

module.exports = {
  stories: [
    './stories/**/*.stories.mdx',
    '../packages/components/src/**/*.stories.mdx',
    '../packages/components/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@harelpls/storybook-addon-materialui',
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: require.resolve('babel-loader'),
      query: {
        presets: [
          require.resolve('@babel/preset-react'),
          require.resolve('@babel/preset-env'),
        ],
      },
    })
    return addMoreAlias(includeMorePaths(config))
  },
}
