/**
 * Created by user on 23.09.16.
 */
app.controller('ProjectsController', ['$scope', 'Flash', 'project', ProjectsController]);

function ProjectsController($scope, Flash, project){

    $scope.project_data = {};

    project.get_projects()
        .then(function successCallback(response) {
        $scope.projects = response.data;
    });

    $scope.add_project = function(){
        if(!validate()) return $scope.error = true;
        project.add_project($scope.project_data.title)
            .then(function successCallback(response) {
            angular.element('#project_modal').modal('hide');
            $scope.projects.push(response.data);
            Flash.create('success', 'New project added!');
        }, function errorCallback() {
            $scope.error = true
        });
    };

    $scope.edit_project = function(){
        if(!validate()) return $scope.error = true;
        project.edit_project($scope.project.id, $scope.project_data.title)
            .then(function successCallback() {
            $scope.project.title = $scope.project_data.title;
            angular.element('#project_modal').modal('hide');
            Flash.create('success', 'Project updated!');
        }, function errorCallback() {
            $scope.error = true
        });
    };

    $scope.delete_project = function(project_obj){
        project.delete_project(project_obj.id)
            .then(function successCallback(response) {
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

    $scope.before_edit = function(project_obj){
        $scope.error = false;
        $scope.project = project_obj;
        $scope.project_data.title = project_obj.title
    };

    $scope.before_add = function(){
        $scope.error = false;
        $scope.project_data.title = $scope.project = null;
    };

    function validate(){
        title = $scope.project_data.title;
        return title != null && title.length > 0
    }
}