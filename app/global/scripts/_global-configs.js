abbvie.extend( 'humiraConfig' );
abbvie.humiraConfig = {
    showForcedModal: true,
    isHome: 'false',
    isIndication: 'true',
    globalmasthead: '/components/masthead/masthead.html',
    globalfatFooter: '/components/fat-footer/fat-footer.html',
    globalsafetyBar: '/components/safety-bar/safety-bar.html',
    globalprimaryNav: '/components/primary-navigation/primary-navigation.html',
    indicationmasthead: '/content/humira/en-us/{indication}/jcr:content/masthead.masterhead.html',
    indicationfatFooter: '/content/humira/en-us/{indication}/jcr:content/fatfooter.footer.html',
    indicationsafetyBar: '/content/safety-bar/global.html',
    indicationuseStatement: '/content/safety-bar/global.html',
    indicationprimaryNav: '/components/primary-navigation/primary-navigation.html'
};
abbvie.extend( 'globalConfigs' );
abbvie.globalConfigs = {
    isiconfig: '',
    headers: {
        AppId: '1',
        'Content-Type': 'application/json',
        authorization: 'Basic QnJhbmRfQVBJX1VzZXI6YShjZSQkOHIqbjZeOSE=',
        'x-api-version': '1'
    },
    exitmodalConfig: '/components/exit-modal/exit-modal-content.html',
    exitmodalEpass: '/components/exit-modal/exit-modal-content.1.html'
};
abbvie.extend( 'globalConfigs.refreshtokenConfig' );
abbvie.globalConfigs.refreshtokenConfig = {
    apis: 'post.refreshtoken',
    'post.refreshtoken': {
        api: '/api/humiracompletedev/BrandAPIGateway/api/Authorization/RefreshToken',
        classes: null,
        payload: { oldToken: '#oldToken' }
    }
};