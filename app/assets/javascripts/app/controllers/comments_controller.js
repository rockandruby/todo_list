/**
 * Created by user on 30.09.16.
 */
app.controller('CommentsController', ['$scope', 'comment', CommentsController]);

function CommentsController($scope, comment) {

    $scope.add_comment = function(){
        $scope.comment_data.project_id = $scope.current_task.task.project_id;
        $scope.comment_data.task_id = $scope.current_task.task.id;
        comment.add_comment($scope.comment_data)
            .then(function successCallback(response) {
                $scope.current_task.task.comments.push(response.data);
                $scope.comment_data = {}
            })
    };

    $scope.delete_comment = function (comment_obj) {
        comment_obj.project_id = $scope.current_task.task.project_id;
        comment.delete_comment(comment_obj)
            .then(function successCallback() {
                index = $scope.current_task.task.comments.indexOf(comment_obj);
                $scope.current_task.task.comments.splice(index, 1);
            })
    };
}