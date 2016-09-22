/**
 * Created by user on 21.09.16.
 */
app.controller('AuthController', ['$scope', '$rootScope', '$state', '$auth', 'Flash', AuthController]);

function AuthController($scope, $rootScope, $state, $auth, Flash){
    $scope.$on('auth:registration-email-success', function(ev, user) {
        $rootScope.user = user;
        $auth.submitLogin(user);
        $state.go('home');
    });

    $scope.$on('auth:registration-email-error', function(ev, reason) {
        Flash.create('danger', reason.errors.full_messages.join('<br>'), 0);
        console.log(reason)
    });

    $rootScope.$on('auth:login-success', function(ev, user) {
        $rootScope.user = user;
        Flash.create('success', 'You signed in!');
        $state.go('home');
    });

    $rootScope.$on('auth:login-error', function(ev, reason) {
        Flash.create('danger', reason.errors[0]);
    });

    $rootScope.$on('auth:logout-error', function(ev, reason) {
        Flash.create('danger', reason.errors[0]);
    });

    $rootScope.$on('auth:logout-success', function(ev) {
        Flash.create('success', 'You signed out!');
        $rootScope.user = false
    });
}