/**
 * Created by user on 23.09.16.
 */
app.controller('ProjectsController', ['$scope', 'Flash', 'project', ProjectsController]);

function ProjectsController($scope, Flash, project) {

    project.get_projects()
        .then(function successCallback(response) {
            $scope.projects = response.data;
        });

    $scope.add_project = function () {
        project.add_project($scope.project_data)
            .then(function successCallback(response) {
                $scope.projects.push(response.data);
                Flash.create('success', 'New project added!');
                angular.element('#add_project_modal').modal('hide');
                $scope.project_data = {}
            })
    };

    $scope.update_project = function () {
        project.edit_project($scope.project_data.project)
            .then(function successCallback() {
                angular.element('#edit_project_modal').modal('hide');
                Flash.create('success', 'Project updated!');
                $scope.project_data = {}
            })
    };

    $scope.delete_project = function (project_obj) {
        project.delete_project(project_obj)
            .then(function successCallback() {
                index = $scope.projects.indexOf(project_obj);
                $scope.projects.splice(index, 1);
                Flash.create('success', 'Project deleted!');
            })
    };
}