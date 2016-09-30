/**
 * Created by user on 30.09.16.
 */
app.controller('CommentsController', ['$scope', 'comment', CommentsController]);

function CommentsController($scope, comment) {

    $scope.delete_comment = function (comment_obj) {
        comment.delete_comment($scope.task_data.task, comment_obj)
            .then(function successCallback() {
                index = $scope.task_data.task.comments.indexOf(comment_obj);
                $scope.task_data.task.comments.splice(index, 1);
            })
    };

    $scope.add_comment = function () {
        if(!validate($scope.comment_data)) return $scope.error = 'Fill in required fields!';
        comment.add_comment($scope.task_data.task, $scope.comment_data)
            .then(function successCallback(response) {
                $scope.task_data.task.comments.push(response.data);
                $scope.comment_data = null
            })
    };

    function validate(comment_obj){
        return comment_obj.title != null && comment_obj.title.length > 0
    }
}