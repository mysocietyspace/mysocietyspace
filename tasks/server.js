const loadPlugins = require( 'gulp-load-plugins' )(),
    openURL = require( 'open' );

module.exports = {
    client: () => {
        loadPlugins.connect.server( {
            root: [ 'public' ],
            livereload: true,
            port: 8080
        } );
        openURL( 'http://localhost:8080' );
    }
};
