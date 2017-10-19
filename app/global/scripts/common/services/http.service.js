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
    submitForm( $form, apiUrl ) {
        let vm = this,
            unindexed_array = $form.serializeArray(),
            formData = {},
            requestObj = {
                url: apiUrl,
                method: 'POST'
            };
        $.map(unindexed_array, function(n, i){
            formData[n['name']] = n['value'];
        });
        requestObj.data = formData;
        vm.httpRequest( requestObj ).then(
            response => {
                vm.$log.info( response );
                if( response.isSuccess ){
                    return response.data;
                }else{
                    let html = '<div class="alert alert-danger">'+response.contentResult+'</div>'
                    $form.find('.alert').remove();
                    $form.prepend(html)
                    vm.$log.error( response.contentResult);
                }
            },
            error => {
                vm.$log.error( error );
            }
        )
     }
     /**
    * @ngdoc function
    * @name AbbVieCommon.service:CommonService#getUrlParm
    * @methodOf AbbVieCommon.service:CommonService
    * @description
    * To get the specific URL parameter from the URL.
    * @returns {String} parameter value from url
    */

    getUrlParm( variable ) {
        let self = this,
            query = self.$window.location.search.substring( 1 ),
            vars = query.split( '&' );
        for ( let i = 0; i < vars.length; i ++ ) {
            let pair = vars[ i ].split( '=' );
            if ( pair[ 0 ] === variable ) {
                return pair[ 1 ];
            }
        }
    }
}


 httpService.$inject = [ '$http', '$window', '$log', '$document', '$cookies' ];

 export default httpService;
