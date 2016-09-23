/**
 * Created by user on 23.09.16.
 */
app.controller('ProjectsController', ['$scope', '$http', '$auth', 'Flash', ProjectsController]);

function ProjectsController($scope, $http, $auth, Flash){
    $http({
        method: 'GET',
        url: $auth.apiUrl() + '/projects'
    }).then(function successCallback(response) {
        $scope.projects = response.data
    }, function errorCallback(response) {
        console.log(response)
    });
    $scope.add_project = function(){
        $http({
            method: 'POST',
            url: $auth.apiUrl() + '/projects',
            data: {title: $scope.title}
        }).then(function successCallback(response) {
            angular.element('#add_project').modal('hide');
        }, function errorCallback(response) {
            console.log(response)
        });
    }
}