const babelify = require( 'babelify' ),
    browserify = require( 'browserify' ),
    config = require( './config' ),
    derequire = require( 'gulp-derequire' ),
    es = require( 'event-stream' ),
    flattenpath = require( 'gulp-flatten' ),
    glob = require( 'glob' ),
    gulp = require( 'gulp' ),
    livereload = require( 'gulp-livereload' ),
    replaceName = require( 'gulp-replace-name' ),
    gulpif = require( 'gulp-if' ),
    uglify = require( 'gulp-uglify' ),
    source = require( 'vinyl-source-stream' ),
    buffer = require( 'vinyl-buffer' );
sourcemaps = require( 'gulp-sourcemaps' );

module.exports = {
    vendor: () => {
        const bundler = browserify( {
            entries: `${ config.app }/global/scripts/vendor/vendor.js`,
            debug: config.isSourceMap,
        } );
        bundler.transform( babelify );

        bundler.bundle()
            .on( 'error', ( err ) => console.error( err ) )
            .pipe( source( 'vendor.js' ) )
            .pipe( derequire() )
            .pipe( buffer() )
            .pipe( uglify() )
            .pipe( sourcemaps.init( { loadMaps: true } ) )
            .pipe( gulpif( config.isSourceMap, sourcemaps.write( './' ) ) )
            .pipe( gulp.dest( `${ config.dest }/js/vendor/` ) )
            .pipe( livereload() );
    },
    global: () => {
        const bundler = browserify( {
            entries: [ `${ config.app }/global/scripts/global.js`, `${ config.app }/global/scripts/common/common.module.js` ],
            debug: config.isSourceMap,
        } );
        bundler.transform( babelify );

        bundler.bundle()
            .on( 'error', ( err ) => console.error( err ) )
            .pipe( source( 'global.js' ) )
            .pipe( derequire() )
            .pipe( buffer() )
            .pipe( gulpif( config.isMinify, uglify() ) )
            .pipe( sourcemaps.init( { loadMaps: true } ) )
            .pipe( gulpif( config.isSourceMap, sourcemaps.write( './' ) ) )
            .pipe( gulp.dest( `${ config.dest }/js/global/` ) )
            .pipe( livereload() );
    },
    modules: ( done ) => {

        'use strict';
        glob( '/**/*.module.js', { 'root': config.app }, function ( err, files ) {
            if ( err ) {
                done( err );
            }
            let tasks = files.map( function ( entry ) {
                return browserify( {
                    entries: [ entry ],
                    debug: config.isSourceMap,
                    optional: [ 'es7.classProperties' ]
                } )
                    .bundle()
                    .pipe( source( entry ) )
                    .pipe( derequire() )
                    .pipe( buffer() )
                    .pipe( gulpif( config.isMinify, uglify() ) )
                    .pipe( replaceName( /.module.js/g, '.js' ) )
                    .pipe( flattenpath( { subPath: 1 } ) )
                    .pipe( sourcemaps.init( { loadMaps: config.isSourceMap } ) )
                    .pipe( gulpif( config.isSourceMap, sourcemaps.write( './' ) ) )
                    .pipe( gulp.dest( `${ config.dest }/js/` ) )
                    .pipe( livereload() );
            } );
            es.merge( tasks ).on( 'end', done );
        } );

    },
    development: () => {
        const bundler = browserify( {
            entries: `${ config.app }/_development/side-nav.js`,
            debug: config.isSourceMap,
        } );
        bundler.transform( babelify );

        bundler.bundle()
            .on( 'error', ( err ) => console.error( err ) )
            .pipe( source( 'side-nav.js' ) )
            .pipe( derequire() )
            .pipe( buffer() )
            .pipe( sourcemaps.init( { loadMaps: true } ) )
            .pipe( gulpif( config.isSourceMap, sourcemaps.write( './' ) ) )
            .pipe( gulp.dest( `${ config.dest }/js/_development/` ) )
            .pipe( livereload() );
    },
};