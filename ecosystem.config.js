module.exports = {
    apps: [{
        name: 'testapp',
        script: './bin/www'
    }],
    deploy: {
        production: {
            user: 'root',
            host: ['139.59.96.159'],
            ref: 'origin/master',
            repo: 'https://github.com/dangtienngoc/nodejs-auth.git',
            path: '/var/www/nodejs',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}