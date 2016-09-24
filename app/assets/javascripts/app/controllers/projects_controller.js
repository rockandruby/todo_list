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
    });
    $scope.add_project = function(){
        $scope.error = false;
        if($scope.title == null) return $scope.error = true;
        $http({
            method: 'POST',
            url: $auth.apiUrl() + '/projects',
            data: {title: $scope.title}
        }).then(function successCallback(response) {
            angular.element('#add_project').modal('hide');
            $scope.projects.push(response.data);
            Flash.create('success', 'New project added!');
        }, function errorCallback(response) {
            $scope.error = true
        });
    }
}