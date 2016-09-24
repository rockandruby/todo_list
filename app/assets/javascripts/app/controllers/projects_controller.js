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
            $scope.title = null
        }, function errorCallback() {
            $scope.error = true
        });
    };

    $scope.delete_project = function(project){
        $http({
            method: 'DELETE',
            url: $auth.apiUrl() + '/projects/' + project.id
        }).then(function successCallback(response) {
            Flash.create('success', 'Project deleted!');
            for(i = 0; i < $scope.projects.length; i++){
                if($scope.projects[i].id == response.data.id){
                    $scope.projects.splice(i, 1)
                }
            }
        }, function errorCallback() {
            Flash.create('danger', 'You\'re not authorized!');
        });
    }

}