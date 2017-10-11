/**
* @ngdoc service
* @name AbbVieCommon.service:httpService
* @description
* Service to mange all the http request service
*/
 class httpService {
     constructor( $http, $window, $log, $document, $cookies )  {

         'ngInject';

         this.$http = $http;
         this.$window = $window;
         this.$log = $log;
         this.$document = $document;
         this.$cookies = $cookies;
     }

    /**
    * @ngdoc function
    * @name AbbVieCommon.service:httpService#httpRequest
    * @methodOf AbbVieCommon.service:httpService
    * @description
    * To make all http request based on the request object and return the succes and error response based on business requirment.
    *  @returns {promises} if success returns the success responce object else based on the business requirment will return the error object or redirect to the system error page which cinfigerd in th AEM admin config.
    */

     httpRequest( requestObject, getError ) {
         let vm = this
            requestObject.url = 'http://msswebapp-env.njtgc7uer6.us-east-2.elasticbeanstalk.com/'+requestObject.url
             return this.$http( requestObject ).then(

                response => {
                    $( '.loading-spiner-holder' ).hide();
                    return response.data;
                },

                error => {
                    $( '.loading-spiner-holder' ).hide();
                    if ( getError ) {
                        return error;
                    }
                    else {
                       vm.$log.info(error);
                    }

                }
            );
         }

     /**
     * @ngdoc service
     * @name AbbVieCommon.service:httpService#getAuthToken
     * @methodOf AbbVieCommon.service:httpService
     * @description
     * This method to get the auth-token from cookie HID
     *  @returns {String} auth-token value
     */
     getAuthToken() {
         return this.$cookies.get( 'HID' ) || false;
     }

     /**
     * @ngdoc function
     * @name AbbVieCommon.service:CommonService#logoutService
     * @methodOf AbbVieCommon.service:CommonService
     * @description
     * This method to logout the user from the application.
     * - **Will clear all the user cookie and localstorage related to the login.
     */
    logoutService() {
        this.$cookies.remove( 'HID' );
        this.$cookies.remove( 'HFN' );
        localStorage.removeItem( 'HCI' );
        localStorage.removeItem( 'h-email' );
        localStorage.removeItem( 'user-email' );
        localStorage.removeItem( 'h-phone' );
    }

     /**
     * @ngdoc service
     * @name AbbVieCommon.service:httpService#checkForLoginAndRedirect
     * @methodOf AbbVieCommon.service:httpService
     * @description
     * This method to check whether the page is authenticated and not in author mode
     * - **Authenticated page and not author mode**– check whether user is logged in or not by checking the auth-token value
     * - **Otherwise**- returns false
     * @returns {boolean} true if user is logged in and not authormode
     * @returns {boolean} false if user is not logged in or if page is in author mode
     */
     checkForLoginAndRedirect() {
         let vm = this;
         if ( vm.$window.abbvie.humiraConfig && vm.$window.abbvie.humiraConfig.isAuthReq ) {
             if ( !vm.getAuthToken() ) {
                 if ( vm.$window.location.href !== vm.$window.abbvie.humiraConfig.loginPagePath ) {
                     vm.$cookies.put( 'SRP', vm.$window.location.href, {
                         domain: '',
                         path: '/'
                     }  );
                     vm.$window.location.href = abbvie.humiraConfig.loginPagePath;

                     return false;
                 }
             }

             return true;
         }
     }

    /**
    * @ngdoc function
    * @name AbbVieCommon.service:httpService#getOriginName
    * @methodOf AbbVieCommon.service:httpService
    * @description
    * To Get the orgin name and returns the orgin name baesd on the user agent.
    *  @returns {object} orgin name
    */

     getOriginName() {
         let isMobile = navigator.appVersion.match( /(iPhone)|(android)|(webOS)/i ),
             isTablet = navigator.appVersion.match( /(iPad)|(iPod)|(android)|(webOS)/i ),
             originNameList = abbvie.globalConfigs.headers[ 'origin-name' ].split( ',' ),
             originName;
         if ( angular.isDefined( originNameList ) && originNameList.length > 1 ) {
             if ( isMobile ) {
                 originName = originNameList[ 0 ];
             }
             else if ( isTablet ) {
                 originName = originNameList[ 1 ];
             }
             else {
                 originName = originNameList[ 2 ];
             }
         }
         else {
             originName = abbvie.globalConfigs.headers[ 'origin-name' ];
         }

         return originName;
     }
}


 httpService.$inject = [ '$http', '$window', '$log', '$document', '$cookies' ];

 export default httpService;
