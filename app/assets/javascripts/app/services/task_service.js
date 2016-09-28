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
        edit_task: function(obj, data){
            return $http({
                method: 'PATCH',
                url: $auth.apiUrl() + '/projects/'+ obj.project_id + '/tasks/' + obj.id,
                data: {task: data}
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