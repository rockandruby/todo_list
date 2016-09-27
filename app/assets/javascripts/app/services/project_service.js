/**
 * Created by user on 27.09.16.
 */
app.factory('project', ['$http', '$auth', function($http, $auth){
    return {
        get_projects: function(){
            return $http({
                method: 'GET',
                url: $auth.apiUrl() + '/projects'
            })
        },
        add_project: function(title){
            return $http({
                method: 'POST',
                url: $auth.apiUrl() + '/projects',
                data: {title: title}
            })
        },
        edit_project: function(id, title){
            return $http({
                method: 'PATCH',
                url: $auth.apiUrl() + '/projects/' +id,
                data: {title: title}
            })
        },
        delete_project: function(id){
            return $http({
                method: 'DELETE',
                url: $auth.apiUrl() + '/projects/' + id
            })
        }
    }
}]);