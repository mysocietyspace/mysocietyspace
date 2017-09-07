// Configure the folder and file paths

const argv = require( 'yargs' ).argv,
    config = {
        app: 'app',
        build: 'build',
        dir: 'config',
        dist: 'dist',
        public: 'public'
    };

config.dest =  argv.env === 'local' ? config.public : config.build;
config.destCSS =  argv.env === 'local' ? config.public : config.build;
config.destHTML =  argv.env === 'local' ? config.public : config.build ;
config.isMinify = argv.nonMinify === 'true' ? false : true;

module.exports = config;
