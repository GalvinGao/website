const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      config.plugins = [
        ...config.plugins,
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: [ '/', '/projects' ],

          renderer: new Renderer({
            inject: {
              IMGG_RENDERER: 'PrerenderSPAPlugin_PuppeteerRenderer'
            },
            headless: true,
            renderAfterDocumentEvent: 'prerender-vue-mounted'
          })
        })
      ]
    }
  }
}
