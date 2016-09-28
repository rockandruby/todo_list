/**
 * Created by user on 27.09.16.
 */
app.controller('TasksController', ['$scope', 'Flash', 'task', TasksController]);

function TasksController($scope, Flash, task) {
    $scope.task_data = {};

    $scope.add_task = function () {
        if (!validate()) return Flash.create('danger', 'Title can\'t be empty!');
        task.add_task($scope.project.id, $scope.task_title)
            .then(function successCallback(response) {
                $scope.project.tasks.push(response.data);
                Flash.create('success', 'New task added!');
                $scope.task_title = null
            });
    };

    $scope.update_task = function (project_obj, task_obj, direction) {
        task.update_task(project_obj.id, task_obj.id, direction)
            .then(function successCallback(response) {
                $scope.project = response.data
            })
    };

    $scope.delete_task = function (project_obj, task_obj) {
        task.delete_task(project_obj.id, task_obj.id)
            .then(function successCallback(response) {
                Flash.create('success', 'Task deleted!');
                $scope.project.tasks = response.data
            })
    };

    function validate() {
        return $scope.task_title != null && $scope.task_title.length > 0
    }
}