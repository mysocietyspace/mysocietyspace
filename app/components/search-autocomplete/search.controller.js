/**
 * @ngdoc controller
 * @name Search.controller:SearchController
 * @description
 * search auto completion module
 */


class SearchController {

    constructor( $log, $cookies ) {
        this.$log = $log;
        this.$cookies = $cookies;
    }

    /**
     * @ngdoc controller
     * @name Search.controller#onInit
     * @methodOf Accordion.controller:SearchController
     * @description
     * This method is called on initialization of the component, wherein the elements initialization happens and click event are bound.
    */
    $onInit() {
              
    }
    setSocietyCookie( name ){
        let vm = this;
        vm.$cookies.put('societyName', name);
        document.location.href = 'society-details.html?societyName='+name
    }
}
SearchController.$inject = [ '$log', '$cookies' ];
export default SearchController;
