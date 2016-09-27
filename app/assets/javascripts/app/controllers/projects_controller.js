/**
 * Created by user on 23.09.16.
 */
app.controller('ProjectsController', ['$scope', '$http', '$auth', 'Flash', ProjectsController]);

function ProjectsController($scope, $http, $auth, Flash){
    $http({
        method: 'GET',
        url: $auth.apiUrl() + '/projects'
    }).then(function successCallback(response) {
        $scope.projects = response.data;
    });

    $scope.add_project = function(){
        if(!validate()) return $scope.error = true;
        $http({
            method: 'POST',
            url: $auth.apiUrl() + '/projects',
            data: {title: $scope.title}
        }).then(function successCallback(response) {
            angular.element('#project_modal').modal('hide');
            $scope.projects.push(response.data);
            Flash.create('success', 'New project added!');
        }, function errorCallback() {
            $scope.error = true
        });
    };

    $scope.edit_project = function(){
        if(!validate()) return $scope.error = true;
        $http({
            method: 'PATCH',
            url: $auth.apiUrl() + '/projects/' + $scope.project.id,
            data: {title: $scope.title}
        }).then(function successCallback(response) {
            angular.element('#project_modal').modal('hide');
            Flash.create('success', 'Project updated!');
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
    };

    $scope.before_edit = function(project){
        $scope.error = false;
        $scope.project = project;
        $scope.title = project.title
    };

    $scope.before_add = function(){
        $scope.error = false;
        $scope.title = null;
    };

    function validate(){
        return $scope.title != null && $scope.title.length > 0
    }
}