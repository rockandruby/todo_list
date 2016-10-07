/**
 * Created by user on 27.09.16.
 */
app.factory('task', ['$http', function ($http) {
    return {
        add_task: function (task) {
            return $http.post('/projects/' + task.project_id + '/tasks', {task: task})
        },
        edit_task: function (task) {
            return $http.put('/projects/' + task.project_id + '/tasks/' + task.id, {task: task})
        },
        delete_task: function (task) {
            return $http.delete('/projects/' + task.project_id + '/tasks/' + task.id)
        },
        prioritise: function (task) {
            return $http.put('/projects/' + task.project_id + '/tasks/' + task.id + '/prioritise',
                {direction: task.direction})
        }
    }
}]);