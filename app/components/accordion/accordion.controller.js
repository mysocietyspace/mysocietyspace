/**
 * @ngdoc controller
 * @name Accordion.controller:AccordionController
 * @description
 * Click on the internal link should open related Accordion
 */


class AccordionController {

    constructor( $document, $timeout, $window ) {
        this.$doc = $document;
        this.$timeout = $timeout;
        this.$window = $window;
    }

    /**
     * @ngdoc controller
     * @name Accordion.controller#onInit
     * @methodOf Accordion.controller:AccordionController
     * @description
     * This method is called on initialization of the component, wherein the elements initialization happens and click event are bound.
    */
    $onInit() {
        let self = this;
        self.$timeout( function () {
            angular.element( self.$doc ).ready( function () {
                angular.element( angular.element( self.$doc )[ 0 ].querySelectorAll( '.accordion-internal-link' ) ).on( 'click', function ( e ) {
                    let thisHref = ( e.target.attributes.href.value ).split( '#' )[ 1 ],
                        newElem = angular.element( self.$doc )[ 0 ].querySelectorAll( '.accordion--panel[internal-name=' + thisHref + '] .panel-heading h4 a' ),
                        elemOffset = parseInt( $( newElem ).offset().top ) - 50;

                    angular.element( newElem ).triggerHandler( 'click' );
                    self.$window.scroll( 0, elemOffset );
                } );
            } );
        }, 100 );
    }
}
AccordionController.$inject = [ '$document', '$timeout', '$window' ];
export default AccordionController;
