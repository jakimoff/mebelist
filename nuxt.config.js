if (process.env.NODE_ENV !== 'dev') {
  require('dotenv').config({ path: './keys/.env' })
} else {
  require('dotenv').config({ path: './keys/.env.dev' })
}

// export default {
module.exports = {
  server: {
    port: 3001
  },
  mode: 'universal',
  env: process.env,
  telemetry: false,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.APP_NAME || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: process.env.CLIENT_URL + '/js/libs.min.js' },
      { src: process.env.CLIENT_URL + '/js/use.js' }
    ]
  },

  loading: { color: '#409eff' },

  css: [
    'assets/main.css'
  ],
  plugins: [
    { mode: 'client', src: '~/plugins/after-each' },
    // { mode: 'client', src: '~/plugins/gtm' },
    // { mode: 'client', src: '~/plugins/ga' },
    '~/plugins/robots',
    '~/plugins/mixins'
  ],
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/router',
    '@nuxtjs/gtm',
    '@nuxtjs/robots',
    '@nuxtjs/style-resources',
    '@nuxtjs/vendor'
  ],
  styleResources: {
    stylus: [
      '~/assets/styl/includes/vars.styl',
      '~/assets/styl/includes/mixins.styl',
      '~/assets/styl/import/import.styl',
      '~/assets/styl/includes/extends.styl'
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "https://mebelist.galaxy-it.net"
  },
  loaders: {
    css: {
      modules: true
    }
  },
  build: {
    // extractCSS: {
    //   allChunks: true
    // },
    // extractCSS: true,
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: 'styles',
    //         test: /\.(styl)$/,
    //         chunks: 'all',
    //         enforce: true,
    //       }
    //     }
    //   }
    // filenames: {
    //   css: ({ isDev }) => isDev ? '[name].css' : '[name].[contenthash].css'
    // },
    extend(config, { isDev, isClient }) {
      /*
      ** Run PugBem in `<template lang="pug">` and `<template lang="pug" src="~/">` in Vue components
      * npm i pug pug-bem-plain-loader pug-plain-loader --save-dev
      */
      config.module.rules.push(
        {
          test: /\.(pug)$/,
          oneOf: [
            {
              resourceQuery: /^\?(vue)/,
              use: ['pug-bem-plain-loader']
            },
            {
              use: ['raw-loader']
            }
          ]
        }
      )

      if (isDev && isClient) {
        /*
        ** Run ESLint on save
        */
        config.module.rules.push(
          {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          }
        )
      }
    }
  }
}
