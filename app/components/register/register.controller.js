/**
 * @ngdoc controller
 * @name Login.controller:SearchController
 * @description
 * search auto completion module
 */


class RegisterControler {

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
       $('.registerBtn').on('click',function() {
            vm.httpService.submitForm($('form[name="register"]'),'signUp');
       })
    }

}
RegisterControler.$inject = [ '$document', '$timeout', '$window', '$log', 'httpService' ];
export default RegisterControler;
