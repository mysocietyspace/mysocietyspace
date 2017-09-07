const gulp = require( 'gulp' ),
    gulpDocs = require( 'gulp-ngdocs' ),
    connect = require( 'gulp-connect' ),
    config = require( './config' );

module.exports = {
    ngDocs: () => {
        const options = {
            /* pass both .min.js and .min.js.map files for angular and angular-animate */
            scripts: [
                '/angular/angular.min.js',
                '/angular/angular.min.js.map',
                'https://cdnjs.cloudflare.com/ajax/libs/marked/0.3.5/marked.js',
                '/angular-animate/angular-animate.min.js',
                '/angular-animate/angular-animate.min.js.map'
            ],
            html5Mode: true,
            title: 'AbbVie Angular Code Documentation'
        };

        return gulp.src( [ `${ config.app }/**/*.js`, `!${ config.app }/**/angular.js` ] )
            .pipe( gulpDocs.process( options ) )
            .pipe( gulp.dest( './docs/ngDocs' ) );
    },
    ngConnect: () => {
        connect.server( {
            root: 'docs/ngDocs',
            livereload: false,
            fallback: 'docs/ngDocs/index.html',
            port: 8083
        } );
    }
};