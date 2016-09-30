/**
 * Created by user on 21.09.16.
 */
var app = angular.module('app', [
    'ui.router',
    'ng-token-auth',
    'templates',
    'ngFlash',
    'ngMaterial'
]);

app.config(['$authProvider', function($authProvider){
    $authProvider.configure({
        apiUrl: 'http://localhost:3000',
        omniauthWindowType: 'newWindow'
    });
}]);

app.config(['FlashProvider', function(FlashProvider){
    FlashProvider.setTimeout(3000);
}]);

app.directive('fileInput', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attributes) {
            element.bind('change', function () {
                $parse(attributes.fileInput)
                    .assign(scope,element[0].files[0])
                scope.$apply()
            });
        }
    };
}]);
