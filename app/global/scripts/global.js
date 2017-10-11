/* eslint angular/di: [2,"array"]*/
import GlobalController   from './common/global-controller.controller';
// angular component module

angular.module( 'mss.common', [ 'ngCookies' ] );
angular.module( 'mss.accordion', [] );
angular.module( 'mss.search', [] );
angular.module( 'mss.login', [] );
// templates

export const humiraModule = angular.module( 'mss', [
    'ngMaterial',
    'ngAnimate',
    'ngSanitize',
    'ngCookies',
    'bhResponsiveImages',
    'ui.bootstrap',
    'mss.common',
    'mss.accordion',
    'mss.search',
    'mss.login'
] )
.config( [ '$qProvider', '$cookiesProvider', function ( $qProvider, $cookiesProvider ) {
    $cookiesProvider.defaults.path = '/';
    $cookiesProvider.defaults.secure = true;
} ] )

.controller( 'GlobalController', GlobalController );
