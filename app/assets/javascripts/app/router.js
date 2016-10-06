/**
 * Created by user on 21.09.16.
 */
app.config(['$httpProvider', '$locationProvider', HttpConfig]);
app.config(['$stateProvider', '$urlRouterProvider', Routes]);

function HttpConfig($httpProvider, $locationProvider) {
    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode(true);
    }
    $httpProvider.interceptors.push('authInterceptor');
}

function Routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: "home.html",
            controller: ['$scope', function ($scope) {
                $scope.current_task = {};
                $scope.project_data = {};
                $scope.comment_data = {}
            }]
        })
        .state('sign_in', {
            url: '/sign_in',
            templateUrl: "sign_in.html",
            controller: 'AuthController'
        })
        .state('sign_up', {
            url: '/sign_up',
            templateUrl: "sign_up.html",
            controller: 'AuthController'
        })

}