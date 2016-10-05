/**
 * Created by user on 27.09.16.
 */
app.factory('project', ['$http', '$auth', function ($http, $auth) {
    return {
        get_projects: function () {
            return $http({
                method: 'GET',
                url: $auth.apiUrl() + '/projects'
            })
        },
        add_project: function (project) {
            return $http({
                method: 'POST',
                url: $auth.apiUrl() + '/projects',
                data: {project: project}
            })
        },
        edit_project: function (project) {
            return $http({
                method: 'PUT',
                url: $auth.apiUrl() + '/projects/' + project.id,
                data: {project: project}
            })
        },
        delete_project: function (project) {
            return $http({
                method: 'DELETE',
                url: $auth.apiUrl() + '/projects/' + project.id
            })
        }
    }
}]);