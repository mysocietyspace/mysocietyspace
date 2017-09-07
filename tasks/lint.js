const gulp = require( 'gulp' ),
    config = require( './config' ),
    eslint = require( 'gulp-eslint' ),
    fs = require( 'fs' ),
    gulpStylelint = require( 'gulp-stylelint' ),
    htmlhint = require( 'gulp-htmlhint' ),
    stylefmt = require( 'gulp-stylefmt' ),
    lintreporter = require( 'eslint-html-reporter' ),
    path = require( 'path' ),
    componentsPath = `./${ config.app }/components/`,
    globalPath = `./${ config.app }/global/scripts/common/`;


function getFolders( dir ) {
    return fs.readdirSync( dir )
      .filter( function ( file ) {
          return fs.statSync( path.join( dir, file ) ).isDirectory();
      } );
}

module.exports = {
    scripts: ( done ) => {
        gulp.src( [ `./${ config.app }/**/*.js`, `!./${ config.app }/**/vendor/**`, `!./${ config.app }/**/*.spec.js` ] )
        // eslint() attaches the lint output to the 'eslint' property
        // of the file object so it can be used by other modules.
        .pipe( eslint( {
            fix: true,
            configFile: `./${ config.dir }/eslint.js`
        } ) )
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe( eslint.format() )
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe( eslint.failAfterError() );
        done();
    },
    scriptsAll: ( done ) => {
        gulp.src( [ `./**/*.js`, `!node_modules/**`, `!${ config.build }/**`, `!${ config.public }/**`, `!./${ config.app }/**/vendor/**` ] )
        // eslint() attaches the lint output to the 'eslint' property
        // of the file object so it can be used by other modules.
        .pipe( eslint( {
            fix: true,
            configFile: `./${ config.dir }/eslint.js`
        } ) )
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe( eslint.format() )
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe( eslint.failAfterError() );
        done();
    },
    jsComponentReport: ( done ) => {
        const folders = getFolders( componentsPath );
        folders.map( function ( folder ) {
            return gulp.src( path.join( componentsPath, folder, '/**/*.js' ) )
                .pipe( eslint( {
                    fix: true,
                    configFile: `./${ config.dir }/eslint.js`
                } ) )
                .pipe( eslint.format( lintreporter, function ( data ) {
                    const dir = './docs/reports';
                    if ( !fs.existsSync( dir ) ) {
                        fs.mkdirSync( dir );
                    }
                    fs.writeFileSync( `${ dir }/ComponentEslint.html`, data, { flag: 'w' } );
                } ) );
        } );
        done();
    },
    jsGlobalReport: ( done ) => {
        const folders = getFolders( globalPath );
        folders.map( function ( folder ) {
            return gulp.src( path.join( globalPath, folder, '/**/*.js' ) )
                .pipe( eslint( {
                    fix: true,
                    configFile: `./${ config.dir }/eslint.js`
                } ) )
                .pipe( eslint.format( lintreporter, function ( data ) {
                    const dir = './docs/reports';
                    if ( !fs.existsSync( dir ) ) {
                        fs.mkdirSync( dir );
                    }
                    fs.writeFileSync( `${ dir }/globalEslint.html`, data, { flag: 'w' } );
                } ) );
        } );
        done();
    },
    styles: () => gulp.src( `${ config.app }/**/*.scss` )
        .pipe( gulpStylelint( {
            failAfterError: true,
            configFile: `./${ config.dir }/stylelint.js`,
            reporters: [ { formatter: 'string', console: true } ],
            debug: true
        } ) ),

    stylesFix: () => gulp.src( `${ config.app }/**/*.scss` )
        .pipe( stylefmt( { configFile: `./${ config.dir }/stylelint.js`, recursive: true } ) )
        .pipe( gulp.dest( config.app ) ),

    stylesReport: () => gulp.src( `${ config.app }/**/*.scss` )
        .pipe( gulpStylelint( {
            failAfterError: true,
            configFile: `./${ config.dir }/stylelint.js`,
            reportOutputDir: `${ config.public }/reports`,
            reporters: [
                { formatter: 'verbose', console: true },
                { formatter: 'json', save: 'style-lint.json' }
            ],
        } ) ),
    html: () => gulp.src( `./${ config.app }/**/*.html` )
        .pipe( htmlhint( `./${ config.dir }/.htmlhintrc` ) )
        .pipe( htmlhint.reporter( 'htmlhint-stylish' ) )
        .pipe( htmlhint.failReporter( { suppress: true } ) ),
    htmlReport: () => gulp.src( [ `./${ config.app }/**/*.html`, `!./${ config.app }/**/index.html` ] )
        .pipe( htmlhint( `./${ config.dir }/.htmlhintrc` ) )
        .pipe( htmlhint.reporter( 'htmlhint-stylish' ) )
        .pipe( htmlhint.failReporter( { suppress: true } ) )
};