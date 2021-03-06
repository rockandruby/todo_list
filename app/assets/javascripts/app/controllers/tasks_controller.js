/**
 * Created by user on 27.09.16.
 */
app.controller('TasksController', ['$scope', 'Flash', 'task', TasksController]);

function TasksController($scope, Flash, task) {

    $scope.add_task = function () {
        var data = {title: $scope.title, project_id: $scope.project.id};
        task.add_task(data)
            .then(function successCallback(response) {
                $scope.project.tasks.push(response.data);
                Flash.create('success', 'New task added!');
                $scope.title = null
            });
    };

    $scope.current_task.update_task = function (task_obj) {
        task.edit_task(task_obj)
            .then(function successCallback() {
                angular.element('#task_modal').modal('hide');
                Flash.create('success', 'Task updated!');
            })
    };

    $scope.delete_task = function (task_obj) {
        task.delete_task(task_obj)
            .then(function successCallback() {
                index = $scope.project.tasks.indexOf(task_obj);
                $scope.project.tasks.splice(index, 1);
                Flash.create('success', 'Task deleted!');
            })
    };

    $scope.change_position = function (task_obj) {
        task.prioritise(task_obj)
            .then(function successCallback(response) {
                $scope.project.tasks = response.data.tasks;
                Flash.create('success', 'Task updated!');
            })
    };

    $scope.StrToDate = function (str) {
        if (str != null) return new Date(str);
    };

    $scope.check_deadline = function (obj) {
        if (obj.deadline != null && !obj.is_done) return new Date() > new Date(obj.deadline)
    };
}