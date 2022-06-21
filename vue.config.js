const {defineConfig} = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
    transpileDependencies: true,

    configureWebpack: {
        resolve: {
            alias: {
                '~': path.join(__dirname, 'src/'),
            },
            extensions: ['.js', '.vue', '.json'],
        },
    },

    pluginOptions: {
      vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
    },

    publicPath: './',
})
