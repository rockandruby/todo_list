/**
 * Created by user on 21.09.16.
 */
var app = angular.module('app', [
    'ui.router',
    'ng-token-auth',
    'templates',
    'ngFlash'
]);

app.run(['$rootScope', function($rootScope){
    $rootScope.user = false;
}]);

app.config(['$authProvider', function($authProvider){
    $authProvider.configure({
        apiUrl: 'http://localhost:3000',
        omniauthWindowType: 'newWindow'
    });
}]);

app.config(['FlashProvider', function(FlashProvider){
    FlashProvider.setTimeout(3000);
}]);
