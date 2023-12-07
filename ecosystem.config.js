module.exports = {
    apps: [{
        name: "milliax blog",
        script: "yarn",
        args: "serve",
        instances: "max" ,
        exec_mode: 'cluster',
        autorestart: true,
        max_memory_restart: '1G',
        watch: true,
        out_file: '../logs/out.log',
        error_file: '../logs/error.log',
        // env_production: {
        //     NODE_ENV: "production",
        //     PORT: 5000
        // }
        env: {
            NODE_ENV: "production",
            PORT: "5000",
        }
    }]
}
