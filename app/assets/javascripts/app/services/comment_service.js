/**
 * Created by user on 30.09.16.
 */
app.factory('comment', ['$http', '$auth', 'Upload', function ($http, $auth, Upload) {
    return {
        delete_comment: function (task, comment) {
            return $http({
                method: 'DELETE',
                url: $auth.apiUrl() + '/projects/' + task.project_id + '/tasks/'
                + task.id + '/comments/' + comment.id
            })
        },
        add_comment: function (task, comment) {
            return Upload.upload({
                url: $auth.apiUrl() + '/projects/' + task.project_id + '/tasks/' + task.id + '/comments',
                data: {comment: comment}
            })
        }
    }
}]);