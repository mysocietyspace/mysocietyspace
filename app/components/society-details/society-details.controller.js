/**
 * @ngdoc controller
 * @name SocietyDetails.controller:SocietyDetails
 * @description
 * SocietyDetails auto completion module
 */


class SocietyDetailsController {

    constructor( $document, $timeout, $window, $log, $cookies, httpService ) {
        this.$doc = $document;
        this.$timeout = $timeout;
        this.$window = $window;
        this.$log = $log;
        this.$cookies = $cookies;
        this.httpService = httpService;
    }

    /**
     * @ngdoc controller
     * @name SocietyDetails.controller#onInit
     * @methodOf Accordion.controller:SocietyDetailsController
     * @description
     * This method is called on initialization of the component, wherein the elements initialization happens and click event are bound.
    */
    $onInit() {
        let vm = this;
        vm.getSocietyDetails();
    }
    getSocietyDetails (){
        let vm = this,
        societyName = vm.$cookies.get('societyName') || vm.httpService.getUrlParm('societyName'),
        requestObj = {
            url: 'getSocietyDetails',
            method: 'Post',
            data:{"societyName": societyName }
        };

        vm.httpService.httpRequest( requestObj ).then(
        response => {
            if(response.isSuccess){
                vm.societyDetails = response.data;
                vm.$log.info( vm.societyDetails );
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
SocietyDetailsController.$inject = [ '$document', '$timeout', '$window', '$log', '$cookies', 'httpService' ];
export default SocietyDetailsController;
