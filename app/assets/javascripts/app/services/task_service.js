/**
 * Created by user on 27.09.16.
 */
app.factory('task', ['$http', '$auth', function ($http, $auth) {
    return {
        add_task: function (project, task) {
            return $http({
                method: 'POST',
                url: $auth.apiUrl() + '/projects/' + project.id + '/tasks',
                data: {task: task}
            })
        },
        edit_task: function (task) {
            return $http({
                method: 'PUT',
                url: $auth.apiUrl() + '/projects/' + task.project_id + '/tasks/' + task.id,
                data: {task: task}
            })
        },
        delete_task: function (task) {
            return $http({
                method: 'DELETE',
                url: $auth.apiUrl() + '/projects/' + task.project_id + '/tasks/' + task.id
            })
        },
        prioritise: function (task, direction) {
            return $http({
                method: 'PUT',
                url: $auth.apiUrl() + '/projects/' + task.project_id + '/tasks/' + task.id + '/prioritise',
                data: {direction: direction}
            })
        }
    }
}]);