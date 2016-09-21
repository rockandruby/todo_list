/**
 * Created by user on 21.09.16.
 */
app.config(['$httpProvider','$locationProvider', HttpConfig]);
app.config(['$stateProvider', '$urlRouterProvider', Routes]);

function HttpConfig($httpProvider, $locationProvider){
    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode(true);
    }
}

function Routes($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        // this state will be visible to everyone
        .state('home', {
            url: '/',
            template: '<h1>Index</h1>'
        })
        .state('sign_in', {
            url: '/sign_in',
            templateUrl : "views/auth/sign_in.html",
            controller: 'AuthCtrl',
            authenticate: false
        })
        .state('sign_up', {
            url: '/sign_up',
            templateUrl : "views/auth/sign_up.html",
            controller: 'AuthCtrl',
            authenticate: false
        })
        // this route will only be available to authenticated users
        .state('sign_out', {
            url: '/sign_out',
            controller: 'AuthCtrl',
            authenticate: true
        });
}