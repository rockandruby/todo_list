/**
 * Created by user on 27.09.16.
 */
app.controller('TasksController', ['$scope', 'Flash', 'task', TasksController]);

function TasksController($scope, Flash, task) {

    $scope.add_task = function () {
        data = {title: $scope.title};
        if (!validate(data)) return Flash.create('danger', 'Title can\'t be empty!');
        task.add_task($scope.project, data)
            .then(function successCallback(response) {
                $scope.project.tasks.push(response.data);
                Flash.create('success', 'New task added!');
                delete $scope.title
            });
    };

    $scope.update_task = function () {
        if (!validate($scope.task_data.task)) return $scope.task_data.error = true;
        task.edit_task($scope.task_data.task)
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
        task.prioritise(task_obj, $scope.task_data.direction)
            .then(function successCallback(response) {
                $scope.project = response.data
            })
    };

    $scope.StrToDate = function (str) {
        if (str != null) return new Date(str);
    };

    $scope.check_deadline = function (obj) {
        if (obj.deadline != null) return new Date() > new Date(obj.deadline)
    };

    function validate(obj) {
        return obj.title != null && obj.title.length > 0
    }
}