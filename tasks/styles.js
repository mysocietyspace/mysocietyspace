const gulp = require( 'gulp' ),
    autoprefixer = require( 'gulp-autoprefixer' ),
    sass = require( 'gulp-sass' ),
    livereload = require( 'gulp-livereload' ),
    replace = require( 'gulp-replace' ),
    config = require( './config' ),
    cleanCSS = require( 'gulp-clean-css' ),
    concatCss = require( 'gulp-concat-css' );
module.exports = {
    vendor: () =>
        gulp.src( `${ config.app }/global/styles/vendor/*.css` )
        .pipe( concatCss( 'vendor.css' ) )
        .pipe( cleanCSS() )
        .pipe( gulp.dest( `${ config.destCSS }/css/vendor/` ) ),
    modules: () =>
        gulp.src( config.app + '/**/*.scss' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( autoprefixer() )
        .pipe( cleanCSS() )
        .pipe( gulp.dest( `${ config.destCSS }/css/` ) )
        .pipe( livereload() )
};
