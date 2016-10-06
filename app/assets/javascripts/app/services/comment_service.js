/**
 * Created by user on 30.09.16.
 */
app.factory('comment', ['$http', '$auth', 'Upload', function ($http, $auth, Upload) {
    return {
        delete_comment: function (comment) {
            return $http({
                method: 'DELETE',
                url: $auth.apiUrl() + '/projects/' + comment.project_id + '/tasks/'
                + comment.task_id + '/comments/' + comment.id
            })
        },
        add_comment: function (comment) {
            return Upload.upload({
                url: $auth.apiUrl() + '/projects/' + comment.project_id + '/tasks/' + comment.task_id + '/comments',
                data: {comment: comment}
            })
        }
    }
}]);