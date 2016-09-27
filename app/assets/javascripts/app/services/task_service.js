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
        }
    }
}]);