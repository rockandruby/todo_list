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
        edit_task: function(data){
            return $http({
                method: 'PATCH',
                url: $auth.apiUrl() + '/projects/'+ data.project_id + '/tasks/' + data.id,
                data: data
            })
        },
        delete_task: function(project_id, task_id){
            return $http({
                method: 'DELETE',
                url: $auth.apiUrl() + '/projects/'+ project_id + '/tasks/' + task_id
            })
        }
    }
}]);