import httpService from './services/http.service';

/**
* @ngdoc overview
* @name AbbVieCommon
* @description
* Common module is used for commonly used method like sessionManagementService, orphanPageService, orphanPageService Etc..
*/

let commonModule = angular.module( 'mss.common', [ 'ngCookies' ] )
.service( 'httpService', httpService )
.run( [ '$document', '$http', '$window', '$cookies', '$interval', '$timeout', '$mdDialog',  ( $document, $http, $window, $cookies, $interval, $timeout, $mdDialog ) => {
    $document.ready( () => {


    } );
} ] );

export default commonModule = commonModule.name;