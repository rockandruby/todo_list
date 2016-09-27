/**
 * Created by user on 27.09.16.
 */
app.controller('TasksController', ['$scope', '$http', '$auth', 'Flash', TasksController]);

function TasksController($scope, $http, $auth, Flash){
    $scope.add_task = function(){
        $http({
            method: 'POST',
            url: $auth.apiUrl() + '/projects/'+ $scope.project.id + '/tasks',
            data: {title: $scope.task_title}
        }).then(function successCallback(response) {
            console.log($scope.project)
            //Flash.create('success', 'New task added!');
        }, function errorCallback() {
            //Flash.create('danger', 'Not authorized!');
        });
    }
}