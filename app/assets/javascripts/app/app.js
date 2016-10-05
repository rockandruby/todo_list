/**
 * Created by user on 21.09.16.
 */
var app = angular.module('app', [
    'ui.router',
    'ng-token-auth',
    'templates',
    'ngFlash',
    'ngMaterial',
    'ngFileUpload',
    'validation',
    'validation.rule'
]);

app.config(['$authProvider', function($authProvider){
    $authProvider.configure({
        apiUrl: '',
        omniauthWindowType: 'newWindow'
    });
}]);

app.config(['FlashProvider', function(FlashProvider){
    FlashProvider.setTimeout(3000);
}]);

app.config(['$validationProvider', function ($validationProvider) {
    $validationProvider.showSuccessMessage = false
}]);
