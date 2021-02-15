// const env = require('./secrets.json')

module.exports = {
  mode: 'universal',
  head: {
    title: 'Vue Nuxt Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Real Aqua' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
      },
    ],
  },
  // plugins: ['~/plugins/vuetify.js'],
  // css: ['~/assets/css/app.styl'],
  loading: { color: '#3B8070' },
  buildModules: [
    // Simple usage
    '@nuxtjs/vuetify',
  ],

  build: {
    vendor: ['vuetify'],
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        light: {
          primary: '#CC0000',
          secondary: '#CC0000',
          accent: '#FFFFFF',
          info: '#01385f',
          warning: '#f0ad4e',
          error: '#bb2124',
          success: '#22bb33',
        },
        dark: {
          primary: '#CC0000',
          secondary: '#CC0000',
          accent: '#000000',
          info: '#01385f',
          warning: '#f0ad4e',
          error: '#bb2124',
          success: '#22bb33',
        },
      },
    },
  },
  performance: {
    gzip: false,
  },
  router: {
    base: `/`,
  },
  dev: false,
}
