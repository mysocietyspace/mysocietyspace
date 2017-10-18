/**
* @ngdoc controller
* @name AbbVieCommon.controller:GlobalController
* @description
* Global controller with JS for the all pages
*/

class GlobalController {

    constructor( $scope, $cookies, $document, $window, $location, httpService) {
        this.httpService = httpService;
    
    }

    /**
    * @ngdoc controller
    * @name AbbVieCommon.controller:GlobalController#onInit
    * @methodOf AbbVieCommon.controller:GlobalController
    * @description
    * This method is called on initialization of the component, wherein the elements initialization happens.
    */

    $onInit() {
        let vm = this;
        $('.overlay-wrapp').on('click','.close-icon',function(){
            $('.black-overlay').fadeOut();
            $(this).parents('.overlay-wrapp').fadeOut();
        });
        
        vm.getSocietyList();
    }
    getSocietyList() {
        let vm = this,
        requestObj = {
            url: 'getSocietyList',
            method: 'GET'
        };

        vm.httpService.httpRequest( requestObj ).then(
        response => {
            if(response.isSuccess){
                vm.isResult = response.isSuccess;
                vm.resultList = response.isSuccess? response.data.dataList : '';
            }else{
                vm.$log.error( response );
            }
        },
        error => {
            vm.$log.error( error );
        }
      );
    }
}

GlobalController.$inject = [ '$scope', '$cookies', '$document', '$window', '$location', 'httpService' ];
export default GlobalController;
