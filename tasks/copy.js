const gulp = require( 'gulp' ),
    config = require( './config' ),
    livereload = require( 'gulp-livereload' ),
    replaceName = require( 'gulp-replace-name' );


module.exports = {
    html: () =>
        gulp.src( `${ config.app }/**/*.html` )
        .pipe( gulp.dest( config.destHTML ) )
        .pipe( livereload() ),
    fonts: () =>
        gulp.src( `${ config.app }/global/styles/fonts/**/*.*` )
        .pipe( gulp.dest( `${ config.destCSS }/css/global/styles/fonts/` ) )
        .pipe( livereload() ),
    resources: () =>
        gulp.src( `${ config.app }/**/` )
        .pipe( gulp.dest( config.public ) )
        .pipe( livereload() )
};