/**
 * Created by user on 21.09.16.
 */
app.controller('AuthController', ['$scope', '$rootScope', AuthController]);

function AuthController($scope, $rootScope){
    $scope.$on('auth:email-confirmation-success', function(ev, user) {
        console.log(ev, user)
    });

    $scope.$on('auth:registration-email-error', function(ev, reason) {
        $scope.errors = reason.errors.full_messages
    });
}