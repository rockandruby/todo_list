/**
 * Created by user on 30.09.16.
 */
app.controller('CommentsController', ['$scope', 'comment', CommentsController]);

function CommentsController($scope, comment){
    $scope.delete_comment = function(comment_obj){
        comment.delete_comment($scope.task_data.task, comment_obj)
            .then(function successCallback(response){
                index = $scope.task_data.task.comments.indexOf(comment_obj);
                $scope.task_data.task.comments.splice(index, 1);
                console.log(response)
            })
    }

    $scope.add_comment = function(project){

    }
}