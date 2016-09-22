/**
 * Created by user on 21.09.16.
 */
app.controller('AuthController', ['$scope', '$rootScope', '$state', '$auth', AuthController]);

function AuthController($scope, $rootScope, $state, $auth){
    $scope.$on('auth:registration-email-success', function(ev, user) {
        $state.go('home');
    });

    $scope.$on('auth:registration-email-error', function(ev, reason) {
        $scope.errors = reason.errors.full_messages
    });

    $rootScope.$on('auth:login-success', function(ev, user) {
        console.log(user);
        $state.go('home');
    });

    $rootScope.$on('auth:login-error', function(ev, reason) {
        $state.go('home')
    });
}