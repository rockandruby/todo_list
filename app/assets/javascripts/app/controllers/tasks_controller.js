/**
 * Created by user on 27.09.16.
 */
app.controller('TasksController', ['$scope', '$http', '$auth', 'Flash', TasksController]);

function TasksController($scope, $http, $auth, Flash){
    $scope.add_task = function(){
        if(!validate()) return Flash.create('danger', 'Title can\'t be empty!');
        $http({
            method: 'POST',
            url: $auth.apiUrl() + '/projects/'+ $scope.project.id + '/tasks',
            data: {title: $scope.task_title}
        }).then(function successCallback(response) {
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