module.exports = {
    apps: [{
        name: 'testapp',
        script: './index.js'
    }],
    deploy: {
        production: {
            user: 'root',
            host: '139.59.96.159',
            // key: '~/.ssh/id_rsa',
            ref: 'origin/master',
            repo: 'https://github.com/dangtienngoc/nodejs-auth.git',
            path: '/root/projects',
            'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
        }
    }
}