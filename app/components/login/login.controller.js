/**
 * @ngdoc controller
 * @name Login.controller:SearchController
 * @description
 * search auto completion module
 */


class LoginController {

    constructor( $document, $timeout, $window, $log, httpService ) {
        this.$doc = $document;
        this.$timeout = $timeout;
        this.$window = $window;
        this.$log = $log;
        this.httpService = httpService;
    }

    /**
     * @ngdoc controller
     * @name Search.controller#onInit
     * @methodOf Accordion.controller:SearchController
     * @description
     * This method is called on initialization of the component, wherein the elements initialization happens and click event are bound.
    */
    $onInit() {
        let vm = this;
       
    }
    login() {
        let vm = this,
        formData = {
            UserName:vm.username,
            Password:vm.password
        },
        requestObj = {
            url: 'login',
            method: 'POST',
            data:formData
        };

        vm.httpService.httpRequest( requestObj ).then(
        response => {
            vm.$log.error( response );
            vm.isResult = response.isSuccess;
            vm.resultList = response.isSuccess? response.data.dataList : '';
        },
        error => {
            vm.$log.error( error );
        }
      );
    }

}
LoginController.$inject = [ '$document', '$timeout', '$window', '$log', 'httpService' ];
export default LoginController;
