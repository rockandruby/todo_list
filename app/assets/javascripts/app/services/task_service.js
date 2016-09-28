/**
 * Created by user on 27.09.16.
 */
app.factory('task', ['$http', '$auth', function($http, $auth){
    return {
        add_task: function(project_id, title){
            return $http({
                method: 'POST',
                url: $auth.apiUrl() + '/projects/'+ project_id + '/tasks',
                data: {title: title}
            })
        },
        update_task: function(project_id, task_id, direction){
            return $http({
                method: 'PATCH',
                url: $auth.apiUrl() + '/projects/'+ project_id + '/tasks/' + task_id,
                data: {direction: direction, project_id: project_id, id: task_id}
            })
        }
    }
}]);