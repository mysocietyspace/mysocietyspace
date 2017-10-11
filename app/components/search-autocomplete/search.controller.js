/**
 * @ngdoc controller
 * @name Search.controller:SearchController
 * @description
 * search auto completion module
 */


class SearchController {

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
            vm.isResult = response.isSuccess;
            vm.resultList = response.isSuccess? response.data.dataList : '';
        },
        error => {
            vm.$log.error( error );
        }
      );
    }
}
SearchController.$inject = [ '$document', '$timeout', '$window', '$log', 'httpService' ];
export default SearchController;
