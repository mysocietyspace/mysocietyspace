'use strict';

const gulp = require( 'gulp' ),
    // prebuilt tasks
    livereload = require( 'gulp-livereload' ),
    runSequence = require( 'run-sequence' ),
    // custom tasks
    clean = require( './tasks/clean' ),
    config = require( './tasks/config' ),
    copy = require( './tasks/copy' ),
    lint = require( './tasks/lint' ),
    scripts = require( './tasks/scripts' ),
    server = require( './tasks/server' ),
    styles = require( './tasks/styles' ),
    ngdocs = require( './tasks/ngdocs' );

/**
 * Server tasks
 */
gulp.task( 'server:client', server.client );

/**
 * Clean tasks
 */
gulp.task( 'clean:tmp', clean.tmp );
gulp.task( 'clean:build', clean.build );
gulp.task( 'clean:public', clean.public );

/**
 * Style tasks
 */
gulp.task( 'styles:vendor', styles.vendor );
gulp.task( 'styles:modules', styles.modules );

/**
 * Script tasks
 */
gulp.task( 'scripts:vendor', scripts.vendor );
gulp.task( 'scripts:modules', scripts.modules );
gulp.task( 'scripts:global', scripts.global );
gulp.task( 'scripts:ugc', scripts.ugc );
gulp.task( 'scripts:development', scripts.development );


gulp.task( 'ngdocs:ngDocs', ngdocs.ngDocs );
gulp.task( 'ngdocs:ngConnect', ngdocs.ngConnect );
/**
 * Copy tasks
 */
gulp.task( 'copy:html', copy.html );
gulp.task( 'copy:fonts', copy.fonts );
gulp.task( 'copy:resources', copy.resources );
gulp.task( 'copy:theme', copy.theme );
gulp.task( 'copy:global', copy.global );
gulp.task( 'copy:mockApi', copy.mockApi );

/**
 * Lint tasks
 */
// HTML Hint
gulp.task( 'lint:html', lint.html );
gulp.task( 'lint:htmlReport', lint.htmlReport );
// Style Lint
gulp.task( 'lint:styles', lint.styles );
gulp.task( 'lint:stylesReport', lint.stylesReport );
gulp.task( 'lint:stylesFix', lint.stylesFix );
// ES Lint
gulp.task( 'lint:scripts', lint.scripts );
gulp.task( 'lint:scriptsAll', lint.scriptsAll );
gulp.task( 'lint:jsGlobalReport', lint.jsGlobalReport );
gulp.task( 'lint:jsComponentReport', lint.jsComponentReport );

/**
 * Watch Task
 */
gulp.task( 'watch', () => {
    livereload.listen();
    gulp.watch( config.app + '/**/*.html', [ 'copy:html' ] );
    gulp.watch( config.app + '/global/styles/**/*.*', [ 'copy:fonts' ] );
    gulp.watch( config.app + '/**/*.scss', [ 'styles:vendor' ] );
    gulp.watch( config.app + '/**/*.scss', [ 'styles:modules' ] );
    gulp.watch( config.app + '/global/scripts/vendor/vendor.js', [ 'scripts:vendor' ] );
    gulp.watch( config.app + '/brand/**/*.js', [ 'scripts:global' ] );
    gulp.watch( config.app + '/global/scripts/common/**/*.js', [ 'scripts:global' ] );
    gulp.watch( config.app + '/components/**/*.js', [ 'scripts:modules' ] );
} );

gulp.task( 'docs', ( cb ) => {
    runSequence(
        'ngdocs:ngDocs',
        'ngdocs:ngConnect',
        cb
    );
} );

/**
 * Build Task
 */
gulp.task( 'build', ( cb ) => {
    runSequence(
        'clean:build',
        'scripts:vendor',
        'scripts:global',
        'scripts:modules',
        'styles:vendor',
        'styles:modules',
        'copy:html',
        'copy:fonts',
        cb );
} );

/**
 * Serve Task
 */
gulp.task( 'serve', ( cb ) => {
    runSequence(
        'clean:public',
        'scripts:vendor',
        'scripts:global',
        'scripts:modules',
        'styles:vendor',
        'scripts:development',
        'styles:modules',
        'copy:html',
        'copy:fonts',
        'copy:resources',
        'server:client',
        'watch',
        cb );
} );