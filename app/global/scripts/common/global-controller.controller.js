/**
* @ngdoc controller
* @name AbbVieCommon.controller:GlobalController
* @description
* Global controller with JS for the all pages
*/

class GlobalController {

    constructor( $scope, $cookies, $mdSidenav, $mdDialog, $document, $window, $location, commonService, sessionManagementService, orphanPageService ) {
       
    }

    /**
    * @ngdoc controller
    * @name AbbVieCommon.controller:GlobalController#onInit
    * @methodOf AbbVieCommon.controller:GlobalController
    * @description
    * This method is called on initialization of the component, wherein the elements initialization happens.
    */

    $onInit() {

    }


}

GlobalController.$inject = [ '$scope', '$cookies', '$mdSidenav', '$mdDialog', '$document', '$window', '$location', 'commonService', 'sessionManagementService', 'orphanPageService' ];
export default GlobalController;
