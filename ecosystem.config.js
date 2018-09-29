module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: 'next-brew',
      script: 'server.js',
      env: {
        NODE_ENV: 'production'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'rascarlito',
      host: 'next-brew.carlogren.com',
      ref: 'origin/master',
      repo: 'git@rashub:RasCarlito/next-brew.git',
      path: '/home/rascarlito/www/next-brew'
      // 'post-deploy': 'nvm use && npm install && npm run build && npm run pm2-restart'
    }
  }
}
