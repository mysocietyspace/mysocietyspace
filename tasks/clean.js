/*
 * Clean Files
 *  - Removes all content from the folder specified
 *
 */
const rimraf = require( 'rimraf' );

module.exports = {
    'build': ( cb ) => rimraf( './build', cb ),
    'public': ( cb ) => rimraf( './public', cb )
};
