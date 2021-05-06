module.exports = {
  apps: [
    {
      name: 'mebelist',
      port: 3001,
      script: './node_modules/nuxt/bin/nuxt-start',
      cwd: '/var/www/html/mebelist/mebelist-frontend',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
