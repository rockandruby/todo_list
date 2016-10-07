/**
 * Created by user on 30.09.16.
 */
app.factory('comment', ['$http', 'Upload', function ($http, Upload) {
    return {
        delete_comment: function (comment) {
            return $http.delete('/projects/' + comment.project_id + '/tasks/'
            + comment.task_id + '/comments/' + comment.id)
        },
        add_comment: function (comment) {
            return Upload.upload({
                url: '/projects/' + comment.project_id + '/tasks/' + comment.task_id + '/comments',
                data: {comment: comment}
            })
        }
    }
}]);