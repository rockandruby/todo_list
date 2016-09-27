/**
 * Created by user on 27.09.16.
 */
app.controller('TasksController', ['$scope', 'Flash', 'task', TasksController]);

function TasksController($scope, Flash, task){
    $scope.add_task = function(){
        if(!validate()) return Flash.create('danger', 'Title can\'t be empty!');
        task.add_task($scope.project.id, $scope.task_title)
            .then(function successCallback(response) {
            $scope.project.tasks.push(response.data);
            Flash.create('success', 'New task added!');
            $scope.task_title = null
        }, function errorCallback() {
            Flash.create('danger', 'Not authorized!');
        });
    };

    function validate(){
        return $scope.task_title != null && $scope.task_title.length > 0
    }
}